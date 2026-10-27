export type Lang = 'pl' | 'no' | 'en';

export type IconName =
  | 'consult'
  | 'individual'
  | 'couple'
  | 'family'
  | 'crisis'
  | 'career'
  | 'group'
  | 'lecture'
  | 'online'
  | 'mail'
  | 'phone'
  | 'globe'
  | 'clock'
  | 'shield'
  | 'compass'
  | 'home'
  | 'link'
  | 'leaf';

export interface TimelineItem {
  period: string;
  title: string;
  detail?: string;
}

export interface Content {
  lang: Lang;
  /** Wartość atrybutu lang / hreflang (Bokmål = nb). */
  htmlLang: string;
  ogLocale: string;
  langName: string;
  /** Podpis pod nazwiskiem w logotypie. */
  brandTagline: string;

  meta: {
    title: string;
    description: string;
  };

  nav: {
    home: string;
    about: string;
    services: string;
    process: string;
    testimonials: string;
    faq: string;
    contact: string;
    cta: string;
    openMenu: string;
    closeMenu: string;
    skipToContent: string;
    languageLabel: string;
    mainNavLabel: string;
  };

  hero: {
    eyebrow: string;
    role: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    facts: string[];
    portraitAlt: string;
    badgeTitle: string;
    badgeText: string;
  };

  about: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    portraitAlt: string;
    signature: string;
  };

  qualifications: {
    eyebrow: string;
    heading: string;
    intro: string;
    educationTitle: string;
    education: TimelineItem[];
    experienceTitle: string;
    experience: TimelineItem[];
    registrationLabel: string;
    membershipsTitle: string;
    memberships: string[];
  };

  services: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: { icon: IconName; title: string; text: string; note?: string }[];
    areasHeading: string;
    areasIntro: string;
    areasToggle: string;
    areas: { title: string; items: string[] }[];
  };

  approach: {
    eyebrow: string;
    heading: string;
    lead: string;
    points: { title: string; text: string }[];
    principlesTitle: string;
    principles: string[];
    illustrationLabel: string;
  };

  emigration: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    listTitle: string;
    items: string[];
    note: string;
  };

  process: {
    eyebrow: string;
    heading: string;
    intro: string;
    steps: { title: string; text: string }[];
    practicalTitle: string;
    practical: { icon: IconName; label: string; value: string }[];
    requirements: string;
  };

  testimonials: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: { quote: string; author: string }[];
  };

  faq: {
    eyebrow: string;
    heading: string;
    items: { q: string; a: string }[];
  };

  contact: {
    eyebrow: string;
    heading: string;
    lead: string;
    emailLabel: string;
    phoneLabel: string;
    languagesLabel: string;
    languagesValue: string;
    formatLabel: string;
    formatValue: string;
    form: {
      name: string;
      email: string;
      phone: string;
      optional: string;
      topic: string;
      topicPlaceholder: string;
      topics: string[];
      language: string;
      languages: string[];
      message: string;
      messagePlaceholder: string;
      sensitiveNote: string;
      consentBefore: string;
      consentLink: string;
      consentAfter: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
      notConfigured: string;
      required: string;
      invalidEmail: string;
      tooShort: string;
      consentRequired: string;
      honeypotLabel: string;
    };
    crisis: {
      title: string;
      text: string;
      numbers: { label: string; number: string; tel: string }[];
      abroad: string;
    };
  };

  footer: {
    tagline: string;
    online: string;
    navTitle: string;
    contactTitle: string;
    privacy: string;
    cookies: string;
    rights: string;
    backToTop: string;
  };

  privacy: {
    title: string;
    description: string;
    heading: string;
    updated: string;
    draftNotice: string;
    sections: { title: string; paragraphs: string[] }[];
    back: string;
  };

  notFound: {
    title: string;
    text: string;
    back: string;
  };
}
