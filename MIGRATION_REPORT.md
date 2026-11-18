# WEB — Migrar caminodelgong.com de GitHub Pages a Cloudflare Pages

## Estado final (2026-11-03, ID t_fac7cc29)

### 1. Proyecto Pages conectado al repo GitHub
- Proyecto: `caminodelgong-web` (id `2d54f513-7bf7-4e8d-88d1-6e9a31e75fa3`)
- Fuente: `github` — owner `diegolm2012-creator`, repo `caminodelgong-web` (id `1398039715`), rama `main`, `deployments_enabled: true`
- Última implementación: commit `b9f9bb31e6a0c0aab76b37a2b9c2d110abfae2a5` (hijo `@web` t_f498c42e)

### 2. Registros DNS (antes / después)
Zona `caminodelgong.com` (id `a7b953672dc5eb999fdd4dd04a6622d1`)

**ANTES (GitHub Pages):**
| # | Tipo | Nombre | Contenido | Proxied |
|---|------|--------|-----------|---------|
| 1-4 | A | caminodelgong.com | 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153 | sí |
| 5 | CNAME | www.caminodelgong.com | diegolm2012-creator.github.io | sí |

**DESPUÉS (Cloudflare Pages):**
| # | Tipo | Nombre | Contenido | Proxied |
|---|------|--------|-----------|---------|
| 1 | CNAME | caminodelgong.com | caminodelgong-web.pages.dev | sí |
| 5 | CNAME | www.caminodelgong.com | caminodelgong-web.pages.dev | sí |

(Nota: los 4 A de GitHub se eliminaron; Cloudflare aplana la CNAME al apice. Los registros MX/SPF/DKIM de correo no se tocaron.)

### 3. Comandos de verificación (salida real)
```bash
$ curl -sI https://caminodelgong.com | head -3
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Server: cloudflare

$ curl -s https://caminodelgong.com | grep -oE '<title>[^<]*</title>'
<title>El Templo del Gong — El gong no se vende, se comprende</title>

$ curl -sI https://www.caminodelgong.com | head -3
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Server: cloudflare

$ curl -s https://www.caminodelgong.com | grep -oE '<title>[^<]*</title>'
<title>El Templo del Gong — El gong no se vende, se comprende</title>
```

### 4. Estado de los dominios en Cloudflare Pages
```
$ cf pages projects domains list --project-name caminodelgong-web
caminodelgong.com  -> status: active
www.caminodelgong.com  -> status: active
```

### 5. Certificados TLS (emitidos tras el cambio)
```bash
$ openssl s_client -connect caminodelgong.com:443 -servername caminodelgong.com 2>/dev/null | openssl x509 -noout -subject -issuer -dates
subject=CN=caminodelgong.com
issuer=C=US, O=Google Trust Services, CN=WE1
notBefore=Sep 30 13:09:36 2026 GMT
notAfter=Dec 29 14:09:33 2026 GMT

$ openssl s_client -connect www.caminodelgong.com:443 -servername www.caminodelgong.com 2>/dev/null | openssl x509 -noout -subject -issuer -dates
subject=CN=www.caminodelgong.com
issuer=C=US, O=Google Trust Services, CN=WE1
notBefore=Sep 30 13:10:27 2026 GMT
notAfter=Dec 29 14:10:23 2026 GMT
```
- SANs: caminodelgong.com → `DNS:caminodelgong.com` / www → `DNS:www.caminodelgong.com`

### 6. Implementación (despliegue) en Cloudflare Pages
- Despliegue reciente: `89538017-2aae-48d6-8598-3ecb01e7f3b1` (status `success`), desplegado desde GitHub `main` (commit `b9f9bb3...`).
- Dominio temporal `caminodelgong-web.pages.dev` sigue sirviendo el contenido (ejecución de la migración; sin cambios). Luego del build, `/`, `www` y la temporal muestran HTTP 200 con el mismo contenido (1204 bytes).

## Derivados / pendientes
- El rediseño de la web (marcas, subcarpetas) se aborda en la tarea `t_f498c42e`; la migración de hosting queda cerrada.
- No se hicieron commits ni pushes a GitHub fora de confirmación del cambios de hosting.
