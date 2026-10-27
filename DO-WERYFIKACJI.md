# Informacje do potwierdzenia przed publikacją

Treści strony powstały na podstawie `materials/opis.md` (teksty ze starej strony joannapilarczyk.no) i wytycznych projektu. Poniższe punkty wymagają potwierdzenia przez Joannę Pilarczyk. Przy każdym podano, gdzie zmienić treść lub ustawienie.

## Pilne — wpływa na to, co jest dziś widoczne na stronie

| # | Sprawa | Stan na stronie | Gdzie zmienić |
|---|---|---|---|
| 1 | **Zatrudnienie w DPS Solvang (Sørlandet sykehus) od 2018 r.** — czy nadal aktualne i czy można je wymieniać na stronie prywatnej praktyki? | Opisane jako aktualne („od 2018”) w „O mnie” i w kwalifikacjach | `src/i18n/{pl,no,en}.ts` → `about.paragraphs`, `qualifications.experience` |
| 2 | **Tytuł „psycholog specjalista”** — na jakiej podstawie formalnej (np. specjalizacja z psychologii klinicznej)? | PL: „Psycholog specjalista”, EN: „Specialist psychologist” | `hero.role`, `footer.tagline`, `about.paragraphs[0]` |
| 3 | **Norweski tytuł zawodowy** — czy Joanna ma prawo do tytułu „psykologspesialist”? Tytuł jest w Norwegii chroniony. | Celowo użyto tylko „Psykolog” | `src/i18n/no.ts` → `hero.role`, `footer.tagline` |
| 4 | **Numer HPR 10063068** — zgoda na publikację numeru z rejestru Helsepersonellregisteret | Widoczny w sekcji kwalifikacji | `src/config.ts` → `SITE.hprNumber` (usunięcie wymaga też zmiany w `About.astro`) |
| 5 | **Zdjęcia** — zgoda na publikację obu portretów. Czy `pic1.png` to autentyczna fotografia (ew. retusz), a nie obraz wygenerowany? | Hero: `pic1`; „O mnie”: zdjęcie z 3.05.2025 (wykadrowane, wyciszone kolory) | `src/assets/` |
| 6 | **Czas sesji: 50 min (indywidualna), 90 min (para/rodzina)** — dane ze starego cennika | Widoczne w „Jak wygląda współpraca” i FAQ | `process.practical`, `faq.items` |
| 7 | **Szkolenie psychoterapeutyczne WTTS 2012–2013** — czy zakończone certyfikatem? Pełna nazwa kursu? | „Psychoterapia systemowa – terapia indywidualna i rodzin” | `qualifications.education` |
| 8 | **Kształcenie superwizorskie** — nazwa programu/ośrodka, przewidywany termin ukończenia (opcjonalnie) | „w trakcie” — bez prezentowania jako ukończone | `qualifications.education[0]` |
| 9 | **Współpraca z organizacjami polonijnymi** (Propter Familia, INorge Forening, Polakker i Norge, Klub Polek w Trondheim, polskie szkoły w Ålesund i Kristiansand) — czy można je wymieniać? Na starej stronie opisane jako bieżąca współpraca. | Opisane jako współpraca („współpracowałam”), bez sugerowania, że trwa | `about.paragraphs[2]`, `qualifications.experience[2]` |
| 10 | **Klienci online w Polsce, Wielkiej Brytanii i Niemczech** — czy nadal aktualne? | W kwalifikacjach i FAQ | `qualifications.experience[1]`, `faq.items[5]` |
| 11 | **Grupy wsparcia i warsztaty** — czy są obecnie prowadzone? | Z adnotacją „powstają w miarę zainteresowania” / „termin ustalamy indywidualnie” | `services.items` |

## Ukryte do czasu potwierdzenia

