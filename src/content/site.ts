export const site = {
  name: "Matr Labs",
  tagline: "Lorem ipsum dolor sit amet consectetur.",
  url: "https://example.com",

  email: "hello@example.com",
  phone: "+1 (555) 010-0100",

  address: {
    line1: "100 Market Street",
    city: "San Francisco",
    region: "CA",
    postalCode: "94103",
    country: "USA",
  },

  social: {
    twitter: "https://twitter.com/",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/company/",
  },
} as const;

export type Site = typeof site;
