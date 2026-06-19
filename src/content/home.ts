export const home = {
  hero: {
    // Minimalist basement-style hero: brand wordmark carries it. No eyebrow, no headline.
    tagline:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    scrollCue: "Scroll to explore",
    primaryCta: { label: "Start a project", href: "/contact" },
    secondaryCta: { label: "See our work", href: "#work" },
  },

  manifesto: {
    label: "About",
    title: "Lorem ipsum dolor sit amet consectetur adipiscing.",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },

  work: {
    label: "Selected Work",
    title: "Lorem ipsum dolor sit amet.",
    items: [
      { title: "Lorem Ipsum", category: "Lorem / Ipsum", year: "2026" },
      { title: "Dolor Sit", category: "Dolor / Amet", year: "2026" },
      { title: "Consectetur", category: "Adipiscing / Elit", year: "2025" },
      { title: "Tempor Labore", category: "Eiusmod / Incididunt", year: "2025" },
    ],
  },

  services: {
    label: "What we do",
    title: "Lorem ipsum dolor sit amet consectetur.",
    items: [
      {
        no: "01",
        title: "Lorem ipsum",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      },
      {
        no: "02",
        title: "Dolor sit amet",
        description:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        no: "03",
        title: "Consectetur elit",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        no: "04",
        title: "Adipiscing nunc",
        description:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.",
      },
    ],
  },

  stats: [
    { label: "Projects shipped", value: "120+" },
    { label: "Years in", value: "08" },
    { label: "Team", value: "24" },
    { label: "Countries", value: "11" },
  ],

  cta: {
    label: "Next",
    title: "Let's build lorem ipsum together.",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    action: { label: "Start a project", href: "/contact" },
  },
} as const;

export type Home = typeof home;
