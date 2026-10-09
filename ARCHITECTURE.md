# Arquitectura del sitio — Camino del Gong

Proyecto: caminodelgong.com · Perfil web (web) · Repositorio:
`https://github.com/diegolm2012-creator/caminodelgong-web` (rama `main`,
despliegue automático Cloudflare Pages).

## 1. Objetivo

Crear la mejor página web del mundo del Gong: un sitio que transmita el mensaje
central del ecosistema — **divulgar los usos y la utilidad del Gong como
instrumento sagrado**, no vender — con identidad propia, código limpio,
accesible y verificable.

## 2. Especificación de la marca (fuente: base_conocimiento/)

| Ámbito | Dato verídico |
|---|---|
| Nombre y dominio | Camino del Gong — `caminodelgong.com` (Cloudflare, operativo) |
| Ecosistema | Vikingong (luthería) · El Camino del Gong (divulgación/formación/comunidad) · El Templo del Gong (@elcaminodelgong) |
| Misión de comunicación | Divulgar los usos y la utilidad del Gong como instrumento sagrado; no es vender: es educar y acercar |
| Tamaños de gong | 60 / 75 / 95 cm (precios SIEMPRE privados — nunca aparecer) |
| Ubicación | Taller: Galicia y Lanzarote |
| Contacto formal | `elcaminodelgong@gmail.com` (no publicar teléfono) |
| Canales | YouTube `@elcaminodelgong` · IG/FB `@vikingong` · TikTok (sesión en navegador) |
| Excluidos | `eltemplodelgong.com` — SUSPENDIDA; NO usar enlaces inventados |
| Vocabulario del oficio | gong · batido / strokes · armónicos · resonancia · afinación · aleación · flourish · silencio · presencia · instrumento sagrado · ceremonia · intención · vibración · viaje sonoro |
| Tono | Español natural (castellano de España). Doctrina firme, trato humilde. Cero precios, cero CTA comercial en registro doctrinal. |

## 3. Arquitectura técnica

- **Stack**: HTML semántico + CSS (custom properties, Grid, Flexbox) + JS vanilla.
  Sin frameworks, sin dependencias de build. Compatible con cualquier servidor
  estático y con Cloudflare Pages.
- **Capas**: índice + 6 secciones (hero, oferta, laboratorio virtual, enciclopedia,
  taller, contacto/avisos legales) + footer + nav fija.
- **Entregables**: índice completo, CSS de diseño (colores, tipografías,
  animaciones, responsive), JS de interacción ligera (menú móvil, scroll-reveal,
  toasts, navegación por teclado), sitemap.xml y datos estructurados (schema.org)
  para SEO, documentación de productividad (README con flujo de trabajo y
  mantener).

## 4. Diseño visual

- **Atmósfera**: mística, oriental, sonida, armónica — herencia/tibetana, papel
  y tinta, acentos dorados cálidos. Inspiración en el Tibetano y en la buena
  manera del oficio.
- **Paleta**: papel/ink con acentos dorados y cobre; fondo neutro `oak` sutil
  (no negro) en las secciones; alta diferenciación de marca.
- **Tipografía**: serif elegante (Cormorant Garamond + DM Serif Display para
  títulos; Source Serif 4 para cuerpo). Fallback a `Georgia, 'Times New Roman'`
  si no carga Google Fonts.
- **Animaciones**: entrada en seco (fade/slide), pulso sutil del símbolo del gong,
  degradado radial de brillo para el sonido; tudo sutil al pasar el cursor.
- **Responsive**: ancho de contenido máximo 1100px, nav colapsable en móvil,
  Grid adaptable (3→2→1 columnas), sin dependencia de JS para leer.

## 5. Componentes de la página

- **Nav**: logo "◯ Camino del Gong", enlaces, botón del menú móvil.
- **Hero**: título + subtítulo + byline + CTA a `#laboratorio`.
- **Sección de oferta (bienvenida)**: intro breve.
- **Laboratorio virtual (gong)**: tarjetas de los gongs (Sinfónico 80,
  Planetario 70, Luna Llena, Nepalí 7 metales) — sin precio, solo identidad y
  sonido. Botón "escuchar" (por ahora sin audio; se deja como enlace a acción
  documentada).
- **Enciclopedia**: artículos de acceso rápido.
- **Taller**: diario del luthier (3 publicaciones con fecha).
- **Contacto**: enlace únicamente a `mailto:elcaminodelgong@gmail.com`,
  atención a CI/CD y accesibilidad.
- **Footer**: marca, enlaces de redes, copyright.

## 6. Flujo de trabajo de desarrollo

1. Setup del entorno (herramientas: git, GitHub, Cloudflare Pages).
2. Rama de inicio: `feat/frontend-v1`.
3. Implementación por horizontes:
   - Frontend: HTML + CSS + JS (este repositorio)
   - Despliegue: Cloudflare Pages (ya configurado: CNAME, función de
     entender, dominio apuntando a `caminodelgong.pages.dev`)
4. Pruebas locales (HTML, CSS, JS) antes del commit.
5. Commit en `main` → despliegue Cloudflare Pages automático.
6. Surtido del sitio haciendo mirroring de la estructura en el repositorio
   para refactorización manual de los bloques de flujo y vida útil.

## 7. Mantenimiento

- Edición directa de `index.html` y `assets/css/main.css` (sin build).
- `sitemap.xml` actualizable manualmente.
- Registro de cambios (logs) en el README y en la bitácora del repositorio.
- Verificación de recursos externos (CDN, fuentes) antes de publicar.

## 8. Restricciones

- **Nunca publicar precios** ni importes.
- **No avanzar** sobre datos no verificados (archivo + nº de frase).
- **Una sola CTA** por sección.
- **Cero emojis** en el registro doctrinal; máximo 0–2 si aportan calidez.
- **Sin lenguaje comercial agresivo** («descubre», «no te lo pierdas»).
- **Navegación por teclado** y `aria` conforme a WCAG.
- El dominio `caminodelgong.com` ya apunta a Cloudflare; no se toca DNS.
- El repositorio base es el de Diego en GitHub (`diegolm2012-creator/caminodelgong-web`),
  con la rama `main` un tanto ligera; se debe agregar el frontend completo.
