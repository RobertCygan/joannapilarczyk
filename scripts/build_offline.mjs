/**
 * Tworzy wersję podglądową strony do otwarcia na komputerze bez serwera
 * (dwuklik w index.html). Kopiuje dist/ do podglad/ i zamienia ścieżki
 * bezwzględne na względne. Do publikacji w internecie używaj dist/, nie podglad/.
 *
 * Uruchomienie: npm run build:offline
 */
import { cpSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = join(root, 'dist');
const out = join(root, 'podglad');

rmSync(out, { recursive: true, force: true });
cpSync(src, out, { recursive: true });

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

/** "/no/#faq" widziane z pliku na głębokości `depth` → "../no/index.html#faq". */
function toRelative(url, depth) {
  if (!url.startsWith('/') || url.startsWith('//')) return url;
  const [pathPart, hash = ''] = url.split('#');
  let path = pathPart.slice(1);
  if (path === '' || path.endsWith('/')) path += 'index.html';
  else if (!path.includes('.')) path += '/index.html';
  return '../'.repeat(depth) + path + (hash ? `#${hash}` : '');
}

for (const file of walk(out)) {
  if (file.endsWith('.html')) {
    const depth = relative(out, file).split(sep).length - 1;
    let html = readFileSync(file, 'utf8');
    html = html.replace(/\b(href|src)="([^"]*)"/g, (_, attr, url) => `${attr}="${toRelative(url, depth)}"`);
    html = html.replace(/\bsrcset="([^"]*)"/g, (_, set) =>
      `srcset="${set
        .split(',')
        .map((entry) => {
          const [url, ...rest] = entry.trim().split(/\s+/);
          return [toRelative(url, depth), ...rest].join(' ');
        })
        .join(', ')}"`,
    );
    // Skrypty modułowe są blokowane przy otwieraniu z dysku; nasz skrypt nie ma importów.
    html = html.replace(/<script type="module" src=/g, '<script defer src=');
    writeFileSync(file, html);
  } else if (file.endsWith('.css')) {
    // Pliki CSS leżą w /_astro/ razem z fontami.
    const css = readFileSync(file, 'utf8').replace(/url\(\/_astro\//g, 'url(./');
    writeFileSync(file, css);
  }
}

console.log(`Podgląd offline gotowy: ${relative(root, out)}/index.html`);
