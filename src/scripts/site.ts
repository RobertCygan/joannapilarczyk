/* Drobna interaktywność strony: nagłówek, menu mobilne, animacje, języki, formularz. */

const header = document.querySelector<HTMLElement>('[data-header]');

// --- Nagłówek: tło po przewinięciu -------------------------------------------
function onScroll() {
  header?.classList.toggle('is-scrolled', window.scrollY > 12);
}
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// --- Menu mobilne ------------------------------------------------------------
const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const menu = document.querySelector<HTMLElement>('[data-mobile-menu]');
const toggleLabel = document.querySelector<HTMLElement>('[data-menu-label]');

function setMenu(open: boolean) {
  if (!toggle || !menu || !header) return;
  menu.hidden = !open;
  header.classList.toggle('is-open', open);
  toggle.setAttribute('aria-expanded', String(open));
  if (toggleLabel) toggleLabel.textContent = (open ? toggle.dataset.labelClose : toggle.dataset.labelOpen) ?? '';
  document.documentElement.style.overflow = open ? 'hidden' : '';
}

toggle?.addEventListener('click', () => setMenu(menu?.hidden ?? true));
menu?.querySelectorAll('[data-menu-link]').forEach((link) => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menu && !menu.hidden) {
    setMenu(false);
    toggle?.focus();
  }
});
window.matchMedia('(min-width: 1280px)').addEventListener('change', (e) => e.matches && setMenu(false));

// --- Pojawianie się sekcji przy przewijaniu -----------------------------------
const revealEls = document.querySelectorAll<HTMLElement>('[data-reveal]');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

// --- Aktywna sekcja w nawigacji + zachowanie sekcji przy zmianie języka --------
const sectionIds = ['about', 'services', 'approach', 'abroad', 'process', 'testimonials', 'faq', 'contact'];
const sections = sectionIds
  .map((id) => document.getElementById(id))
  .filter((el): el is HTMLElement => el !== null);
const navLinks = document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]');
let currentSection = '';

if (sections.length && 'IntersectionObserver' in window) {
  const spy = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) currentSection = entry.target.id;
      }
      if (window.scrollY < 200) currentSection = '';
      navLinks.forEach((link) => {
        const active = link.dataset.navLink === currentSection;
        if (active) link.setAttribute('aria-current', 'true');
        else link.removeAttribute('aria-current');
      });
    },
    { rootMargin: '-45% 0px -50% 0px' },
  );
  sections.forEach((s) => spy.observe(s));
}

/** Sekcja, która w tej chwili zajmuje środek ekranu. */
function sectionInView(): string {
  const line = window.innerHeight * 0.4;
  const hit = sections.find((s) => {
    const r = s.getBoundingClientRect();
    return r.top <= line && r.bottom > line;
  });
  return hit?.id ?? '';
}

document.querySelectorAll<HTMLAnchorElement>('[data-lang-link]').forEach((link) => {
  link.addEventListener('click', () => {
    // Na stronie głównej przenosimy użytkownika do tej samej sekcji w innym języku.
    if (!sections.length) return;
    const id = sectionInView();
    link.href = link.href.split('#')[0] + (id ? `#${id}` : '');
  });
});

// --- Formularz kontaktowy ------------------------------------------------------
const form = document.querySelector<HTMLFormElement>('[data-contact-form]');
if (form) initForm(form);

function initForm(form: HTMLFormElement) {
  const msg = form.dataset;
  const status = form.querySelector<HTMLElement>('[data-form-status]')!;
  const submit = form.querySelector<HTMLButtonElement>('[data-submit]')!;
  const submitLabel = form.querySelector<HTMLElement>('[data-submit-label]')!;
  const idleLabel = submitLabel.textContent ?? '';
  const startedAt = Date.now();

  const showStatus = (text: string, kind: 'ok' | 'error' | 'info') => {
    status.textContent = text;
    status.className =
      'mt-6 rounded-xl px-5 py-4 text-[0.95rem] ' +
      (kind === 'ok'
        ? 'bg-mint-50 text-forest border border-mint'
        : kind === 'error'
          ? 'bg-[#fbeeec] text-[#7d2f26] border border-[#efcfca]'
          : 'bg-sand/60 text-graphite border border-line');
  };

  const setError = (field: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement, text: string) => {
    const el = form.querySelector<HTMLElement>(`#${field.id}-error`);
    field.setAttribute('aria-invalid', text ? 'true' : 'false');
    if (el) {
      el.textContent = text;
      el.classList.toggle('hidden', !text);
    }
  };

  const validateField = (field: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement): string => {
    const value = field.value.trim();
    if (field instanceof HTMLInputElement && field.type === 'checkbox') {
      return field.required && !field.checked ? (msg.msgConsent ?? '') : '';
    }
    if (field.required && !value) return msg.msgRequired ?? '';
    if (field.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) return msg.msgEmail ?? '';
    if (field instanceof HTMLTextAreaElement && field.minLength > 0 && value.length < field.minLength) {
      return msg.msgShort ?? '';
    }
    return '';
  };

  const fields = Array.from(
    form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>('[required]'),
  );

  fields.forEach((field) => {
    const evt = field instanceof HTMLInputElement && field.type === 'checkbox' ? 'change' : 'blur';
    field.addEventListener(evt, () => setError(field, validateField(field)));
    field.addEventListener('input', () => {
      if (field.getAttribute('aria-invalid') === 'true') setError(field, validateField(field));
    });
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    let firstInvalid: HTMLElement | null = null;
    for (const field of fields) {
      const error = validateField(field);
      setError(field, error);
      if (error && !firstInvalid) firstInvalid = field;
    }
    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }

    if (msg.configured !== 'true') {
      showStatus(msg.msgNotConfigured ?? '', 'info');
      return;
    }

    const data = new FormData(form);
    // Pułapka na boty: wypełnione ukryte pole albo wysyłka szybsza niż człowiek.
    const isBot = Boolean(data.get('_gotcha')) || data.get('botcheck') !== null || Date.now() - startedAt < 2500;
    if (isBot) {
      showStatus(msg.msgError ?? '', 'error');
      return;
    }
    data.delete('_gotcha');
    data.delete('botcheck');

    const subject = `${msg.subjectPrefix} – ${data.get('topic')}`;
    data.set('_subject', subject);
    data.set('subject', subject);
    data.set('_replyto', String(data.get('email') ?? ''));
    data.set('from_name', String(data.get('name') ?? ''));

    submit.disabled = true;
    submitLabel.textContent = msg.msgSending ?? '';
    status.className = 'hidden';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      const body = await response.json().catch(() => ({}) as Record<string, unknown>);
      // Web3Forms zwraca { success: false } przy błędzie, Formspree – status HTTP.
      if (!response.ok || (body as { success?: boolean }).success === false) throw new Error('send-failed');

      form.reset();
      fields.forEach((field) => field.removeAttribute('aria-invalid'));
      showStatus(msg.msgSuccess ?? '', 'ok');
    } catch {
      showStatus(msg.msgError ?? '', 'error');
    } finally {
      submit.disabled = false;
      submitLabel.textContent = idleLabel;
    }
  });
}
