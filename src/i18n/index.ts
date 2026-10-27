import { en } from './en';
import { no } from './no';
import { pl } from './pl';
import type { Content, Lang } from './types';

export type { Content, Lang } from './types';

export const LANGS: Lang[] = ['pl', 'no', 'en'];
export const DEFAULT_LANG: Lang = 'pl';

export type PageKey = 'home' | 'privacy';

/** Ścieżki odpowiadających sobie stron w każdym języku (z końcowym ukośnikiem). */
export const ROUTES: Record<PageKey, Record<Lang, string>> = {
  home: { pl: '/', no: '/no/', en: '/en/' },
  privacy: { pl: '/polityka-prywatnosci/', no: '/no/personvern/', en: '/en/privacy/' },
};

/**
 * Polska typografia: jednoliterowe spójniki i przyimki nie powinny zostawać
 * na końcu wiersza, więc łączymy je z następnym słowem twardą spacją.
 */
function fixPolishOrphans(text: string): string {
  return text.replace(/(?<=^|[\s\u00A0(„])([aiouwz])\s+/gi, '$1\u00A0');
}

function mapStrings<T>(value: T, fn: (s: string) => string): T {
  if (typeof value === 'string') return fn(value) as T;
  if (Array.isArray(value)) return value.map((v) => mapStrings(v, fn)) as T;
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, mapStrings(v, fn)])) as T;
  }
  return value;
}

const CONTENT: Record<Lang, Content> = {
  pl: mapStrings(pl, fixPolishOrphans),
  no,
  en,
};

export function getContent(lang: Lang): Content {
  return CONTENT[lang];
}

export function alternatesFor(page: PageKey) {
  return LANGS.map((lang) => ({ lang, hreflang: CONTENT[lang].htmlLang, path: ROUTES[page][lang] }));
}
