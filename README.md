# Camino del Gong — Web oficial

Sitio web de **Camino del Gong**, el sendero de la práctica meditativa con cuencos tibetanos, gongs y armónicos.

- **Luthería consciente**: cuencos tibetanos antiguos y contemporáneos, gongs, campanas de viento.
- **Cursos**: formación en baño de sonido, masaje sonoro y práctica personal.
- **Acompañamiento**: sesiones individuales y ceremonias de gong.

## Stack técnico

- Sitio estático HTML + CSS plano (sin frameworks)
- Hosting: **Cloudflare Pages** (despliegue automático con cada push)
- Dominio: **caminodelgong.com** (Cloudflare Registrar)

## Estructura

- `index.html` — Página principal con todas las secciones
- `assets/css/main.css` — Todo el sistema de diseño (colores, tipografías, animaciones, responsive)
- `assets/js/main.js` — Interactividad ligera (menú móvil, navegación por scroll, scroll-reveal)
- `sitemap.xml` — Índice de páginas para buscadores

## Contenido

### Arquitectura
- `ARCHITECTURE.md` — Diseño, identidad, flujo de trabajo y mantenimiento

## Despliegue

Cada push a `main` despliega automáticamente en Cloudflare Pages:
`https://caminodelgong.pages.dev`

El dominio `caminodelgong.com` apunta a Cloudflare (configurado en `CNAME`).

## Créditos

&copy; 2026 Camino del Gong — Diego Montenegro
