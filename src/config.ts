/**
 * Dane praktyki i przełączniki treści.
 *
 * Pozycje oznaczone `verified: false` lub wyłączone w FEATURES pochodzą
 * ze starej strony i czekają na potwierdzenie (patrz DO-WERYFIKACJI.md).
 */

export const SITE = {
  url: 'https://joannapilarczyk.no',
  name: 'Joanna Pilarczyk',
  email: 'joanna.pilarczyk@gmail.com',
  /** Numer ze starej strony — pokaże się dopiero po ustawieniu verified: true. */
  phone: { display: '+47 968 55 283', href: '+4796855283', verified: false },
  /** Numer w norweskim rejestrze personelu medycznego (Helsepersonellregisteret). */
  hprNumber: '10063068',
  foundingYear: 2013,
} as const;

export const FEATURES = {
  /** Sekcja opinii — włączyć dopiero po uzyskaniu zgody autorów na publikację. */
  showTestimonials: false,
  /** Członkostwa w organizacjach zawodowych — włączyć po potwierdzeniu aktualności. */
  showMemberships: false,
  showPhone: SITE.phone.verified,
  /** Po weryfikacji prawnej polityki prywatności ustawić na true (znika baner „wersja robocza”). */
  privacyPolicyReviewed: false,
} as const;

/** Konfiguracja formularza — wartości z pliku .env (patrz .env.example). */
export const FORM = {
  endpoint: import.meta.env.PUBLIC_FORM_ENDPOINT ?? '',
  accessKey: import.meta.env.PUBLIC_FORM_ACCESS_KEY ?? '',
} as const;
