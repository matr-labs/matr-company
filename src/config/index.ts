export const config = {
  motion: {
    smoothScroll: true,
  },
  image: {
    progressiveMinWidth: 1000,
    responsiveWidths: [480, 800, 1200, 1600, 2000],
    defaultSizes: "100vw",
    defaultFormat: "webp",
    defaultLoading: "lazy",
    placeholder: {
      width: 24,
      quality: 20,
      blur: 4,
    },
    transition: {
      durationMs: 700,
      easing: "ease-out",
    },
    visual: {
      blurPx: 20,
      scale: 1.1,
    },
  },
} as const;

export type Config = typeof config;
