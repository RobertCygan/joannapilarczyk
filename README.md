# Joanna Pilarczyk — strona praktyki psychologicznej

Statyczna strona prywatnej praktyki psychologicznej online: konsultacje i psychoterapia po polsku i angielsku, głównie dla Polaków mieszkających w Norwegii. Wersje językowe: polska (domyślna), norweska (bokmål) i angielska.

**Przed publikacją przejrzyj [DO-WERYFIKACJI.md](DO-WERYFIKACJI.md)** — lista informacji, które Joanna musi potwierdzić.

## Technologia

- [Astro](https://astro.build) 7 — statyczne HTML, minimum JavaScriptu (jeden mały skrypt: menu, animacje, formularz)
- Tailwind CSS 4, TypeScript
- Fonty hostowane lokalnie (Cormorant Garamond + Manrope), bez Google Fonts
- Obrazy optymalizowane do AVIF/WebP podczas budowania
- Brak cookies, analityki i narzędzi śledzących

Wymagany Node.js ≥ 22.12 (zob. `.nvmrc`).

## Uruchomienie

```bash
npm install
npm run dev       # serwer deweloperski: http://localhost:4321
npm run build     # wersja produkcyjna do katalogu dist/
npm run preview   # podgląd zbudowanej wersji
npm run check     # sprawdzenie typów
```

## Struktura

```
src/
  config.ts            dane kontaktowe i przełączniki (telefon, opinie, członkostwa…)
  i18n/pl.ts, no.ts, en.ts   wszystkie teksty strony w 3 językach
  i18n/index.ts        adresy stron w każdym języku, hreflang
  components/          sekcje strony (Hero, About, Services, Approach, …)
  layouts/BaseLayout.astro   <head>: SEO, Open Graph, hreflang, JSON-LD
  scripts/site.ts      menu mobilne, animacje, zmiana języka, formularz
  styles/global.css    kolory, typografia, wspólne klasy
  assets/              portrety (optymalizowane przy budowaniu)
  pages/               /, /no/, /en/ + polityka prywatności w 3 językach, sitemap.xml
public/
  brand/               logo, monogram, symbol (SVG)
  og/                  obrazy podglądu linków (Facebook, Messenger itp.)
  favicon.*, icon-*.png, robots.txt, site.webmanifest, _headers
scripts/
  build_brand_assets.py   generuje logo i favicony
  build_og.mjs            generuje obrazy Open Graph
materials/             materiały źródłowe: opis.md, oryginalne zdjęcia, stary prototyp (nieużywany)
docs/IDENTYFIKACJA.md  opis logo, kolorów, typografii + prompty do zdjęć
```

## Edycja treści

Wszystkie teksty są w `src/i18n/pl.ts`, `no.ts` i `en.ts`. Pliki mają taką samą strukturę, a TypeScript pilnuje, żeby żadnej wersji językowej niczego nie brakowało. Po zmianie w jednym języku wprowadź odpowiednik w pozostałych.

Przełączniki w `src/config.ts`:

| Ustawienie | Domyślnie | Znaczenie |
|---|---|---|
| `SITE.phone.verified` | `false` | pokazuje numer telefonu |
| `FEATURES.showMemberships` | `false` | pokazuje członkostwa w organizacjach |
| `FEATURES.showTestimonials` | `false` | pokazuje sekcję opinii (i link w menu), jeśli w plikach językowych są opinie |
| `FEATURES.privacyPolicyReviewed` | `false` | ukrywa baner „wersja robocza” w polityce prywatności |

## Formularz kontaktowy

Strona jest statyczna, więc formularz wysyła dane do zewnętrznej usługi. Adres usługi podaje się w zmiennej środowiskowej podczas budowania:

```bash
cp .env.example .env
# uzupełnij PUBLIC_FORM_ENDPOINT (i ewentualnie PUBLIC_FORM_ACCESS_KEY)
```

Obsługiwane usługi:

- **Formspree** — `PUBLIC_FORM_ENDPOINT=https://formspree.io/f/<id>`, klucz pusty.
- **Web3Forms** — `PUBLIC_FORM_ENDPOINT=https://api.web3forms.com/submit`, `PUBLIC_FORM_ACCESS_KEY=<klucz>`.
- Inna usługa przyjmująca `POST multipart/form-data` i odpowiadająca kodem 2xx.

Jak to działa:

- walidacja pól w przeglądarce (komunikaty w języku strony),
- ochrona przed spamem: ukryte pola-pułapki (`_gotcha` dla Formspree, `botcheck` dla Web3Forms) i blokada wysyłki szybszej niż 2,5 s; usługi mają też własne filtry,
- komunikat o sukcesie pojawia się **wyłącznie** po odpowiedzi 2xx z usługi; przy błędzie formularz zachowuje treść i proponuje kontakt e-mailowy,
- **bez skonfigurowanego adresu formularz nie udaje wysyłki** — informuje, że nie jest jeszcze aktywny, i kieruje do adresu e-mail.

Stan testów: walidację, brak konfiguracji, sukces, błąd serwera i pułapkę na boty sprawdzono w przeglądarce (Playwright) na **lokalnej atrapie** usługi. **Wysyłki przez prawdziwego dostawcę nie sprawdzono**, bo nie ma jeszcze konta. Po skonfigurowaniu wyślij testową wiadomość i sprawdź, czy dotarła na skrzynkę.

RODO: wybierz dostawcę, podpisz z nim umowę powierzenia (DPA) i wpisz jego nazwę w polityce prywatności. Formularz zbiera tylko dane potrzebne do odpowiedzi i ostrzega, żeby nie wpisywać informacji o zdrowiu.

## Wdrożenie

Wynik `npm run build` (katalog `dist/`) to zwykłe pliki HTML/CSS/JS/obrazy. Można je umieścić na dowolnym hostingu.

### Netlify lub Cloudflare Pages (zalecane)

1. Połącz repozytorium z usługą.
2. Polecenie budowania: `npm run build`, katalog publikacji: `dist`, wersja Node: 22.
3. W ustawieniach dodaj zmienne `PUBLIC_FORM_ENDPOINT` (i ewentualnie `PUBLIC_FORM_ACCESS_KEY`).
4. Podepnij domenę `joannapilarczyk.no` i włącz HTTPS.

Plik `public/_headers` ustawia podstawowe nagłówki bezpieczeństwa i cache (oba serwisy czytają go automatycznie).

### Tradycyjny hosting (np. Domeneshop, one.com)

1. Lokalnie: `.env` z adresem formularza, potem `npm run build`.
2. Wgraj **zawartość** katalogu `dist/` przez FTP/SFTP do katalogu `www`/`public_html`.
3. Ustaw `404.html` jako stronę błędu 404, jeśli hosting na to pozwala.

Przy zmianie domeny popraw `site` w `astro.config.mjs`, `SITE.url` w `src/config.ts` i adres w `public/robots.txt`.

## SEO i dostępność

- Osobne adresy dla języków (`/`, `/no/`, `/en/`) z `hreflang`, `canonical` i `x-default`.
- `sitemap.xml` z wersjami językowymi, `robots.txt`, Open Graph z obrazem dla każdego języka.
- Dane strukturalne JSON-LD (`Person` + `ProfessionalService`) bez fikcyjnego adresu gabinetu.
- Cel: WCAG 2.2 AA. Kontrast sprawdzony, nawigacja klawiaturą, link „przejdź do treści”, `prefers-reduced-motion` wyłącza animacje. Automatyczny audyt axe-core na wszystkich stronach: 0 naruszeń.

## Grafiki

- Logo i favicony: `npm run assets` (wymaga `pip install fonttools brotli pillow`).
- Obrazy Open Graph: `NODE_PATH=$(npm root -g) node scripts/build_og.mjs` (wymaga Playwright z Chromium).
