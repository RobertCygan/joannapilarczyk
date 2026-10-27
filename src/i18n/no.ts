import type { Content } from './types';

/*
 * Tittelen «psykologspesialist» er bevisst ikke brukt – den er beskyttet i Norge
 * og må bekreftes før den eventuelt tas i bruk (se DO-WERYFIKACJI.md).
 */
export const no: Content = {
  lang: 'no',
  htmlLang: 'nb',
  ogLocale: 'nb_NO',
  langName: 'Norsk',
  brandTagline: 'Psykolog • Psykoterapeut',

  meta: {
    title: 'Joanna Pilarczyk – psykolog og psykoterapeut på nett | Polsk psykolog i Norge',
    description:
      'Samtaler og psykoterapi på nett, på polsk og engelsk. Psykolog og systemisk psykoterapeut for enkeltpersoner, par og familier – særlig for polakker som bor i Norge.',
  },

  nav: {
    home: 'Start',
    about: 'Om meg',
    services: 'Tilbud',
    process: 'Terapi på nett',
    testimonials: 'Tilbakemeldinger',
    faq: 'Spørsmål',
    contact: 'Kontakt',
    cta: 'Bestill en samtale',
    openMenu: 'Åpne meny',
    closeMenu: 'Lukk meny',
    skipToContent: 'Gå til innholdet',
    languageLabel: 'Språk',
    mainNavLabel: 'Hovedmeny',
  },

  hero: {
    eyebrow: 'Samtaler og psykoterapi på nett',
    role: 'Psykolog | Systemisk psykoterapeut',
    lead:
      'Jeg jobber med voksne, par og familier. De fleste som tar kontakt, er polakker bosatt i Norge, men siden vi møtes på video, spiller det ingen rolle hvor du bor. Samtalene foregår på polsk eller engelsk.',
    ctaPrimary: 'Bestill en samtale',
    ctaSecondary: 'Se tilbudet',
    facts: ['Bosatt i Norge siden 2013', 'Samtaler på nett siden 2013', 'Polsk og engelsk'],
    portraitAlt: 'Portrett av Joanna Pilarczyk, psykolog og psykoterapeut',
    badgeTitle: 'Kun på nett',
    badgeText: 'Norge, Polen og andre land',
  },

  about: {
    eyebrow: 'Om meg',
    heading: 'Klinisk erfaring fra Polen og Norge',
    paragraphs: [
      'Jeg er psykolog og psykoterapeut med systemisk tilnærming, og jobber med enkeltpersoner, par og familier. Jeg ser ikke bare på selve problemet, men også på erfaringene, relasjonene og behovene til den enkelte.',
      'Jeg studerte psykologi ved Universitetet i Szczecin med fordypning i klinisk psykologi, og tok min psykoterapiutdanning ved Wielkopolskie Towarzystwo Terapii Systemowej, en polsk forening for systemisk terapi. Fra 2006 til 2013 jobbet jeg i foreningen Erka i Szczecin med ungdom, voksne og familier i svært vanskelige livssituasjoner, blant annet med kriseintervensjon, gruppeterapi for ungdom og hjelp til personer utsatt for vold.',
      'I 2013 flyttet jeg til Norge. Siden 2018 har jeg jobbet som psykolog ved DPS Solvang, Sørlandet sykehus. I egen praksis tilbyr jeg samtaler og psykoterapi på nett. Jeg har også samarbeidet med polske foreninger og skoler flere steder i landet om foredrag, kurs og rådgivning.',
      'Jeg holder meg faglig oppdatert og er nå under utdanning i veiledning innen psykologi og psykoterapi. Mitt eget arbeid drøfter jeg jevnlig med en mer erfaren veileder.',
    ],
    portraitAlt: 'Portrettbilde av Joanna Pilarczyk',
    signature: 'Joanna Pilarczyk',
  },

  qualifications: {
    eyebrow: 'Kvalifikasjoner',
    heading: 'Utdanning og erfaring',
    intro: 'De viktigste stegene i min faglige utdanning og kliniske praksis.',
    educationTitle: 'Utdanning og videreutdanning',
    education: [
      {
        period: 'pågår',
        title: 'Videreutdanning i veiledning (supervisjon) innen psykologi og psykoterapi',
      },
      {
        period: '2012–2013',
        title: 'Systemisk psykoterapi – individual- og familieterapi',
        detail: 'Wielkopolskie Towarzystwo Terapii Systemowej (Polen)',
      },
      {
        period: '2008–2013',
        title: 'Psykologi, fordypning i klinisk psykologi',
        detail: 'Universitetet i Szczecin (Polen)',
      },
    ],
    experienceTitle: 'Klinisk arbeid',
    experience: [
      {
        period: 'fra 2018',
        title: 'Psykolog, DPS Solvang – Sørlandet sykehus',
      },
      {
        period: 'fra 2013',
        title: 'Egen praksis på nett',
        detail:
          'Samtaler, psykologisk rådgivning og psykoterapi for enkeltpersoner, par og familier. Klienter i Norge, Polen, Storbritannia og Tyskland.',
      },
      {
        period: 'Norge',
        title: 'Samarbeid med polske organisasjoner',
        detail:
          'Blant annet Propter Familia (Bergen), INorge Forening (Sandnes), Polakker i Norge (Oslo), Klub Polek i Trondheim og de polske skolene i Ålesund og Kristiansand – foredrag, kurs og rådgivning.',
      },
      {
        period: '2006–2013',
        title: 'Foreningen Erka, Szczecin',
        detail:
          'Arbeid med ungdom, voksne og familier: kriseintervensjon, gruppeterapi for ungdom, hjelp til personer utsatt for vold og seksuelle overgrep, voksne barn av alkoholikere, rusproblemer og karriereveiledning. Deltakelse i EU-prosjekter og polsk-tysk ungdomsutveksling.',
      },
    ],
    registrationLabel: 'HPR-nummer (Helsepersonellregisteret)',
    membershipsTitle: 'Faglige organisasjoner',
    memberships: [
      'Norsk Psykologforening',
      'Norsk Forening for Familieterapi',
      'Samorząd Zawodowy Psychologów, Polskie Towarzystwo Psychologiczne',
      'Ogólnopolski Związek Zawodowy Psychologów',
      'Wielkopolskie Towarzystwo Terapii Systemowej',
    ],
  },

  services: {
    eyebrow: 'Tilbud',
    heading: 'Hva jeg kan hjelpe med',
    intro: 'Hvilken form for hjelp som passer, finner vi ut etter den første samtalen. Alle timer foregår på nett.',
    items: [
      {
        icon: 'consult',
        title: 'Psykologisk konsultasjon',
        text: 'Vi ser på situasjonen din, setter ord på det som er vanskeligst, og blir enige om veien videre. Noen ganger holder én samtale, andre ganger blir den starten på terapi.',
      },
      {
        icon: 'individual',
        title: 'Individuell psykoterapi',
        text: 'Korttidsterapi når det gjelder et konkret problem her og nå. Langtidsterapi når de samme vanskene kommer tilbake, og det er verdt å se nærmere på hvor de kommer fra.',
      },
      {
        icon: 'couple',
        title: 'Parterapi',
        text: 'For par i krise, eller når det er vanskelig å finne en løsning på egen hånd. Vi jobber med det som skjer mellom dere: samtalene, konfliktene og forventningene.',
      },
      {
        icon: 'family',
        title: 'Familieterapi',
        text: 'Samtaler med hele familien eller noen av familiemedlemmene. En endring hos én person påvirker de andre, derfor ser vi på relasjonene og ikke bare på «problemet» til én person.',
      },
      {
        icon: 'crisis',
        title: 'Kriseintervensjon',
        text: 'Kortvarig, tidsavgrenset hjelp etter en vanskelig hendelse, når de vanlige måtene å takle ting på ikke lenger strekker til. Målet er å finne fotfeste igjen og planlegge videre hjelp.',
        note: 'Ved fare for liv og helse: ring nødnummer – se Kontakt.',
      },
      {
        icon: 'career',
        title: 'Karriere- og motivasjonsveiledning',
        text: 'Valg eller bytte av jobb, å finne seg til rette i et nytt arbeidsmiljø, utvikling av lederegenskaper. For deg som vil forstå deg selv bedre i arbeidslivet.',
      },
      {
        icon: 'group',
        title: 'Støttegrupper',
        text: 'For voksne og ungdom i det polske miljøet. Generelle og tematiske grupper, for eksempel om angst eller depresjon.',
        note: 'Grupper settes opp ved nok interesse – spør gjerne om planene fremover.',
      },
      {
        icon: 'lecture',
        title: 'Kurs og foredrag',
        text: 'Foredrag om psykologi og personlig utvikling, kurs i kommunikasjon, mellommenneskelige ferdigheter og håndtering av vanskelige følelser.',
        note: 'For organisasjoner, skoler og foreninger – tid og form avtales.',
      },
    ],
    areasHeading: 'Hva du kan ta kontakt om',
    areasIntro:
      'Listen er ikke uttømmende. Finner du ikke det du lurer på, så skriv likevel – jeg sier fra om jeg kan hjelpe, og hvis ikke, hvor du kan søke hjelp.',
    areasToggle: 'Vis hele listen',
    areas: [
      {
        title: 'Flytting og tilpasning',
        items: [
          'livet i et nytt land og en ny kultur',
          'avstand til familien og savn',
          'å finne seg til rette på jobb og sosialt',
          'motivasjon til å lære språket',
        ],
      },
      {
        title: 'Parforhold og familie',
        items: [
          'krise i parforholdet',
          'forholdet mellom foreldre og barn og mellom søsken',
          'skilsmisse og samlivsbrudd',
          'oppdragelse og utfordrende atferd hos ungdom',
          'redsel for nærhet eller for å bli forlatt',
        ],
      },
      {
        title: 'Følelser og psykisk helse',
        items: [
          'angst, sjenanse og sosial angst',
          'nedstemthet og depresjon',
          'tvangslidelse (OCD)',
          'stress, sinneutbrudd, vansker med å regulere følelser',
          'psykosomatiske plager',
        ],
      },
      {
        title: 'Krise, tap og traumer',
        items: [
          'sykdom i familien, også alvorlig og uhelbredelig sykdom',
          'sorg etter å ha mistet noen',
          'PTSD og følger av traumatiske opplevelser',
          'selvmordstanker og selvskading',
        ],
      },
      {
        title: 'Vold',
        items: [
          'vold i nære relasjoner',
          'mobbing på jobb eller skole',
          'seksuelle overgrep, også i barndommen',
        ],
      },
      {
        title: 'Avhengighet',
        items: [
          'alkohol, narkotika, legemidler, pengespill',
          'spill, internett, shopping, arbeid, sex',
          'medavhengighet',
          'voksne barn av alkoholikere eller fra dysfunksjonelle familier',
        ],
      },
      {
        title: 'Andre vansker',
        items: ['spiseforstyrrelser', 'seksualitet og seksuelle vansker', 'personlighetsforstyrrelser'],
      },
      {
        title: 'Arbeid og utvikling',
        items: [
          'valg og endring av yrkesvei',
          'kommunikasjon, selvhevdelse, konfliktløsning',
          'selvfølelse',
          'tidsstyring, lederegenskaper',
        ],
      },
    ],
  },

  approach: {
    eyebrow: 'Tilnærming',
    heading: 'Systemisk terapi',
    lead:
      'I systemisk terapi «tilhører» ikke problemet bare én person. Vi lever alle i et nettverk av relasjoner – i parforholdet, i familien, på jobben. Relasjonene påvirker oss, og vi påvirker dem. Derfor ser jeg på mennesket sammen med omgivelsene.',
    points: [
      {
        title: 'Relasjoner',
        text: 'Hvordan vi har det, henger tett sammen med hva som skjer mellom oss og menneskene rundt oss. Der ligger ofte både kilden til vanskene og en del av løsningen.',
      },
      {
        title: 'Familiekontekst',
        text: 'Reglene vi vokste opp med, rollene vi tok på oss, og familiens historie påvirker hvordan vi reagerer og tar valg i dag.',
      },
      {
        title: 'Gjensidig påvirkning',
        text: 'Når én person endrer seg, endres også systemet rundt. Derfor kan også individuell terapi føre til endringer i relasjonene til andre.',
      },
      {
        title: 'Mønstre',
        text: 'Vi ser etter gjentakende måter å reagere og kommunisere på, som en gang var nyttige, men som i dag gjør livet vanskeligere.',
      },
      {
        title: 'Ressurser',
        text: 'Jeg legger også vekt på det som allerede fungerer: ferdigheter, erfaringer og mennesker du kan støtte deg til.',
      },
    ],
    principlesTitle: 'Slik jobber jeg',
    principles: [
      'Konfidensialitet og taushetsplikt',
      'Etiske retningslinjer for psykologer og psykoterapeuter',
      'Mål for terapien avtales sammen i starten',
      'Arbeidsplan tilpasset den enkelte, paret eller familien',
      'Jevnlig veiledning hos en mer erfaren psykoterapeut',
    ],
    illustrationLabel: 'Illustrasjon: sammenkoblede sirkler som symboliserer relasjoner i et familiesystem',
  },

  emigration: {
    eyebrow: 'Livet i Norge',
    heading: 'Støtte når du bor i et annet land',
    paragraphs: [
      'Å flytte til et annet land betyr som regel mange endringer på én gang: ny jobb, nytt språk, andre normer – og familien langt unna. Mange finner seg godt til rette. Men noen ganger begynner noe å tynge, og det er vanskelig å håndtere alene.',
      'Jeg har bodd i Norge siden 2013, så jeg kjenner hverdagen her også fra eget liv.',
    ],
    listTitle: 'Dette tar folk som bor i utlandet ofte kontakt om',
    items: [
      'tilpasning til nye omgivelser og en ny kultur',
      'ensomhet og isolasjon',
      'avstand til familien i Polen',
      'spenninger i parforholdet eller familien',
      'stress ved store livsendringer',
      'utfordringer på jobb og i arbeidslivet',
      'usikkerhet om fremtiden – bli eller flytte tilbake',
    ],
    note: 'Vi kan snakke polsk, så du slipper å lete etter ord på et fremmedspråk for å fortelle om det som er viktig.',
  },

  process: {
    eyebrow: 'Terapi på nett',
    heading: 'Slik foregår det',
    intro: 'Timene foregår som videosamtale. Det er enkelt å ta kontakt, og det forplikter ikke til noe.',
    steps: [
      {
        title: 'Send en melding',
        text: 'Via skjemaet eller på e-post. Noen få setninger om hva du ønsker hjelp med holder – detaljene tar vi i samtalen.',
      },
      {
        title: 'Avtal tid',
        text: 'Jeg svarer på meldingen og foreslår tidspunkt for den første samtalen. Vi avtaler også hvordan vi kobler oss opp.',
      },
      {
        title: 'Første samtale',
        text: 'Du forteller om situasjonen din, og jeg stiller spørsmål som hjelper oss å forstå den bedre. Du kan også spørre om alt som gjelder terapien.',
      },
      {
        title: 'Videre samarbeid',
        text: 'Sammen bestemmer vi veien videre: flere samtaler, psykoterapi eller en annen form for hjelp hvis det passer bedre for deg.',
      },
    ],
    practicalTitle: 'Praktisk informasjon',
    practical: [
      { icon: 'clock', label: 'Individuell time', value: '50 minutter' },
      { icon: 'clock', label: 'Par eller familie', value: '90 minutter' },
      { icon: 'globe', label: 'Språk', value: 'polsk, engelsk' },
      { icon: 'online', label: 'Form', value: 'videosamtale' },
    ],
    requirements: 'Du trenger PC eller mobil med kamera, stabil internettforbindelse og et sted der du kan snakke uforstyrret.',
  },

  testimonials: {
    eyebrow: 'Tilbakemeldinger',
    heading: 'Tilbakemeldinger fra klienter',
    intro: 'Publisert med samtykke fra forfatterne, uten endringer i innholdet.',
    items: [],
  },

  faq: {
    eyebrow: 'Spørsmål',
    heading: 'Ofte stilte spørsmål',
    items: [
      {
        q: 'Hvordan foregår den første samtalen?',
        a: 'Vi snakker om situasjonen din og hva du ønsker hjelp med. Jeg stiller spørsmål for å forstå problemet bedre. Til slutt forteller jeg hvordan jeg ser mulighetene for hjelp, og vi bestemmer sammen om og hvordan vi går videre.',
      },
      {
        q: 'Foregår alle timer på nett?',
        a: 'Ja. Jeg tilbyr bare timer på nett, som videosamtale. Du kan delta uansett hvor du bor.',
      },
      {
        q: 'Hvordan forbereder jeg meg til den første samtalen?',
        a: 'Du trenger ikke forberede deg spesielt. Finn gjerne et rolig sted der du ikke blir forstyrret, og sjekk kamera og mikrofon på forhånd. Hvis det er lettere å samle tankene skriftlig, kan du notere hva du vil snakke om.',
      },
      {
        q: 'Hvor lenge varer en time?',
        a: 'En individuell time varer 50 minutter, en time for par eller familie 90 minutter. Hvor ofte og hvor mange ganger vi møtes, avtaler vi underveis.',
      },
      {
        q: 'Hvilke språk snakker du?',
        a: 'Samtalene foregår på polsk eller engelsk.',
      },
      {
        q: 'Kan jeg få hjelp selv om jeg ikke bor i Norge?',
        a: 'Ja. Siden 2013 har jeg også jobbet på nett med klienter som bor blant annet i Polen, Storbritannia og Tyskland.',
      },
      {
        q: 'Hvordan foregår betalingen?',
        a: 'Gjeldende priser og betalingsmåte får du når vi avtaler den første timen.',
      },
      {
        q: 'Hva gjør jeg i en akutt krise?',
        a: 'Hvis ditt eller andres liv eller helse er i fare, ikke vent på svar på en melding. Ring 113 i Norge, eller 112 i Polen og andre EU-land. Legevakten (116 117) og Mental Helses hjelpetelefon (116 123) er åpne hele døgnet. I Polen er krisetelefonen Centrum Wsparcia døgnåpen: 800 70 2222.',
      },
    ],
  },

  contact: {
    eyebrow: 'Kontakt',
    heading: 'Bestill en samtale',
    lead: 'Skriv noen setninger om hva du ønsker hjelp med, og når det passer for deg. Jeg svarer på e-post.',
    emailLabel: 'E-post',
    phoneLabel: 'Telefon',
    languagesLabel: 'Språk',
    languagesValue: 'polsk, engelsk',
    formatLabel: 'Form',
    formatValue: 'kun på nett',
    form: {
      name: 'Fornavn',
      email: 'E-postadresse',
      phone: 'Telefonnummer',
      optional: 'valgfritt',
      topic: 'Tema',
      topicPlaceholder: 'Velg tema',
      topics: [
        'Psykologisk konsultasjon',
        'Individuell psykoterapi',
        'Parterapi',
        'Familieterapi',
        'Kriseintervensjon',
        'Karriere- og motivasjonsveiledning',
        'Støttegrupper',
        'Kurs og foredrag',
        'Annet',
      ],
      language: 'Ønsket språk',
      languages: ['Polsk', 'Engelsk'],
      message: 'Melding',
      messagePlaceholder: 'Hva ønsker du hjelp med, og når passer det for deg?',
      sensitiveNote:
        'En kort beskrivelse holder. Ikke skriv detaljer om helse, diagnoser eller behandling her – det snakker vi om i timen.',
      consentBefore: 'Jeg har lest ',
      consentLink: 'personvernerklæringen',
      consentAfter: '.',
      submit: 'Send melding',
      sending: 'Sender …',
      success: 'Takk, meldingen er sendt. Jeg svarer til e-postadressen du oppga.',
      error: 'Meldingen ble ikke sendt. Prøv igjen om litt, eller send en e-post direkte.',
      notConfigured: 'Skjemaet er ikke aktivert ennå. Send en e-post direkte til adressen ved siden av.',
      required: 'Dette feltet må fylles ut.',
      invalidEmail: 'Skriv inn en gyldig e-postadresse.',
      tooShort: 'Skriv gjerne litt mer.',
      consentRequired: 'Bekreft at du har lest personvernerklæringen.',
      honeypotLabel: 'Ikke fyll ut dette feltet',
    },
    crisis: {
      title: 'I en akutt situasjon',
      text: 'Skjemaet og e-post er ikke ment for akutte henvendelser. Hvis ditt eller andres liv eller helse er i fare, ring:',
      numbers: [
        { label: 'Medisinsk nødhjelp', number: '113', tel: '113' },
        { label: 'Legevakt (døgnåpen)', number: '116 117', tel: '116117' },
        { label: 'Mental Helse hjelpetelefon (døgnåpen)', number: '116 123', tel: '116123' },
        { label: 'Polen og andre EU-land – nødnummer', number: '112', tel: '112' },
      ],
      abroad: 'I andre land: ring det lokale nødnummeret.',
    },
  },

  footer: {
    tagline: 'Psykolog | Systemisk psykoterapeut',
    online: 'Samtaler og psykoterapi kun på nett – på polsk og engelsk.',
    navTitle: 'Nettsiden',
    contactTitle: 'Kontakt',
    privacy: 'Personvernerklæring',
    cookies: 'Nettsiden bruker ikke analyse- eller reklamecookies.',
    rights: 'Alle rettigheter forbeholdt.',
    backToTop: 'Til toppen',
  },

  privacy: {
    title: 'Personvernerklæring – Joanna Pilarczyk',
    description: 'Hvordan personopplysninger fra kontaktskjemaet og e-post behandles.',
    heading: 'Personvernerklæring',
    updated: 'Sist oppdatert: [dato – fylles ut]',
    draftNotice:
      'Utkast. Dokumentet må kvalitetssikres juridisk før publisering, og feltene i hakeparentes må fylles ut.',
    sections: [
      {
        title: 'Behandlingsansvarlig',
        paragraphs: [
          'Behandlingsansvarlig er Joanna Pilarczyk, som driver privat psykologpraksis på nett [foretaksnavn og organisasjonsnummer – fylles ut]. Kontakt: joanna.pilarczyk@gmail.com.',
        ],
      },
      {
        title: 'Hvilke opplysninger og hvorfor',
        paragraphs: [
          'Via kontaktskjemaet samles det inn fornavn, e-postadresse, eventuelt telefonnummer, valgt tema, ønsket språk og selve meldingen. De samme opplysningene kan jeg motta når du skriver direkte på e-post.',
          'Opplysningene brukes bare til å svare på henvendelsen og eventuelt avtale en time. Behandlingsgrunnlaget er å gjennomføre tiltak på din forespørsel før en avtale inngås (personvernforordningen art. 6 nr. 1 bokstav b).',
        ],
      },
      {
        title: 'Helseopplysninger',
        paragraphs: [
          'Ikke send opplysninger om helse, diagnoser eller behandling i skjemaet eller i den første meldingen. Hvis slike opplysninger likevel kommer til meg, brukes de bare til å svare og avtale time.',
          'Journalføring i terapien er regulert av egne regler om taushetsplikt og pasientjournal. Dette får du informasjon om ved oppstart.',
        ],
      },
      {
        title: 'Hvem opplysningene deles med',
        paragraphs: [
          'Meldinger fra skjemaet sendes via [navn på skjemaleverandør – fylles ut] til min e-postkasse hos Google (Gmail). Nettsiden driftes av [hostingleverandør – fylles ut].',
          'Hvis en leverandør behandler opplysninger utenfor EØS, skjer det på grunnlag av EUs standardkontraktsbestemmelser eller andre garantier etter personvernforordningen. [Bekreftes når leverandørene er valgt.]',
        ],
      },
      {
        title: 'Hvor lenge opplysningene lagres',
        paragraphs: [
          'Korrespondanse som ikke fører til samarbeid, slettes [periode – fylles ut, f.eks. 12 måneder] etter siste kontakt.',
        ],
      },
      {
        title: 'Dine rettigheter',
        paragraphs: [
          'Du har rett til innsyn, retting, sletting, begrensning, dataportabilitet og til å protestere mot behandlingen. Send en e-post til joanna.pilarczyk@gmail.com.',
          'Du kan også klage til Datatilsynet.',
        ],
      },
      {
        title: 'Informasjonskapsler (cookies) og statistikk',
        paragraphs: [
          'Nettsiden bruker ikke analyse- eller reklamecookies og ingen sporingsverktøy. Skrifttypene lastes fra samme server, uten tilkobling til Google. Hostingleverandøren kan lagre tekniske logger (f.eks. IP-adresse og tidspunkt) av sikkerhetshensyn.',
        ],
      },
    ],
    back: 'Tilbake til forsiden',
  },

  notFound: {
    title: 'Fant ikke siden',
    text: 'Siden finnes ikke eller er flyttet.',
    back: 'Gå til forsiden',
  },
};
