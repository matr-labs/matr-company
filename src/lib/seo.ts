import { site } from "@content/site";
import { seoDefaults } from "@data/seo";

export interface SeoInput {
  title?: string;
  titleAbsolute?: boolean;
  description?: string;
  image?: string;
  path?: string;
  type?: "website" | "article";
  noindex?: boolean;
}

export interface ResolvedSeo {
  title: string;
  description: string;
  canonical: string;
  image: string;
  type: "website" | "article";
  noindex: boolean;
  siteName: string;
  locale: string;
  twitter?: string;
}

function absolute(pathOrUrl: string, base: string | URL | undefined): string {
  if (/^https?:\/\//.test(pathOrUrl)) return pathOrUrl;
  if (!base) return pathOrUrl;
  return new URL(pathOrUrl, base).toString();
}

export function resolveSeo(input: SeoInput = {}, origin?: string | URL): ResolvedSeo {
  const base = origin ?? seoDefaults.siteUrl;

  const title =
    input.titleAbsolute || !input.title
      ? input.title ?? seoDefaults.title
      : `${input.title} ${seoDefaults.titleSeparator} ${site.name}`;

  return {
    title,
    description: input.description ?? seoDefaults.description,
    canonical: absolute(input.path ?? "/", base),
    image: absolute(input.image ?? seoDefaults.image, base),
    type: input.type ?? "website",
    noindex: input.noindex ?? false,
    siteName: site.name,
    locale: seoDefaults.locale,
    twitter: seoDefaults.twitter,
  };
}
