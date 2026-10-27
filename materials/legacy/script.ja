/* ================================================================
   Joanna Pilarczyk – Psycholog Specjalista | script.js
   ================================================================ */

'use strict';

/* ── Preloader ─────────────────────────────────────────────────── */
(function initPreloader() {
  const pre = document.getElementById('preloader');
  if (!pre) return;
  window.addEventListener('load', () => {
    setTimeout(() => pre.classList.add('hidden'), 600);
  });
  setTimeout(() => pre.classList.add('hidden'), 2200);
})();

/* ── Language Toggle ────────────────────────────────────────────── */
(function initLang() {
  const html      = document.documentElement;
  const btns      = document.querySelectorAll('.lang-btn');
  let   currentLang = html.getAttribute('data-lang') || 'pl';

  function applyTranslations(lang) {
    html.setAttribute('data-lang', lang);
    html.lang = lang === 'no' ? 'no' : 'pl';

    /* Text / innerHTML nodes */
    document.querySelectorAll('[data-pl]').forEach(el => {
      const val = el.getAttribute(`data-${lang}`);
      if (!val) return;
      if (el.hasAttribute('data-html')) {
        el.innerHTML = val;
      } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        /* handled below */
      } else if (el.tagName === 'OPTION') {
        el.textContent = val;
      } else {
        el.textContent = val;
      }
    });

    /* Placeholders */
    document.querySelectorAll(`[data-${lang}-ph]`).forEach(el => {
      el.placeholder = el.getAttribute(`data-${lang}-ph`) || '';
    });

    /* Buttons: lang-btn active state */
    btns.forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-lang') === lang);
    });
  }

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang === currentLang) return;
      currentLang = lang;
      applyTranslations(lang);
    });
  });

  /* Initial pass (sets placeholders on load) */
  applyTranslations(currentLang);
})();

/* ── Navbar ─────────────────────────────────────────────────────── */
(function initNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;

  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Active link on scroll */
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      links.forEach(l => {
        l.classList.toggle('active', l.getAttribute('href') === `#${id}`);
      });
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

  sections.forEach(s => observer.observe(s));
})();

/* ── Mobile Menu ────────────────────────────────────────────────── */
(function initMobileMenu() {
  const toggle = document.getElementById('mobileToggle');
  const menu   = document.getElementById('mobileMenu');
  if (!toggle || !menu) return;

  let open = false;

  function setOpen(val) {
    open = val;
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
    menu.classList.toggle('open', open);
    menu.setAttribute('aria-hidden', !open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  toggle.addEventListener('click', () => setOpen(!open));

  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => setOpen(false));
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && open) setOpen(false);
  });
})();

