export const site = {
  name: "matr labs",
  tagline: "Lorem ipsum dolor sit amet consectetur.",
  url: "https://example.com",

  email: "hello@matr.art",
  phone: "+1 (555) 010-0100",

  address: {
    line1: "100 Market Street",
    city: "Brooklyn",
    region: "NY",
    postalCode: "00000",
    country: "USA",
  },

  social: {
    twitter: "https://twitter.com/",
    instagram: "https://github.com/",
    linkedin: "https://www.linkedin.com/company/",
  },
} as const;

export type Site = typeof site;
