# Astro + Tailwind + TypeScript boilerplate

A small opinionated base for static marketing sites.

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output to dist/
npm run preview  # serve the build
npm run check    # type-check .astro + .ts
```

## How it's organized

```
src/
  assets/        images & icons (imported → optimized)
  content/       copy & business data (site, home, company)
  data/          structural data (nav, seo defaults)
  styles/        tokens.css (design system) + global.css
  lib/           logic: cn, seo, email, constants
  components/
    ui/          reusable primitives
    layout/      page frame (Header, Footer, PageShell)
    sections/    reusable marketing blocks
  layouts/       BaseLayout (<html>/<head> + SEO)
  pages/         final page assembly + api/contact endpoint
  utils/         utility functions
```

| Layer       | Job                       | May import content?   |
| ----------- | ------------------------- | --------------------- |
| `ui/`       | Reusable primitives       | ❌ No                 |
| `layout/`   | Page frame                | structural data only  |
| `sections/` | Reusable marketing blocks | via props (preferred) |
| `pages/`    | Final composition         | ✅ Yes                |

## Starting a new project

1. **Edit `src/styles/tokens.css`** colors, type scale, spacing, radius. This re-themes everything.
2. **Edit `src/content/*`** `site.ts`, `home.ts`, `company.ts`.
3. **Edit `src/data/*`** `nav.ts`, `seo.ts`.
4. Only then touch components.

## Design tokens

Every appearance value lives in [`src/styles/tokens.css`](src/styles/tokens.css) as a CSS variable and is mapped to a Tailwind utility in [`tailwind.config.mjs`](tailwind.config.mjs). So components use `bg-surface`, `text-muted`, `py-section`, `text-hero`, never raw hex or px.

A `data-theme="dark"` block is included; toggle it on `<html>` to switch themes. No component needs to know themes exist.

## Coding principles

1. No hardcoded colors in components.
2. No hardcoded text sizes unless mapped to a token.
3. No page copy inside reusable UI components.
4. Components accept props, not page content.
5. Sections may read content; UI primitives may not.
6. Prefer Astro components. Use React only for real interactivity.
7. Prefer CSS animation. JS only when state/scroll requires it.
8. Images need width, height, alt, and compressed formats. Use [`ImageBlock`](src/components/ui/ImageBlock.astro).
9. Keep contact/email logic in one server endpoint.
10. Change tokens + content before touching components.

## SEO

Pass a `seo` prop to `BaseLayout`; per-page values merge over [`src/data/seo.ts`](src/data/seo.ts) via [`resolveSeo`](src/lib/seo.ts). Title, canonical, Open Graph, and Twitter tags are emitted for you.

```astro
<BaseLayout seo={{ title: "About", description: "..." }}>
```

Drop a real share image at `public/og-default.png` (1200×630).

## Contact form

[`src/components/sections/Contact.astro`](src/components/sections/Contact.astro) posts to [`src/pages/api/contact.ts`](src/pages/api/contact.ts), which validates input (with a honeypot) and calls [`sendContactEmail`](src/lib/email.ts). It supports plain form posts (redirects to `?status=sent|error`) and JSON requests.

The project ships in **hybrid** mode with the **Node adapter**: every page is prerendered static, and only this endpoint (`export const prerender = false`) runs on-demand. `npm run build` produces a `dist/server/entry.mjs` you start with `node ./dist/server/entry.mjs`.

To deploy elsewhere, swap the adapter in [`astro.config.mjs`](astro.config.mjs):

```bash
npx astro add vercel      # or netlify / cloudflare
```

Wire your email provider inside `sendContactEmail` and set `EMAIL_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` (copy `.env.example` → `.env`).

## Progressive images (blur-up)

For large images, [`ProgressiveImage`](src/components/ui/ProgressiveImage.astro) shows a tiny blurred placeholder instantly, then fades in the full-resolution image once it loads. The placeholder is an inline base64 `data:` URI (zero extra requests), generated at build time by the sharp-based Vite plugin in [`plugins/lqip.mjs`](plugins/lqip.mjs).

```astro
---
import ProgressiveImage from "@ui/ProgressiveImage.astro";
import hero from "@assets/images/hero.jpg";
---
<ProgressiveImage src={hero} alt="..." sizes="100vw" />
```

Blur-up only kicks in for images at or above `progressiveMinWidth`; smaller ones render as a plain optimized `<img>`. Every knob (threshold, placeholder size/quality/blur, responsive widths, fade duration, blur radius) lives in [`src/config/index.ts`](src/config/index.ts). Tune a client site there without touching components. For simple or remote/`/public` images, use [`ImageBlock`](src/components/ui/ImageBlock.astro) instead.

## Adding React (only when needed)

```bash
npx astro add react
```

Then use `client:*` directives on interactive islands. Keep everything else as `.astro` (zero JS shipped).

## Path aliases

`@/`, `@ui/`, `@layout/`, `@sections/`, `@layouts/`, `@lib/`, `@utils/`, `@config`, `@content/`, `@data/`, `@styles/`, `@assets/`: defined in [`tsconfig.json`](tsconfig.json).