/* ── Hex Network Canvas ─────────────────────────────────────────── */
(function initHexCanvas() {
  const canvas = document.getElementById('hexCanvas');
  if (!canvas) return;

  const ctx  = canvas.getContext('2d');
  let W, H, nodes = [], edges = [], raf;

  const NODE_COLOR = 'rgba(122,173,168,';
  const EDGE_COLOR = 'rgba(122,173,168,';
  const NODE_COLOR_ALT = 'rgba(181,112,91,';
  const HEX_SIZE = 88;

  function buildGrid() {
    nodes = [];
    edges = [];

    const cols = Math.ceil(W / (HEX_SIZE * 1.5)) + 3;
    const rows = Math.ceil(H / (HEX_SIZE * 0.866 * 2)) + 3;

    for (let c = -1; c < cols; c++) {
      for (let r = -1; r < rows; r++) {
        const x = c * HEX_SIZE * 1.5;
        const y = r * HEX_SIZE * 1.732 + (c % 2 ? HEX_SIZE * 0.866 : 0);
        const isAccent = Math.random() < 0.12;
        nodes.push({
          x, y,
          r: Math.random() * 2.2 + 1.4,
          op: Math.random() * 0.35 + 0.12,
          phase: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.008 + 0.004,
          accent: isAccent
        });
      }
    }

    const dist = HEX_SIZE * 1.82;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        if (dx * dx + dy * dy < dist * dist) {
          edges.push([i, j]);
        }
      }
    }
  }

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    buildGrid();
  }

  let t = 0;

  function draw() {
    ctx.clearRect(0, 0, W, H);
    t += 0.012;

    /* Edges */
    edges.forEach(([i, j]) => {
      const n1 = nodes[i], n2 = nodes[j];
      const edgeOp = (n1.op + n2.op) * 0.38;
      const color = (n1.accent || n2.accent) ? NODE_COLOR_ALT : EDGE_COLOR;
      ctx.beginPath();
      ctx.moveTo(n1.x, n1.y);
      ctx.lineTo(n2.x, n2.y);
      ctx.strokeStyle = color + edgeOp + ')';
      ctx.lineWidth = 0.75;
      ctx.stroke();
    });

    /* Nodes */
    nodes.forEach(n => {
      const pulse  = (Math.sin(t + n.phase) * 0.35 + 0.65);
      const radius = n.r * pulse;
      const alpha  = n.op * pulse;
      const color  = n.accent ? NODE_COLOR_ALT : NODE_COLOR;
      ctx.beginPath();
      ctx.arc(n.x, n.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = color + alpha + ')';
      ctx.fill();
    });

    raf = requestAnimationFrame(draw);
  }

  resize();

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 200);
  });

  /* Pause when tab hidden */
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(raf);
    } else {
      raf = requestAnimationFrame(draw);
    }
  });

  draw();
})();

/* ── Scroll Animations (IntersectionObserver) ───────────────────── */
(function initScrollAnims() {
  const elements = document.querySelectorAll('[data-anim]');
  if (!elements.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el    = entry.target;
      const delay = parseInt(el.getAttribute('data-delay') || '0', 10);
      setTimeout(() => el.classList.add('visible'), delay);
      observer.unobserve(el);
    });
  }, { threshold: 0.12 });

  elements.forEach(el => observer.observe(el));
})();

