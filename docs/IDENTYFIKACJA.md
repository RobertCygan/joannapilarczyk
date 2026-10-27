# Identyfikacja wizualna

## Logo

Symbol: **dwa splecione, otwarte pierścienie**. Każdy ma przerwę w miejscu, w którym przechodzi przez niego drugi. Znak mówi o relacji i wzajemnym wpływie, czyli o tym, na czym opiera się podejście systemowe. Celowo nie użyto mózgu, serca ani symboli medycznych.

Wordmark: „JOANNA PILARCZYK” — Cormorant Garamond 600, wersaliki ze światłem 0.12 em.
Podpis: „PSYCHOLOG • PSYCHOTERAPEUTA” — Manrope 600, wersaliki ze światłem 0.24 em.

Pliki (`public/brand/`, tekst zamieniony na ścieżki — nie wymagają fontów):

| Plik | Zastosowanie |
|---|---|
| `logo-{pl,no,en}.svg` | logotyp poziomy, jasne tło |
| `logo-{pl,no,en}-light.svg` | logotyp poziomy, ciemne tło |
| `logo-stacked-{pl,no,en}[-light].svg` | logotyp pionowy (dokumenty, social media) |
| `symbol.svg`, `symbol-light.svg` | sam znak |
| `monogram.svg`, `monogram-light.svg`, `monogram-forest.svg` | monogram JP |
| `/favicon.svg`, `/favicon.ico`, `/apple-touch-icon.png`, `/icon-*.png` | favicony i ikony aplikacji |

Regeneracja: `pip install fonttools brotli pillow && npm run assets` (skrypt: `scripts/build_brand_assets.py`).

## Kolory

| Token | HEX | Zastosowanie |
|---|---|---|
| `forest` | #29483E | nagłówki, przyciski, stopka |
| `sage` | #789C8A | linie, ikony, elementy dekoracyjne (nie do drobnego tekstu: kontrast 2.9:1) |
| `sage-ink` | #4F6F60 | drobny tekst w kolorze szałwii (kontrast 5.3:1) |
| `mint` | #A8D5C2 | akcenty, obramowania, tekst na ciemnym tle |
| `mint-soft` | #DDEFE6 | gradienty |
| `mint-50` | #F0F8F4 | tła sekcji i ikon |
| `ivory` | #FAF9F6 | tło strony |
| `sand` | #EAE4DA | ramka informacji kryzysowej |
| `graphite` | #303B37 | tekst główny (kontrast 11:1) |
| `muted` | #5E6B66 | tekst pomocniczy (kontrast 5.3:1) |

## Typografia

- Nagłówki: **Cormorant Garamond** 500/600, tylko w dużych rozmiarach (od ok. 24 px).
- Tekst i interfejs: **Manrope** (variable), 17 px, interlinia 1.7.
- Fonty są hostowane lokalnie (pakiety `@fontsource`) — bez połączeń z Google Fonts.

## Ilustracje i zdjęcia

Strona celowo nie używa stockowych zdjęć gabinetów, żeby nie sugerować przyjęć stacjonarnych. Zamiast nich:

- autentyczne portrety Joanny (`src/assets/`),
- schemat systemu rodzinnego (`SystemsIllustration.astro`),
- linia gór i fiordu w sekcji o życiu w Norwegii,
- spójny zestaw ikon liniowych (`Icon.astro`, siatka 24 px, kreska 1.5).

### Prompty do opcjonalnych fotografii tematycznych

Jeśli kiedyś przydadzą się zdjęcia (np. do mediów społecznościowych albo rozbudowy strony), te prompty dają obrazy spójne ze stroną. Wspólny dopisek do każdego:

> soft natural daylight, Scandinavian minimal interior, muted sage green and warm ivory palette, shallow depth of field, calm and professional, editorial photography, no text, no logos, no clinical or medical props, no therapist's office setting

1. **Konsultacje online** — „A laptop on a light oak desk by a window, a video call screen softly out of focus, a ceramic mug and a small eucalyptus branch beside it, seen from a three-quarter angle”
2. **Psychoterapia indywidualna** — „A person seen from behind sitting in an armchair at home, wearing headphones and looking at a laptop, linen curtains, morning light”
3. **Psychoterapia par** — „Two hands resting near each other on a linen sofa, two cups of tea on a low wooden table, warm quiet atmosphere at home”
4. **Psychoterapia rodzinna** — „A family kitchen table seen from above with several mugs, a notebook and a plant, suggesting a conversation, no faces”
5. **Interwencja kryzysowa** — „A calm Norwegian fjord at dawn, mist over still water, soft pastel sky, sense of steadiness”
6. **Poradnictwo zawodowe** — „An open notebook with handwritten notes, a pen and a laptop on a clean desk, a window with a view of Norwegian wooden houses”
7. **Grupy wsparcia** — „A circle of empty wooden chairs in a bright community room with large windows, plants, soft light”
8. **Warsztaty i wykłady** — „A bright seminar room with a flip chart showing simple abstract circles, rows of chairs, Scandinavian design”
9. **Pomoc online / emigracja** — „A window view from a Norwegian apartment over a coastal town, a laptop on the windowsill, a warm blanket, overcast soft light”
