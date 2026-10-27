/**
 * Generuje obrazy Open Graph (1200×630) dla każdej wersji językowej.
 * Wymaga Playwright z przeglądarką Chromium:
 *   NODE_PATH=$(npm root -g) node scripts/build_og.mjs
 */
import { createRequire } from 'node:module';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import sharp from 'sharp';

// Playwright nie jest zależnością projektu – używamy instalacji globalnej (NODE_PATH) lub lokalnej.
const { chromium } = await import('playwright').catch(() => createRequire(import.meta.url)('playwright'));

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const font = (p) => readFileSync(join(root, 'node_modules', p)).toString('base64');
const serif = font('@fontsource/cormorant-garamond/files/cormorant-garamond-latin-ext-500-normal.woff2');
const serifLatin = font('@fontsource/cormorant-garamond/files/cormorant-garamond-latin-500-normal.woff2');
const sans = font('@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2');
const sansExt = font('@fontsource-variable/manrope/files/manrope-latin-ext-wght-normal.woff2');

// Portret w formacie kwadratowym/pionowym do JSON-LD i OG.
const portraitPath = join(root, 'src/assets/joanna-portrait.jpg');
await sharp(portraitPath).resize(800, 1000, { fit: 'cover' }).jpeg({ quality: 82, mozjpeg: true }).toFile(join(root, 'public/og/portrait.jpg'));
const portrait = readFileSync(join(root, 'public/og/portrait.jpg')).toString('base64');

const copy = {
  pl: { eyebrow: 'Konsultacje i psychoterapia online', role: 'Psycholog specjalista<i></i>Psychoterapeuta systemowy', line: 'Po polsku i po angielsku · dla Polaków w Norwegii i nie tylko' },
  no: { eyebrow: 'Samtaler og psykoterapi på nett', role: 'Psykolog<i></i>Systemisk psykoterapeut', line: 'På polsk og engelsk · for polakker i Norge og andre' },
  en: { eyebrow: 'Online consultations and psychotherapy', role: 'Specialist psychologist<i></i>Systemic psychotherapist', line: 'In Polish and English · for Poles in Norway and beyond' },
};

const html = (c) => `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:S;src:url(data:font/woff2;base64,${serifLatin}) format('woff2');unicode-range:U+0000-00FF}
@font-face{font-family:S;src:url(data:font/woff2;base64,${serif}) format('woff2');unicode-range:U+0100-024F}
@font-face{font-family:M;font-weight:200 800;src:url(data:font/woff2;base64,${sans}) format('woff2');unicode-range:U+0000-00FF,U+2022,U+00B7}
@font-face{font-family:M;font-weight:200 800;src:url(data:font/woff2;base64,${sansExt}) format('woff2');unicode-range:U+0100-024F}
*{margin:0;box-sizing:border-box}
body{width:1200px;height:630px;background:#FAF9F6;font-family:M;color:#303B37;display:flex;overflow:hidden;position:relative}
.bg{position:absolute;inset:0;background:radial-gradient(60% 80% at 100% 40%,#DDEFE6 0%,transparent 70%)}
.text{position:relative;padding:72px 0 64px 80px;width:720px;display:flex;flex-direction:column}
.logo{display:flex;align-items:center;gap:14px}
.logo span{font:600 13px M;letter-spacing:.24em;color:#4F6F60;text-transform:uppercase}
.pill{margin-top:52px;align-self:flex-start;border:1px solid #A8D5C2;background:#F0F8F4;border-radius:999px;padding:10px 20px;font:600 21px M;color:#29483E}
h1{margin-top:26px;font:500 98px/0.95 S;color:#29483E;letter-spacing:-.01em}
.role{margin-top:22px;font:600 16px M;letter-spacing:.18em;text-transform:uppercase;color:#4F6F60}
.role i{display:inline-block;width:1px;height:14px;background:#789C8A;margin:0 14px;vertical-align:-1px}
.line{margin-top:auto;font:500 20px M;color:#5E6B66;border-top:1px solid #E3DED4;padding-top:22px}
.photo{position:absolute;right:64px;top:56px;width:400px;height:518px;border-radius:28px;background:url(data:image/jpeg;base64,${portrait}) center/cover;box-shadow:0 30px 60px -30px rgba(41,72,62,.35)}
.frame{position:absolute;right:48px;top:72px;width:400px;height:518px;border-radius:32px;border:1px solid rgba(120,156,138,.45)}
</style></head><body><div class="bg"></div>
<div class="text">
<div class="logo"><svg width="44" height="44" viewBox="0 0 48 48"><g fill="none" stroke-linecap="round" stroke-width="2.4"><path d="M26.485 15.515A12 12 0 1 1 21.106 12.409" stroke="#29483E"/><path d="M21.515 32.485A12 12 0 1 1 26.894 35.591" stroke="#789C8A"/></g></svg><span>joannapilarczyk.no</span></div>
<div class="pill">${c.eyebrow}</div>
<h1>Joanna<br>Pilarczyk</h1>
<div class="role">${c.role}</div>
<div class="line">${c.line}</div>
</div>
<div class="frame"></div><div class="photo"></div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
for (const [lang, c] of Object.entries(copy)) {
  await page.setContent(html(c), { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  const png = await page.screenshot({ type: 'png' });
  const out = join(root, `public/og/og-${lang}.jpg`);
  writeFileSync(out, await sharp(png).jpeg({ quality: 86, mozjpeg: true }).toBuffer());
  console.log('OG:', out);
}
await browser.close();
