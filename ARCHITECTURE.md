# Arquitectura del sitio — Camino del Gong

Proyecto: caminodelgong.com · Perfil web (web) · Repositorio:
`https://github.com/diegolm2012-creator/caminodelgong-web` (rama `main`,
despliegue automático Cloudflare Pages).

## 1. Objetivo

Crear la mejor página web del mundo del Gong: un sitio que transmita el mensaje
central del ecosistema — **divulgar los usos y la utilidad del Gong como
instrumento sagrado**, no vender — con identidad propia, código limpio,
accesible y verificable.

## 2. Especificación de la marca

| Ámbito | Dato verídico |
|---|---|
| Nombre y dominio | Camino del Gong — `caminodelgong.com` (Cloudflare, operativa) |
| Ecosistema | **El Templo del Gong** (la casa) · Camino del Gong (escuela armónica) · Vikingong (artesanía) · MaitreyIA (productos digitales) |
| Jerarquía | El Templo del Gong es siempre el primer nivel (migas, footer, nav). Las submarcas nunca se presentan como sustitutas de la casa. |
| Misión de comunicación | Divulgar los usos y la utilidad del Gong como instrumento sagrado; no es vender: es educar y acercar |
| Tamaños de gong | 60 / 75 / 95 cm (precios SIEMPRE privados — nunca aparecer) |
| Ubicación | Taller: Galicia y Lanzarote |
| Contacto formal | `elcaminodelgong@gmail.com` (no publicar teléfono) |
| Canales | YouTube `@elcaminodelgong` · IG `@vikingong` · TikTok `@vikingong` · FB página de El Templo del Gong |
| Excluidos | `eltemplodelgong.com` — SUSPENDIDA; NO usar enlaces inventados |
| Vocabulario del oficio | gong · batido / strokes · armónicos · resonancia · afinación · aleación · flourish · silencio · presencia · instrumento sagrado · ceremonia · intención · vibración · viaje sonoro |
| Tono | Español natural (castellano de España). Doctrina firme, trato humilde. Cero precios, cero CTA comercial en el registro doctrinal. |

## 3. Arquitectura técnica

- **Stack**: HTML semántico + CSS (custom properties, Grid, Flexbox) + JS vanilla.
  Sin frameworks, sin dependencias de build. Compatible con cualquier servidor
  estático y con Cloudflare Pages.
- **Estructura**: multi-página con subcarpetas. Una sola hoja de estilos y un
  solo JS compartidos por todo el sitio.
- **URLs limpias**: `/camino/ensenanzas/` (no `index.html`). Cloudflare Pages
  resuelve los `index.html` de cada carpeta automáticamente.

### Estructura de archivos

```
caminodelgong-web-restore/
├── index.html                    → Home (El Templo del Gong)
├── CNAME                         → caminodelgong.com
├── favicon.svg                   → Sello del sitio
├── robots.txt                    → SEO
├── seo.jsonld                    → Datos estructurados
├── sitemap.xml                   → 13 URLs
├── ARCHITECTURE.md               → Este documento
├── README.md                     → Resumen del proyecto
│
├── css/
│   └── style.css                 → Sistema de diseño (único, compartido)
│
├── assets/
│   ├── js/
│   │   └── main.js               → Interactividad (único, compartido)
│   └── img/                      → Imágenes (futuro)
│
├── camino/                       → Camino del Gong
│   ├── index.html                → Portada de la escuela
│   ├── ensenanzas/index.html     → Linaje Don Conreaux
│   ├── formacion/index.html      → Gong Master Training
│   ├── sesiones/index.html       → Baños de gong, conciertos
│   └── performances/index.html   → Teatro sonoro
│
├── taller/                       → Vikingong
│   ├── index.html                → Portada del taller
│   ├── gongs/index.html          → Los instrumentos (60/75/95 cm)
│   └── crea-tu-gong/index.html   → Talleres «Crea tu gong»
│
├── maitreyia/                    → MaitreyIA
│   └── index.html                → [PENDIENTE DE DIEGO]
│
├── quien-soy/index.html          → Biografía de Diego
├── linaje/index.html             → Don Conreaux y linaje
├── contacto/index.html           → Formulario de contacto
│
└── informes/
    └── web_v1_verificacion.md    → Verificación anterior
```

## 4. Diseño visual

- **Atmósfera**: profunda, sonora, artesanal. Herencia tibetana con acentos
  dorados y cobre sobre fondos oscuros.
- **Paleta**: fondos oscuros (`--bg-deepest` #0a0a0b, `--bg-panel` #141518,
  `--bg-card` #1e2028) con acentos dorado (`--accent-gold` #c9a84c) y cobre
  (`--accent-copper` #b87333). Custom properties en `css/style.css`.
- **Tipografía**: Georgia / 'Times New Roman' serif (display y body).
- **Animaciones**: fade-in, pulso sutil del símbolo del gong, scroll-reveal.
- **Responsive**: ancho máximo 1200px, nav colapsable en móvil,
  Grid adaptable (auto-fill minmax 280px), sin dependencia de JS para leer.

## 5. Componentes de la página

- **Nav**: logo "◯ El Templo del Gong" (la casa), enlaces a las 4 marcas, botón hamburguesa en móvil.
- **Hero**: título "El gong no se vende, se comprende" + subtítulo + CTA.
- **Breadcrumbs**: El Templo del Gong › Submarca › Página (jerarquía de marcas).
- **Subnav**: menú contextual por submarca (Enseñanzas, Formación, etc.).
- **Cards**: reutilizables, con hover dorado/cobre.
- **Gong-cards**: 60/75/95 cm, sin precios, solo identidad y sonido.
- **Contacto**: formulario + email + WhatsApp.
- **Footer**: 4 columnas de marcas + email + copyright.

## 6. Flujo de trabajo de desarrollo

1. Setup del entorno (herramientas: git, GitHub, Cloudflare Pages).
2. Arquitectura de información definida en `web_arquitectura_ia.md`.
3. Estructura multi-página con subcarpetas implementada.
4. Recursos compartidos: `css/style.css` + `assets/js/main.js` (único CSS y JS).
5. Verificación local: todas las URLs responden 200.
6. Commit en `main` → despliegue Cloudflare Pages automático.

## 7. Mantenimiento

- Edición directa de `index.html`, subcarpetas, `css/style.css` y
  `assets/js/main.js` (sin build).
- `sitemap.xml` actualizable manualmente (13 URLs).
- Verificación local antes de commit: `python -m http.server` + comprobación
  de que todas las URLs responden 200.
- Registro de cambios (logs) en la bitácora del repositorio.

## 8. Restricciones

- **Nunca publicar precios** ni importes.
- **No enlaces a `eltemplodelgong.com`** (dominio suspendido).
- **No inventar handles de redes.** Usar solo los verificados.
- **No promesas de curación** ni beneficios terapéuticos concretos.
- **No testimonios inventados** ni superlativos de marca.
- **No publicidad ni afiliados.**
- **Solo un email público**: `elcaminodelgong@gmail.com`.
- **Navegación por teclado** y `aria` conforme a WCAG.
- El dominio `caminodelgong.com` ya apunta a Cloudflare; no se toca DNS.
- El repositorio base es el de Diego en GitHub (`diegolm2012-creator/caminodelgong-web`),
  con la rama `main` un tanto ligera; se debe agregar el frontend completo.
- **Migas de pan**: El Templo del Gong es siempre el primer nivel.
