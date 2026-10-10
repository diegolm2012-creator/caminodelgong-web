# caminodelgong.com — Sitio oficial

Sitio web de **El Templo del Gong** y sus cuatro marcas: la casa (El Templo del
Gong), la escuela armónica (Camino del Gong), la artesanía (Vikingong) y los
productos digitales (MaitreyIA).

## Stack técnico

- Sitio estático HTML + CSS + JS vanilla (sin frameworks)
- Hosting: **Cloudflare Pages** (despliegue automático con cada push)
- Dominio: **caminodelgong.com** (Cloudflare Registrar)

## Estructura

```
/                     → Home (El Templo del Gong)
/quien-soy/           → Biografía de Diego
/linaje/              → Don Conreaux y linaje
/contacto/            → Formulario de contacto
/camino/              → Camino del Gong (escuela armónica)
/camino/ensenanzas/   → Linaje Don Conreaux
/camino/formacion/    → Gong Master Training
/camino/sesiones/     → Baños de gong, conciertos
/camino/performances/ → Teatro sonoro
/taller/              → Vikingong (taller de artesanía)
/taller/gongs/        → Los instrumentos (60/75/95 cm)
/taller/crea-tu-gong/ → Talleres «Crea tu gong»
/maitreyia/           → MaitreyIA (productos digitales) [PENDIENTE DE DIEGO]
```

## Recursos compartidos

- `css/style.css` — Sistema de diseño único (paleta, tipografía, componentes)
- `assets/js/main.js` — Interactividad (menú móvil, scroll-reveal, navegación)
- `sitemap.xml` — 13 URLs

## Contenido

### Arquitectura
- `ARCHITECTURE.md` — Diseño, identidad, flujo de trabajo y mantenimiento

## Despliegue

Cada push a `main` despliega automáticamente en Cloudflare Pages:
`https://caminodelgong.pages.dev`

El dominio `caminodelgong.com` apunta a Cloudflare (configurado en `CNAME`).

## Créditos

&copy; 2026 El Templo del Gong — Diego Montenegro
