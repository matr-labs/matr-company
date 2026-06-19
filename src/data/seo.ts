import { site } from "@content/site";

export const seoDefaults = {
  title: `${site.name} — ${site.tagline}`,
  titleSeparator: "·",
  description: site.tagline,
  siteUrl: site.url,
  image: "/og-default.png",
  locale: "en_US",
  twitter: "@acme",
} as const;
