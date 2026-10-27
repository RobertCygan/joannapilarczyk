import type { APIRoute } from 'astro';
import { SITE } from '../config';
import { LANGS, ROUTES, alternatesFor, type PageKey } from '../i18n';

const pages: PageKey[] = ['home', 'privacy'];

export const GET: APIRoute = () => {
  const abs = (path: string) => new URL(path, SITE.url).href;
  const urls = pages.flatMap((page) =>
    LANGS.map((lang) => {
      const links = alternatesFor(page)
        .map((a) => `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${abs(a.path)}"/>`)
        .join('\n');
      return `  <url>\n    <loc>${abs(ROUTES[page][lang])}</loc>\n${links}\n    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(ROUTES[page].pl)}"/>\n  </url>`;
    }),
  );
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
