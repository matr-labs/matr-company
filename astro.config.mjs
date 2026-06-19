import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
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
  adapter: node({ mode: "standalone" }),

  vite: {
    plugins: [lqip(config.image.placeholder)],
  },
});
