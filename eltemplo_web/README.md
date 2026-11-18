# El Templo del Gong

Sitio web de El Templo del Gong - Tienda de Gongs y Cuencos Tibetanos.

## Estado

- **Origen**: WordPress + WooCommerce alojado en Raiola Networks
- **Servicio real**: el Worker `eltemplo-web` (Cloudflare Workers) sirve `eltemplodelgong.com`; su fuente es `worker.mjs`
- **Assets**: servidos como estáticos desde `https://caminodelgong.com/eltemplo_web/assets/`
- **Fase**: Web recuperada vía Wayback Machine (julio 2026)

## Contenido

Esta web fue recuperada del archive.org (Wayback Machine) y convertida a sitio estático. La portada que se sirve hoy está definida dentro de `worker.mjs` (plantilla HTML v4).

## Estructura

```
eltemplo_web/
├── worker.mjs     # ✅ Fuente canónico del Worker «eltemplo-web» (v4)
├── index.html     # ⚠️ Borrador antiguo (OBSOLETO) — no editar
├── assets/        # Imágenes que sirve el Worker (logo, hero, caracola, gong)
├── robots.txt     # Robots exclusion
└── README.md      # Este archivo
```

## Notas técnicas

- El Worker `eltemplo-web` (id `6a748bba5b2047c3b9dc8833f92ee401`) es quien sirve `eltemplodelgong.com`; su versión activa es la 4 (`bc9d2bf8-e7fb-44cb-9874-51f3ba623a1d`, módulo `worker.mjs`).
- `worker.mjs` se obtuvo con `cf workers versions get latest --worker-id eltemplo-web --include modules`; al renderizar su plantilla reproduce byte a byte el HTML live (6860 B, SHA-256 `fbdea829181125d13d72f483a585b7a7505525af933409a51bfe6d27bc17513d`).
- `index.html` es un borrador antiguo (3556 B) que enlaza un `css/style.css` inexistente; se conserva solo como referencia histórica.
- Los assets los sirve Cloudflare Pages (proyecto `caminodelgong-web`) bajo `caminodelgong.com/eltemplo_web/assets/`.
- El hosting original de Raiola está suspendido - esta web funciona sin necesidad de backend

## Recuperación

Contenido recuperado de Internet Archive:
- Página principal (11/07/2026)
- Tienda y categorías
- Escuela Don Conreaux
- Calendario de eventos

## Despliegue

- `eltemplodelgong.com` → Worker `eltemplo-web` (no es un deploy de Pages).
- `caminodelgong.com` → Cloudflare Pages (proyecto `caminodelgong-web`, rama `main`).