#!/usr/bin/env python3
"""Versiona los assets compartidos (CSS/JS) en todos los HTML del sitio.

Cada asset se identifica por su ruta dentro del repo (p. ej. ``css/style.css``).
El token de version es el hash SHA-256 del contenido normalizado a LF,
truncado a 12 hex. Normalizar a LF importa porque el repo esta en CRLF y
Cloudflare Pages sirve LF: asi el token coincide con los bytes servidos y es
estable entre plataformas. El token cambia solo cuando cambia el archivo.

Uso:
    python scripts/bump_assets.py              # reescribe ?v= y muestra resumen
    python scripts/bump_assets.py --check      # no escribe; exit 1 si hay que bump
    python scripts/bump_assets.py --name-only  # reescribe y lista solo las rutas

Para anadir un asset compartido basta con anadirlo a ``ASSETS``.
"""

from __future__ import annotations

import argparse
import hashlib
import re
import sys
from pathlib import Path

# Assets compartidos -> sufijo de URL que los identifica en los HTML.
ASSETS = (
    "css/style.css",
    "assets/js/main.js",
)

# Carpetas ajenas al sitio principal (subproyectos / metadatos).
SKIP_DIRS = {".git", "eltemplo_web"}

VERSION_CHARS = 12


def version_for(path: Path) -> str:
    """Hash del contenido normalizado a LF (el repo esta en CRLF, Pages sirve LF)."""
    data = path.read_bytes().replace(b"\r\n", b"\n").replace(b"\r", b"\n")
    return hashlib.sha256(data).hexdigest()[:VERSION_CHARS]


def html_files(root: Path):
    for path in sorted(root.rglob("*.html")):
        if any(part in SKIP_DIRS for part in path.relative_to(root).parts):
            continue
        yield path


def bump_html(text: str, asset: str, version: str) -> tuple[str, int]:
    # Captura (href|src)=".../<asset>" y, opcionalmente, un ?v= anterior.
    pattern = re.compile(
        r'((?:href|src)="[^"]*?' + re.escape(asset) + r')(\?v=[^"]*)?"'
    )
    return pattern.subn(lambda m: f'{m.group(1)}?v={version}"', text)


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Versiona ?v= de los assets compartidos a partir de su hash."
    )
    parser.add_argument(
        "--root",
        default=None,
        help="raiz del repo (por defecto: el padre de scripts/)",
    )
    parser.add_argument(
        "--check",
        action="store_true",
        help="no escribe; exit 1 si algun HTML no apunta a la version actual",
    )
    parser.add_argument(
        "--name-only",
        action="store_true",
        help="reescribe y lista solo las rutas tocadas (para el hook pre-commit)",
    )
    args = parser.parse_args()

    root = (
        Path(args.root).resolve()
        if args.root
        else Path(__file__).resolve().parent.parent
    )

    versions: dict[str, str] = {}
    for asset in ASSETS:
        path = root / asset
        if not path.is_file():
            print(f"error: no existe {path}", file=sys.stderr)
            return 2
        versions[asset] = version_for(path)

    changed: list[str] = []
    total_subs = 0
    for html in html_files(root):
        original = html.read_bytes().decode("utf-8")
        text = original
        subs = 0
        for asset, version in versions.items():
            text, n = bump_html(text, asset, version)
            subs += n
        if text != original:
            if not args.check:
                html.write_bytes(text.encode("utf-8"))
            changed.append(html.relative_to(root).as_posix())
            total_subs += subs
            if not args.name_only:
                print(f"{changed[-1]}: {subs} referencia(s) -> version nueva")

    if args.name_only:
        for rel in changed:
            print(rel)
        return 0

    print(
        "versiones: "
        + ", ".join(f"{asset}=v{version}" for asset, version in versions.items())
    )
    if changed:
        print(f"{len(changed)} HTML actualizados ({total_subs} referencias)")
    else:
        print("sin cambios: todos los HTML ya apuntan a la version actual")

    if args.check and changed:
        print("--check: hay versiones desactualizadas", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
