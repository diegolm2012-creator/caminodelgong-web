/* === Camino del Gong — Interactivity v1 === */
/* Voz pública v2: sobria, tibetana, humilde. Sin precios. */
(function () {
  'use strict';

  var navToggle = document.querySelector('.nav-toggle');
  if (navToggle) {
    navToggle.addEventListener('click', function () {
      var navLinks = document.querySelector('.nav-links');
      if (navLinks) {
        var isOpen = navLinks.classList.toggle('open');
        navToggle.textContent = isOpen ? '✕' : '☰';
        // Aria: actualizar estado del botón
        navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      }
    });
  }

  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  }

  var sections = document.querySelectorAll('main section[id]');
  var navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  if (navLinks.length && sections.length) {
    window.addEventListener('scroll', function () {
      var scrollY = window.pageYOffset || document.documentElement.scrollTop;
      var current = null;
      sections.forEach(function (sec) {
        var top = sec.getBoundingClientRect().top + scrollY;
        if (top <= scrollY + 120) {
          current = sec.id;
        }
      });
      navLinks.forEach(function (link) {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
      });
    });
  }

  // Suave scroll interno + accesibilidad (Enter / Space en enlaces #)
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var href = a.getAttribute('href');
      if (href === '#' || href.length < 2) return;
      var target = document.getElementById(href.slice(1));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Foco en el elemento al que se va
        setTimeout(function () {
          try { target.focus({ preventScroll: true }); } catch (err) {}
        }, 120);
      }
    });
  });

  // Skip link: pulsación de Tab el primer focus
  document.addEventListener('DOMContentLoaded', function () {
    var skipLink = document.querySelector('.skip-link');
    if (skipLink) {
      skipLink.addEventListener('click', function (e) {
        e.preventDefault();
        var target = document.getElementById('inicio');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          target.focus({ preventScroll: true });
        }
      });
    }
  });

  // Toast de confirmación para los botones de sample (sin audio aún)
  var sampleBtns = document.querySelectorAll('.sample-btn');
  sampleBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var txt = btn.textContent || btn.innerText;
      if (window.__gongToast) {
        window.__gongToast.txt = '▶ ' + txt + ' · sin audio (próximamente)';
        window.__gongToast.show();
      } else {
        var existing = document.querySelector('.gong-toast');
        if (!existing) {
          var el = document.createElement('div');
          el.className = 'gong-toast';
          el.setAttribute('role', 'status');
          el.setAttribute('aria-live', 'polite');
          document.body.appendChild(el);
          window.__gongToast = el;
        }
        window.__gongToast.textContent = '▶ ' + txt + ' · sin audio (próximamente)';
      }
    });
  });
})();

/* === Modal del vídeo TantraGong (pantalla de creación) === */
(function () {
  'use strict';
  var modal = document.getElementById('video-modal');
  var playBtn = document.getElementById('play-tantra');
  var video = document.getElementById('tantra-video');
  if (!modal || !playBtn) return;

  function open() {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    if (video) { try { video.play(); } catch (e) {} }
  }
  function close() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    if (video) { try { video.pause(); } catch (e) {} }
  }

  playBtn.addEventListener('click', open);
  modal.querySelectorAll('[data-close]').forEach(function (el) {
    el.addEventListener('click', close);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
})();
