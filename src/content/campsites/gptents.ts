import type { CampsiteConfig } from "../types";

/**
 * GPtents Spielberg — Premium-Camping & Hotelzelte am Red Bull Ring (F1 & MotoGP).
 * Inhalte zu 100 % aus raw/digest abgeleitet. Bilder provenienzgebunden an GPtents Spielberg.
 * Design FIX: kein theme, heroVariant "center".
 */
const IMG = "/campsites/gptents";

const gptents: CampsiteConfig = {
  name: "GPtents Spielberg",
  shortName: "GPtents",
  slug: "gptents",
  ort: "Spielberg",
  region: "Steiermark",
  brandKind: "Camping & Hotelzelte",
  regionLong: "Red Bull Ring · Spielberg · Steiermark · Österreich",

  heroVariant: "center",

  claim: "Dein Rennwochenende zu Fuß am Red Bull Ring",
  claimEmphasis: "am Red Bull Ring",
  emailDetail: "eure Lage nur wenige Gehminuten vom Red Bull Ring",
  intro:
    "Premium-Camping und vorgefertigte Hotelzelte direkt am Red Bull Ring: Du schläfst nur wenige Gehminuten von der Strecke, in echten Betten oder auf deinem eigenen Stellplatz — um alles dazwischen kümmert sich unser Team.",

  statement: {
    text: "Ankommen, Auto stehen lassen, zu Fuß zur Strecke — um den Rest kümmert sich unser Team.",
    emphasis: "zu Fuß zur Strecke",
  },

  pillars: [
    {
      title: "Minuten zur Rennstrecke",
      text: "GPtents liegt auf Camping BLACK, direkt am Red Bull Ring — rund 15 Minuten zu Fuß oder 3 Minuten mit dem Auto.",
      image: { src: `${IMG}/accommodation-1dc02676b6.webp`, alt: "Luftaufnahme des GPtents-Camps in der steirischen Bergkulisse bei Spielberg" },
    },
    {
      title: "Vorgefertigte Hotelzelte",
      text: "Dein Zweiraum-Zelt steht mit echten Betten, Hotelbettwäsche und Handtüchern bereit — Frühstücksbuffet inklusive.",
      image: { src: `${IMG}/accommodation-f2662e667c.webp`, alt: "Gäste entspannen in Liegestühlen vor den GPtents-Hotelzelten im Abendlicht" },
    },
    {
      title: "Premium-Camping mit Bergblick",
      text: "Lieber mit eigenem Equipment? Geräumige Stellplätze für Zelt, Wohnwagen und Camper, ringsum die steirische Bergkulisse.",
      image: { src: `${IMG}/gallery-82a3a76b37.webp`, alt: "Wohnmobil mit Vorzelt auf dem GPtents-Stellplatz mit Bergpanorama" },
    },
  ],

  usps: [
    "Zu Fuß zur Rennstrecke",
    "Warmwasser-Duschen",
    "24 h Sicherheitsdienst",
    "Parken direkt am Zelt",
    "Ruhezone ohne Partygruppen",
  ],

  trust: {
    heading: "Warum Fans am Red Bull Ring wiederkommen",
    headingEmphasis: "Red Bull Ring",
    intro:
      "Über 10.000 Rennsport-Fans haben schon bei GPtents übernachtet, die Google-Bewertung steht bei 4,8 — saubere Anlagen, kurze Wege und ein Team, das während des ganzen Wochenendes für dich da ist.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/accommodation-d38401ed86.webp`, alt: "Luftaufnahme des GPtents-Zeltdorfs mit Blick auf den Red Bull Ring in Spielberg" },
  },

  breather: {
    image: { src: `${IMG}/accommodation-80ae7e62f7.webp`, alt: "Abendstimmung im GPtents-Camp mit Lichterketten, Bar und Food-Bereich" },
    line: "Wenn am Abend die Lichterketten angehen und der Grill läuft.",
  },

  camping: {
    heading: "Premium-Camping am Red Bull Ring",
    intro: "Alles, was ein sorgloses Rennwochenende braucht — saubere Anlagen, gutes Essen und kurze Wege, direkt am Camp.",
    features: [
      {
        title: "Park direkt am Zelt",
        text: "Auto oder Motorrad stehen direkt neben deinem Stellplatz — Anreise ohne Stau, und zur Strecke geht es bequem zu Fuß.",
        image: { src: `${IMG}/accommodation-bd85f1767d.webp`, alt: "Reihe von Wohnmobilen auf dem GPtents-Stellplatz mit steirischen Bergen im Hintergrund" },
      },
      {
        title: "Sanitär rund um die Uhr",
        text: "Saubere Toiletten und Waschräume, rund um die Uhr von einem Reinigungsteam betreut — kein Vergleich zum Festival-Klo.",
        image: { src: `${IMG}/accommodation-83a35daec5.webp`, alt: "Gepflegte Sanitäranlage im GPtents-Camp mit Hinweis Clean and Tidy" },
      },
      {
        title: "Warmwasser-Duschen",
        text: "Eigene Duschkabinen mit garantiert warmem Wasser und Spiegel — morgens frisch zum Rennen, abends entspannt zurück ans Zelt.",
        image: { src: `${IMG}/accommodation-4bcd9f90d0.webp`, alt: "GPtents-Duschkabine mit Warmwasser, Spiegel und Handbrause" },
      },
      {
        title: "Grill & Street-Food am Abend",
        text: "Jeden Abend brutzelt der Grill mit Street-Food und Burgern direkt am Camp — das ganze Rennwochenende lang.",
        image: { src: `${IMG}/accommodation-782bfff515.webp`, alt: "Offener Grill mit Burgern am Abend im GPtents-Camp" },
      },
      {
        title: "Bar & Gemeinschaftsbereich",
        text: "Kühles Getränk, neue Leute, gemeinsame Vorfreude aufs Rennen — die Bar und der Loungebereich sind der Treffpunkt am Camp.",
        image: { src: `${IMG}/accommodation-7368b07912.webp`, alt: "Gäste an der Bar im GPtents-Camp mit Getränken" },
      },
      {
        title: "Ruhezone für erholsame Nächte",
        text: "Ein eigener, partyfreier Bereich ohne große Gruppen sorgt dafür, dass du nachts zur Ruhe kommst und ausgeschlafen am Ring stehst.",
        image: { src: `${IMG}/accommodation-e392a4f541.webp`, alt: "GPtents-Gäste entspannen in Campingstühlen vor den Hotelzelten in ruhiger Atmosphäre" },
      },
    ],
  },

  mobilheime: {
    heading: "Zwei Wege, am Ring zu übernachten",
    intro: "Ob fertig aufgebautes Hotelzelt oder eigener Stellplatz — beides liegt zu Fuß an der Strecke.",
    items: [
      {
        name: "Luxus-Hotelzelt",
        kind: "Hotelzelt für 2",
        text: "Abschließbares Zweiraum-Zelt mit zwei echten Betten, Bettwäsche und Handtüchern — Frühstücksbuffet inklusive.",
        image: { src: `${IMG}/accommodation-0be2f8a618.webp`, alt: "Innenraum eines GPtents-Hotelzelts mit zwei Einzelbetten und weißen Kissen" },
        priceFrom: 1190,
        features: ["2 echte Betten", "Hotelbettwäsche & Handtücher", "Frühstücksbuffet inklusive", "Beleuchtung & Strom optional"],
      },
      {
        name: "Premium-Stellplatz",
        kind: "Camping",
        text: "Dein Stellplatz für Zelt, Wohnwagen oder Camper (21–50 m²) — Auto direkt daneben, Strom optional, fürs ganze Rennwochenende.",
        image: { src: `${IMG}/accommodation-4a6ae34f61.webp`, alt: "Wohnmobil mit Vorzelt auf einem GPtents-Stellplatz, Gäste entspannen mit Bergblick" },
        priceFrom: 300,
        features: ["21–50 m² Stellfläche", "Auto/Motorrad am Platz", "Strom optional", "bis zu 5 Nächte"],
      },
    ],
  },

  anreise: {
    heading: "Anreise zum Red Bull Ring",
    modes: [
      { title: "Mit dem Auto", text: "Über die A9 Pyhrnautobahn bis zur Abfahrt Knittelfeld/Spielberg, dann der Beschilderung zum Red Bull Ring folgen — Parken ist am Camp inklusive." },
      { title: "Mit der Bahn", text: "Nächster Bahnhof ist Knittelfeld, nur wenige Kilometer entfernt; von dort mit Taxi oder Transfer weiter zum Camping am Ring." },
      { title: "Mit dem Flugzeug", text: "Der Flughafen Graz liegt rund eine Stunde entfernt, Salzburg und Wien jeweils etwa zwei Stunden — ein Mietwagen ab Flughafen empfiehlt sich." },
    ],
  },

  galerie: {
    heading: "Dein Rennwochenende bei GPtents",
    headingEmphasis: "Rennwochenende",
    intro: "Camp-Atmosphäre, Verpflegung und der Blick auf die Strecke — ein paar Eindrücke vom GPtents-Wochenende in Spielberg.",
    tag: "F1 & MotoGP · Spielberg",
    moreCount: 12,
    images: [
      { src: `${IMG}/accommodation-5f908e15ba.webp`, alt: "Frühstücksbuffet im GPtents-Camp am Red Bull Ring" },
      { src: `${IMG}/accommodation-a2eafc4e80.webp`, alt: "Frisch zubereitete Burger vom Street-Food-Stand bei GPtents" },
      { src: `${IMG}/accommodation-588e9be57c.webp`, alt: "Motorräder bei der Ankunft am GPtents-Eingangsbogen" },
      { src: `${IMG}/hero-b6cde01458.webp`, alt: "Luftaufnahme des Camps mit Blick zum Red Bull Ring und ins Murtal" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz fürs Rennwochenende",
    headingEmphasis: "fürs Rennwochenende",
    intro: "Wähle Unterkunft, Zeitraum und Personen — das GPtents-Team meldet sich persönlich mit deiner Verfügbarkeit.",
    pricesArePlaceholder: false,
    priceNote:
      "Stellplatz-Preise gelten pro Rennwochenende (bis zu 5 Nächte) zzgl. € 100 pro Erwachsenem; Hotelzelt für 2 inkl. Frühstück. Stand F1 Österreich 2026 — bitte final bestätigen.",
    highlight: { title: "Zu Fuß zur Strecke", text: "Camping BLACK liegt rund 15 Gehminuten vom Red Bull Ring — kein Shuttle, kein Stau." },
    categories: [
      { id: "stellplatz", label: "Premium-Stellplatz" },
      { id: "hotelzelt", label: "Luxus-Hotelzelt" },
    ],
  },

  kontakt: {
    coords: { lat: 47.219145, lng: 14.778282 },
    tel: "+43 677 61932522",
    telHref: "tel:+4367761932522",
    mail: "info@gptents.com",
    facebook: "https://www.facebook.com/GPtents/",
    adresse: "Birkachweg 11 · 8724 Spielberg · Steiermark",
  },

  languages: ["DE", "EN", "NL", "IT", "CZ", "PL"],

  nav: [
    { label: "Camping", href: "#camping", children: [
      { label: "Ausstattung", href: "#camping" },
      { label: "Hotelzelte", href: "#mobilheime" },
    ]},
    { label: "Hotelzelte", href: "#mobilheime" },
    { label: "Galerie", href: "#galerie" },
    { label: "Preise & Anreise", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default gptents;
