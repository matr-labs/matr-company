export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export const OG_IMAGE = {
  width: 1200,
  height: 630,
} as const;

export type Theme = "light" | "dark";
