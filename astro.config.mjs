import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { config } from "./src/config/index.ts";
import { lqip } from "./plugins/lqip.mjs";

export default defineConfig({
  site: "https://example.com",

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],

  output: "hybrid",
  adapter: vercel(),

  vite: {
    plugins: [lqip(config.image.placeholder)],
  },
});
