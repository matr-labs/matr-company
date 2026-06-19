import { getImage } from "astro:assets";
import { config } from "@config";

export interface ResponsiveSources {
  src: string;
  srcSet: string;
  width: number;
  height: number;
}

export interface ResponsiveOptions {
  sizes?: string;
  widths?: number[];
  format?: "webp" | "avif";
}

const sources = import.meta.glob<ImageMetadata>(
  "/src/assets/images/**/*.{jpg,jpeg,png,webp,avif}",
  { import: "default", eager: true },
);

const placeholders = import.meta.glob<string>(
  "/src/assets/images/**/*.{jpg,jpeg,png,webp,avif}",
  { query: "?lqip", import: "default", eager: true },
);

const lqipBySrc = new Map<string, string>();
for (const path in sources) {
  const meta = sources[path];
  const placeholder = placeholders[path];
  if (meta && placeholder) lqipBySrc.set(meta.src, placeholder);
}

export function getLqip(image: ImageMetadata): string | undefined {
  return lqipBySrc.get(image.src);
}

export function shouldUseProgressive(
  image: ImageMetadata,
  threshold: number = config.image.progressiveMinWidth,
): boolean {
  return image.width >= threshold;
}

function resolveWidths(image: ImageMetadata, requested?: number[]): number[] {
  const pool = (requested ?? config.image.responsiveWidths).filter((w) => w <= image.width);
  return [...new Set([...pool, image.width])].sort((a, b) => a - b);
}

export async function getResponsive(
  image: ImageMetadata,
  options: ResponsiveOptions = {},
): Promise<ResponsiveSources> {
  const { sizes = config.image.defaultSizes, widths, format = config.image.defaultFormat } = options;

  const result = await getImage({
    src: image,
    format,
    widths: resolveWidths(image, widths),
    sizes,
  });

  return {
    src: result.src,
    srcSet: result.srcSet.attribute,
    width: image.width,
    height: image.height,
  };
}