| # | Sprawa | Jak włączyć |
|---|---|---|
| 12 | **Telefon +47 968 55 283** (ze starej strony) | `src/config.ts` → `SITE.phone.verified: true` |
| 13 | **Członkostwa**: Norsk Psykologforening, Norsk Forening for Familieterapi, Samorząd Zawodowy Psychologów PTP, Ogólnopolski Związek Zawodowy Psychologów, Wielkopolskie Towarzystwo Terapii Systemowej — które są aktualne? | Usuń nieaktualne z `qualifications.memberships` w 3 plikach językowych, potem `FEATURES.showMemberships: true` |
| 14 | **Opinie klientów** — w materiałach nie ma opinii. Opinie w starym prototypie (`materials/legacy/index.html`) miały przypisane miasta i gwiazdki i wyglądają na przykładowe, dlatego **nie zostały użyte**. Potrzebne są prawdziwe opinie, zgoda autorów i zatwierdzona forma podpisu (np. inicjały). | Dodaj do `testimonials.items` w 3 plikach, potem `FEATURES.showTestimonials: true` |

## Celowo nieopublikowane

- **„Całodobowy” telefon kryzysowy** (+47 968 55 283, „całodobowo” — tak było na starej stronie). Zamiast tego strona podaje norweskie i polskie numery alarmowe i całodobowe linie wsparcia. Jeśli Joanna rzeczywiście zapewnia całodobowy kontakt, trzeba to świadomie potwierdzić — to duża odpowiedzialność.
- **Cennik** — dane ze starej strony mogą być nieaktualne (poniżej). Na stronie: „aktualny cennik przekazuję przy umawianiu pierwszego spotkania”.
- **Język norweski** — strona ma wersję norweską, ale nie deklaruje prowadzenia terapii po norwesku. Jeśli Joanna prowadzi sesje po norwesku, trzeba dopisać to w `hero.lead`, `contact.languagesValue`, `faq` i w opcjach formularza.
- **Adresy w Narviku, Oslo i Kristiansand** — praktyka działa wyłącznie online, więc adresów nie ma na stronie.

## Do uzupełnienia

- **Formy płatności i zasady odwoływania wizyt** — brak danych; FAQ podaje tylko ogólną odpowiedź.
- **Narzędzie do wideorozmów** (stara strona: Skype) — warto wybrać rozwiązanie zgodne z RODO i ewentualnie dopisać je w FAQ.
- **Polityka prywatności** — wersja robocza z polami w [nawiasach]: nazwa działalności i numer organizacyjny, dostawca formularza, hosting, okres przechowywania danych, data. Wymaga weryfikacji prawnej. Po weryfikacji ustaw `FEATURES.privacyPolicyReviewed: true`.
- **Domena joannapilarczyk.no** w październiku 2026 nie odpowiadała w DNS (błąd ENOTFOUND). Przed wdrożeniem sprawdź rejestrację domeny i jej ustawienia DNS.
- **Profil ZnanyLekarz** (Szczecin) podaje przyjęcia stacjonarne i brak wizyt online, co jest sprzeczne z obecnym modelem pracy. Warto go zaktualizować albo nie linkować.
- **Media społecznościowe** — w starym prototypie były linki do Facebooka i LinkedIn. Na stronie ich nie ma; można je dodać po potwierdzeniu.
- **Numery alarmowe** — sprawdzać raz w roku (113, 116 117, 116 123 w Norwegii; 112; 800 70 2222 w Polsce).

## Cennik ze starej strony (do aktualizacji)

| Usługa | Cena | Czas |
|---|---:|---:|
| Rozeznanie i ocena wstępna | 1200 kr | 50 min |
| Diagnostyka psychologiczna | 1200 kr | 50 min |
| Terapia indywidualna krótko- lub długoterminowa | 1000 kr | 50 min |
| Wsparcie psychologiczne | 1000 kr | 50 min |
| Psychoedukacja | 1000 kr | 50 min |
| Poradnictwo rodzicielskie | 1100 kr | 50 min |
| Doradztwo zawodowe i motywacyjne | 1100 kr | 50 min |
| Rozeznanie i ocena wstępna – pary i rodziny | 1600 kr | 90 min |
| Terapia rodzin lub par | 1400 kr | 90 min |
| Wsparcie w relacjach i umiejętnościach biznesowych | 1500 kr | 50 min |
| Wsparcie psychologiczne po godz. 22 | 2600 kr | 50 min |
| Warsztaty/wykłady/zajęcia grupowe | 6500 kr | 60 min |
| Warsztaty/wykłady/zajęcia grupowe | 9000 kr | 120 min |
