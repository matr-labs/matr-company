export const company = {
  about: {
    title: "How can technology serve art?",
    lead: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    body: [
      "We are a small team of artists and engineers that have been working to answer a simple question. We have worked with some of the brightest minds at MIT, along with experts in fabrication, robotics, printing, AI, and many other fields to develop interesting tools for artists and creatives to express themselves.",
      "We aim to make technology more accessible to artists and creatives, and to help them bring their ideas to life. ",
    ],
    heroImage: "/preloader/hero-img-3.jpg",
    heroImageAlt: "matr labs",
    image: "/preloader/hero-img-3.jpg",
    imageAlt: "Lorem ipsum dolor sit amet",
    cta: { label: "Get in touch", href: "/contact" },
  },

  values: [
    {
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
    },
    {
      title: "Dolor sit amet",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      title: "Consectetur elit",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    },
  ],

  stats: [
    { label: "Lorem ipsum", value: "120+" },
    { label: "Dolor sit", value: "99" },
    { label: "Amet elit", value: "8" },
  ],
} as const;

export type Company = typeof company;
