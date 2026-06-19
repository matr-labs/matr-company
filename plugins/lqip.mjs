import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const SUFFIX = "?lqip";

function resolveFsPath(clean, importer, root) {
  if (/^[a-zA-Z]:[\\/]/.test(clean)) return clean;

  if (clean.startsWith("/") || clean.startsWith("\\")) {
    const joined = path.join(root, clean);
    if (existsSync(joined)) return joined;
    if (existsSync(clean)) return clean;
    return joined;
  }

  const base = importer ? path.dirname(importer.split("?")[0]) : root;
  return path.resolve(base, clean);
}

export function lqip({ width = 24, quality = 20, blur = 4 } = {}) {
  let root = process.cwd();

  return {
    name: "boilerplate-lqip",
    enforce: "pre",
    configResolved(config) {
      root = config.root;
    },
    resolveId(id, importer) {
      if (!id.endsWith(SUFFIX)) return null;
      const clean = id.slice(0, -SUFFIX.length);
      return resolveFsPath(clean, importer, root) + SUFFIX;
    },
    async load(id) {
      if (!id.endsWith(SUFFIX)) return null;

      const filePath = id.slice(0, -SUFFIX.length);

      const input = await readFile(filePath);
      let pipeline = sharp(input).resize({ width, withoutEnlargement: true });
      if (blur > 0) pipeline = pipeline.blur(blur);
      const buffer = await pipeline.webp({ quality }).toBuffer();

      const dataUri = `data:image/webp;base64,${buffer.toString("base64")}`;
      return `export default ${JSON.stringify(dataUri)};`;
    },
  };
}
