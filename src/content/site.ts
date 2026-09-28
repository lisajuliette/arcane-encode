/**
 * All site copy lives here. Components receive content via props; no copy
 * is hard-coded inside components. Values in [square brackets] are
 * placeholders the team still has to fill in: render them as-is for now.
 */

export const site = {
  name: "Arcane Encode",
  wordmark: "arcane encode",
  mark: "Æ",
  description:
    "Arcane Encode is an independent software studio of three engineers and co-owners, building our own products. First up: Stepcraft.",
  url: "[https://yourdomain]",
  email: "[hello@yourdomain]",
  kvk: "KVK [number]",
  country: "The Netherlands",
  countryShort: "NL",
  year: 2026,

  status: { label: "Sys online / NL" },

  nav: [
    { label: "Products", href: "#products" },
    { label: "Studio", href: "#studio" },
    { label: "Protocol", href: "#protocol" },
    { label: "Contact", href: "#contact" },
  ],
  headerCta: { label: "Transmit", href: "#contact" },

  hero: {
    eyebrow: "[ 000 ] Independent software studio",
    // The accent word is rendered separately so it can take the accent colour.
    headline: { before: "We build our ", accent: "own", after: " worlds, one commit at a time." },
    intro:
      "Arcane Encode is three software engineers and three co-owners. No client work. We design, build and ship our own products, starting with Stepcraft.",
    primaryCta: { label: "See Stepcraft", href: "#products" },
    secondaryCta: { label: "About the studio", href: "#studio" },
    signal: {
      titleLeft: "Signal",
      titleRight: "encode.sys",
      footerLeft: "Operators 03 / 03",
      footerRight: "Online",
    },
  },

  meta: [
    { label: "Studio", value: "Independent, self-funded", valueShort: "Independent" },
    { label: "Team", value: "3 engineers, 3 co-owners" },
    { label: "In production", value: "Stepcraft, mobile game", valueShort: "Stepcraft" },
    { label: "Base", value: "The Netherlands" },
  ],

  ticker: [
    { text: "Design" },
    { text: "Build" },
    { text: "Ship" },
    { text: "Stepcraft: your steps power the game", highlight: true },
    { text: "Own everything" },
  ],

  products: {
    index: "[ 001 ] Products",
    title: "What we are encoding",
    count: "01 in production",
    items: [
      {
        slug: "stepcraft",
        tag: "Product 001",
        name: "Stepcraft",
        description:
          "A mobile RPG powered by the steps you take in real life. Walk to earn XP, level up your character and push further every day.",
        figure: {
          label: "Fig. 01 / Stepcraft",
          dims: "390 × 844",
          caption: "Stepcraft, in-game",
          captionRight: "iOS / Android",
          // Replace with real screenshot: /public/images/stepcraft/screen-01.png (390×844 or 2x)
          image: null as string | null,
          imageAlt: "Stepcraft gameplay screen",
          placeholder: "[ Stepcraft screenshot ]",
          progressLabel: "Steps / XP",
          progress: 0.62,
        },
        specs: [
          { label: "Type", value: "Mobile game", hideOnMobile: true },
          { label: "Genre", value: "Fitness RPG" },
          { label: "Platforms", value: "iOS, Android" },
          { label: "Built with", value: "React Native", hideOnMobile: true },
          { label: "Status", value: "[ Alpha ]" },
        ],
        links: [
          { label: "Get Stepcraft", labelShort: "Get Stepcraft", href: "#" },
          { label: "Join the Discord", labelShort: "Discord", href: "#" },
        ],
      },
    ],
    emptySlot: {
      tag: "Slot 002",
      title: "Not yet encoded",
      text: "Reserved for whatever we build next.",
    },
  },

  studio: {
    index: "[ 002 ] Studio",
    statement: "Three engineers. Three owners. No clients. Only the products we believe in.",
    intro:
      "We run the whole stack ourselves, from backend to pixels to the community around each launch. Small team, short loops, full ownership.",
    introShort: "We run the whole stack ourselves, from backend to pixels to the community around each launch.",
    team: [
      {
        no: "01",
        name: "tumma1337",
        role: "Backend engineer",
        roleShort: "Backend",
        image: null as string | null,
        ascii: "tumma" as const,
      },
      {
        no: "02",
        name: "neomaxzero",
        role: "Frontend engineer",
        roleShort: "Frontend",
        image: null as string | null,
        ascii: "maxi" as const,
      },
      {
        no: "03",
        name: "lisajuliette",
        role: "Creative engineer",
        roleShort: "Creative",
        image: null as string | null,
        ascii: "lisa" as const,
      },
    ],
    memberBadge: "Co-owner",
  },

  protocol: {
    index: "[ 003 ] Protocol",
    items: [
      { no: "/01", title: "Own the code", text: "Everything we ship is ours: product, design, stack and roadmap." },
      { no: "/02", title: "Ship, then listen", text: "Early builds go to players first. The community shapes what comes next." },
      { no: "/03", title: "Play is a feature", text: "Games, progress and reward loops make useful things stick." },
    ],
  },

  contact: {
    index: "[ 004 ] Transmit",
    title: "Open a channel.",
    links: [
      { label: "Discord", href: "#", mobile: true },
      { label: "Instagram", href: "#", mobile: true },
      { label: "LinkedIn", href: "#", mobile: false },
      { label: "GitHub", href: "#", mobile: true },
    ],
  },

  footer: {
    legal: ["© 2026 Arcane Encode", "KVK [number]", "The Netherlands", "Privacy"],
    legalShort: ["© 2026", "KVK [number]", "NL"],
    privacyHref: "/privacy",
  },
} as const;

export type Site = typeof site;
