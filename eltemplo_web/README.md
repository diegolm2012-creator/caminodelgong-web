# El Templo del Gong

Sitio web de El Templo del Gong - Tienda de Gongs y Cuencos Tibetanos.

## Estado

- **Origen**: WordPress + WooCommerce alojado en Raiola Networks
- **Destino**: Cloudflare Pages (sitio estático)
- **Fase**: Web recuperada vía Wayback Machine (julio 2026)

## Contenido

Esta web fue recuperada del archive.org (Wayback Machine) y convertida a sitio estático para servir desde Cloudflare Pages bajo el dominio `eltemplodelgong.com`.

## Estructura

```
eltemplo_web/
├── index.html      # Página principal
├── robots.txt      # Robots exclusion
└── README.md       # Este archivo
```

## Notas técnicas

- No hay redirección 301 a `caminodelgong.com` desde esta ruta
- Para cambiar el comportamiento, edita las reglas de redirect en Cloudflare Dashboard
- El hosting original de Raiola está suspendido - esta web funciona sin necesidad de backend

## Recuperación

Contenido recuperado de Internet Archive:
- Página principal (11/07/2026)
- Tienda y categorías
- Escuela Don Conreaux
- Calendario de eventos

## Despliegue

Cloudflare Pages está configurado para este repo. El dominio `eltemplodelgong.com` debe apuntar a los DNS de Cloudflare configurados previamente.