/* ── Counter Animation ──────────────────────────────────────────── */
(function initCounters() {
  const counters = document.querySelectorAll('.counter');
  if (!counters.length) return;

  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

  function animateCounter(el) {
    const target   = parseInt(el.getAttribute('data-target') || '0', 10);
    const duration = 1800;
    const start    = performance.now();

    function step(now) {
      const elapsed  = Math.min(now - start, duration);
      const progress = easeOut(elapsed / duration);
      el.textContent = Math.floor(progress * target);
      if (elapsed < duration) requestAnimationFrame(step);
      else el.textContent = target;
    }

    requestAnimationFrame(step);
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
})();

/* ── Testimonials Carousel ──────────────────────────────────────── */
(function initTestimonials() {
  const track  = document.getElementById('testiTrack');
  const dotsEl = document.getElementById('testiDots');
  const prev   = document.getElementById('testiPrev');
  const next   = document.getElementById('testiNext');
  if (!track) return;

  const slides = track.querySelectorAll('.testi-slide');
  let   current = 0;
  let   autoId;

  /* Build dots */
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className  = 'testi-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', `Opinia ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsEl.appendChild(dot);
  });

  function goTo(index) {
    current = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dotsEl.querySelectorAll('.testi-dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
    resetAuto();
  }

  function resetAuto() {
    clearInterval(autoId);
    autoId = setInterval(() => goTo(current + 1), 6000);
  }

  prev.addEventListener('click', () => goTo(current - 1));
  next.addEventListener('click', () => goTo(current + 1));

  /* Touch / swipe */
  let startX = 0;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend',   e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) goTo(current + (dx < 0 ? 1 : -1));
  });

  resetAuto();

  /* Pause on hover */
  track.closest('.testi-slider').addEventListener('mouseenter', () => clearInterval(autoId));
  track.closest('.testi-slider').addEventListener('mouseleave', resetAuto);
})();

/* ── Spec Tags – staggered reveal ───────────────────────────────── */
(function initSpecTags() {
  const grid = document.querySelector('.specs-grid');
  if (!grid) return;

  const tags = grid.querySelectorAll('.spec-tag');
  tags.forEach((tag, i) => {
    tag.style.opacity   = '0';
    tag.style.transform = 'translateY(14px)';
    tag.style.transition= `opacity .5s ease ${i * 55}ms, transform .5s ease ${i * 55}ms`;
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      tags.forEach(tag => {
        tag.style.opacity   = '1';
        tag.style.transform = 'translateY(0)';
      });
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  observer.observe(grid);
})();

/* ── Contact Form Validation ────────────────────────────────────── */
(function initForm() {
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (!form) return;

  function validate(input) {
    const group = input.closest('.form-group');
    if (!group) return true;
    const valid = input.checkValidity();
    group.classList.toggle('has-error', !valid);
    return valid;
  }

  /* Live validation after first blur */
  form.querySelectorAll('.form-input').forEach(input => {
    input.addEventListener('blur', () => validate(input), { once: false });
    input.addEventListener('input', () => {
      if (input.closest('.form-group')?.classList.contains('has-error')) validate(input);
    });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    let allValid = true;
    form.querySelectorAll('.form-input').forEach(input => {
      if (!validate(input)) allValid = false;
    });
    if (!allValid) return;

    const btn  = form.querySelector('[type="submit"]');
    const span = btn.querySelector('span');

    /* Simulate sending */
    btn.disabled = true;
    const lang   = document.documentElement.getAttribute('data-lang') || 'pl';
    const origText = span.textContent;
    span.textContent = lang === 'no' ? 'Sender…' : 'Wysyłam…';
    btn.style.opacity = '.7';

    setTimeout(() => {
      btn.disabled = false;
      btn.style.opacity = '';
      span.textContent  = origText;
      form.reset();
      form.querySelectorAll('.form-group').forEach(g => g.classList.remove('has-error'));
      success.removeAttribute('hidden');
      success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

      setTimeout(() => success.setAttribute('hidden', ''), 6000);
    }, 1400);
  });
})();

/* ── Smooth scrolling with nav offset ──────────────────────────── */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 80;
      const y    = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });
})();

/* ── Service cards – subtle parallax on mouse ───────────────────── */
(function initCardTilt() {
  if (window.matchMedia('(hover: none)').matches) return;

  document.querySelectorAll('.srv-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const cx   = rect.left + rect.width  / 2;
      const cy   = rect.top  + rect.height / 2;
      const rx   = ((e.clientY - cy) / (rect.height / 2)) * 4;
      const ry   = ((e.clientX - cx) / (rect.width  / 2)) * -4;
      card.style.transform = `translateY(-6px) perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
})();

/* ── Spec tag hover ripple ──────────────────────────────────────── */
(function initSpecRipple() {
  document.querySelectorAll('.spec-tag').forEach(tag => {
    tag.style.position = 'relative';
    tag.style.overflow = 'hidden';

    tag.addEventListener('click', e => {
      const r     = document.createElement('span');
      const rect  = tag.getBoundingClientRect();
      const size  = Math.max(rect.width, rect.height) * 2;
      r.style.cssText = `
        position:absolute;width:${size}px;height:${size}px;
        left:${e.clientX - rect.left - size/2}px;
        top:${e.clientY - rect.top  - size/2}px;
        background:rgba(181,112,91,.18);
        border-radius:50%;
        transform:scale(0);
        animation:ripple .55s ease-out forwards;
        pointer-events:none;
      `;
      tag.appendChild(r);
      r.addEventListener('animationend', () => r.remove());
    });
  });

  if (!document.querySelector('#rippleStyle')) {
    const s = document.createElement('style');
    s.id = 'rippleStyle';
    s.textContent = '@keyframes ripple{to{transform:scale(1);opacity:0}}';
    document.head.appendChild(s);
  }
})();
