/**
 * El Templo del Gong — Worker estático v3
 * Incluye accesos a caminodelgong.com
 */

const ASSETS = 'https://caminodelgong.com/eltemplo_web/assets';
const CAMINO = 'https://caminodelgong.com';

const HTML = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Tienda de Gongs y Cuencos Tibetanos | El Templo del Gong</title>
<meta name="description" content="Tienda de Gong, Conciertos, Talleres, Formación por España. Venta Internacional de Instrumentos: Cuencos Tibetanos, Campanas, Gongs, mazas...">
<link rel="canonical" href="https://www.eltemplodelgong.com/">
<link rel="icon" href="${ASSETS}/logo.png">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Open Sans',Arial,Helvetica,sans-serif;background:#fff;color:#333;line-height:1.7}
a{text-decoration:none;color:inherit}
.wrap{max-width:1200px;margin:0 auto;padding:0 20px}
.topbar{background:#141422;font-size:13px;color:#cfc9c0}
.topbar .wrap{display:flex;justify-content:space-between;align-items:center;padding:9px 20px;gap:16px}
.topbar a{color:#cfc9c0;margin-left:14px}
.topbar a:hover{color:#fff}
.topbar .camino{color:#e8a874;font-weight:600}
.topbar .camino:hover{color:#fff}
header{background:#fff;border-bottom:1px solid #f0f0f0}
header .wrap{display:flex;justify-content:space-between;align-items:center;padding:20px;gap:24px}
.logo img{height:74px;width:auto;display:block}
nav ul{list-style:none;display:flex;gap:26px;align-items:center}
nav a{color:#1a1a2e;font-weight:600;font-size:15px}
nav a:hover{color:#c0632a}
.hero{position:relative;color:#fff;text-align:center;padding:120px 20px;background:#141422;overflow:hidden}
.hero .bg{position:absolute;inset:0;background-image:url('${ASSETS}/hero.jpg');background-size:cover;background-position:center;opacity:.4}
.hero .inner{position:relative;max-width:840px;margin:0 auto}
.hero h1{font-size:2.6rem;letter-spacing:.05em;margin-bottom:20px;font-weight:600}
.hero p{font-size:1.1rem;opacity:.94;margin-bottom:30px}
.actions{display:flex;gap:14px;justify-content:center;flex-wrap:wrap}
.btn{display:inline-block;background:#c0632a;color:#fff;padding:14px 34px;border-radius:3px;font-weight:600;letter-spacing:.03em}
.btn:hover{background:#a5521f}
.btn-alt{display:inline-block;background:transparent;color:#fff;padding:14px 34px;border:2px solid rgba(255,255,255,.85);border-radius:3px;font-weight:600;letter-spacing:.03em}
.btn-alt:hover{background:#fff;color:#141422}
.section{padding:68px 0}
.section h2{text-align:center;font-size:1.9rem;color:#1a1a2e;margin-bottom:42px;font-weight:600}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px}
.card{background:#fff;border:1px solid #eee;border-radius:6px;padding:30px;transition:.2s}
.card:hover{box-shadow:0 8px 24px rgba(0,0,0,.08);transform:translateY(-2px)}
.card h3{color:#c0632a;font-size:1.2rem;margin-bottom:12px;font-weight:600}
.card p{color:#555}
.cta{background:#faf7f4;text-align:center;padding:68px 20px}
.cta h2{font-size:1.8rem;color:#1a1a2e;margin-bottom:14px}
.cta p{color:#666;margin-bottom:28px}
.instr{display:grid;grid-template-columns:1fr 1fr;gap:30px}
.instr img{width:100%;height:300px;object-fit:cover;border-radius:6px;display:block;background:#eee}
.instr h3{color:#c0632a;margin:16px 0 8px}
footer{background:#141422;color:#cfc9c0;padding:42px 0 28px;text-align:center;font-size:14px}
footer a{color:#e0d8cc;margin:0 10px}
footer a:hover{color:#fff}
footer .copy{margin-top:18px;opacity:.6;font-size:13px}
@media(max-width:900px){
 .grid,.instr{grid-template-columns:1fr}
 nav ul{gap:14px;flex-wrap:wrap;justify-content:center}
 header .wrap{flex-direction:column}
 .hero h1{font-size:2rem}
 .topbar .wrap{flex-direction:column;gap:6px;text-align:center}
}
</style>
</head>
<body>

<div class="topbar"><div class="wrap">
  <span>+34 674 35 11 49</span>
  <span>
    <a href="https://www.facebook.com/vikingong/" target="_blank" rel="noopener">Facebook</a>
    <a href="https://www.instagram.com/vikingong/" target="_blank" rel="noopener">Instagram</a>
    <a href="https://www.youtube.com/channel/UCFiFXh0oC-OrhPxaBtjdj2A" target="_blank" rel="noopener">YouTube</a>
    <a class="camino" href="${CAMINO}">Ir a Camino del Gong &rarr;</a>
  </span>
</div></div>

<header><div class="wrap">
  <a class="logo" href="/"><img src="${ASSETS}/logo.png" alt="El Templo del Gong"></a>
  <nav><ul>
    <li><a href="/">Inicio</a></li>
    <li><a href="/tienda">Tienda</a></li>
    <li><a href="/artesania-gong">Crea tu Gong</a></li>
    <li><a href="/escuela-don-conreaux">Escuela</a></li>
    <li><a href="/calendario">Actividades</a></li>
    <li><a href="/contacto">Contacto</a></li>
    <li><a href="${CAMINO}" style="color:#c0632a">Camino del Gong</a></li>
  </ul></nav>
</div></header>

<section class="hero">
  <div class="bg"></div>
  <div class="inner">
    <h1>INTERSOL &mdash; EL CAMINO DEL GONG</h1>
    <p>Tienda online y taller de artesanía vinculados al Camino del Gong, enseñanza de Don Conreaux.<br>Maestro Diego Montenegro.</p>
    <div class="actions">
      <a class="btn" href="/tienda">VER TIENDA</a>
      <a class="btn-alt" href="${CAMINO}">IR A CAMINODELGONG.COM &rarr;</a>
    </div>
  </div>
</section>

<section class="section"><div class="wrap">
  <h2>Qué encontrarás</h2>
  <div class="grid">
    <div class="card"><h3>Tienda online</h3><p>Gongs planetarios, Tam Tam, cuencos tibetanos, campanas, mazas y accesorios.</p></div>
    <div class="card"><h3>Escuela</h3><p>Cursos, talleres y formaciones por toda España, con el linaje de Don Conreaux.</p></div>
    <div class="card"><h3>Actividades</h3><p>Conciertos meditativos, baños de sonido, pujas circulares y ceremonias.</p></div>
  </div>
</div></section>

<section class="cta">
  <h2>¿Quieres fabricar tu propio Gong?</h2>
  <p>Taller práctico: aprende a crear tu Gong paso a paso en nuestro obrador.</p>
  <div class="actions">
    <a class="btn" href="/artesania-gong">SABER MÁS</a>
    <a class="btn" href="${CAMINO}" style="background:#1a1a2e">VER CAMINODELGONG.COM</a>
  </div>
</section>

<section class="section"><div class="wrap">
  <h2>Los instrumentos</h2>
  <div class="instr">
    <div><img src="${ASSETS}/caracola.jpg" alt="Caracola"><h3>Caracola</h3><p>Representa el instrumento chamánico de Latino América.</p></div>
    <div><img src="${ASSETS}/gong.jpg" alt="Gong"><h3>Gong</h3><p>Representa el instrumento chamánico de Oriente.</p></div>
  </div>
</div></section>

<footer><div class="wrap">
  <div><a href="/aviso-legal">Aviso legal</a><a href="/condiciones-uso">Términos y condiciones</a><a href="/contacto">Contacto</a><a href="${CAMINO}">Camino del Gong</a></div>
  <div class="copy">www.eltemplodelgong.com &copy; El Templo del Gong</div>
</div></footer>

</body>
</html>`;

export default {
  async fetch(request) {
    return new Response(HTML, {
      headers: {
        'Content-Type': 'text/html; charset=UTF-8',
        'Cache-Control': 'public, max-age=1800',
        'X-Frame-Options': 'SAMEORIGIN'
      }
    });
  }
};
