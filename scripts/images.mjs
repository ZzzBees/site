// Shrinks the originals in photos/ into web sizes in site/images/.
//
//   npm install   (once)
//   npm run images
//
// Every photo becomes AVIF, WebP, and JPEG at each width in WIDTHS.
// The logo PNG becomes WebP and PNG at the widths in LOGO_WIDTHS.
// Outputs are committed; nothing runs at deploy time.

import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC = new URL("../photos/", import.meta.url).pathname;
const OUT = new URL("../site/images/", import.meta.url).pathname;
const WIDTHS = [480, 800, 1000];
const LOGO_WIDTHS = [264, 396];

await mkdir(OUT, { recursive: true });

for (const file of await readdir(SRC)) {
  const ext = path.extname(file).toLowerCase();
  const name = path.basename(file, ext);
  const src = path.join(SRC, file);

  if (ext === ".jpg" || ext === ".jpeg") {
    for (const w of WIDTHS) {
      const base = sharp(src).rotate().resize({ width: w, withoutEnlargement: true });
      await base.clone().avif({ quality: 40, chromaSubsampling: "4:2:0", effort: 6 }).toFile(path.join(OUT, `${name}-${w}.avif`));
      await base.clone().webp({ quality: 70 }).toFile(path.join(OUT, `${name}-${w}.webp`));
      await base.clone().jpeg({ quality: 75, mozjpeg: true }).toFile(path.join(OUT, `${name}-${w}.jpg`));
      console.log(`${name} ${w}px`);
    }
  } else if (ext === ".png") {
    for (const w of LOGO_WIDTHS) {
      const base = sharp(src).resize({ width: w, withoutEnlargement: true });
      await base.clone().webp({ quality: 85 }).toFile(path.join(OUT, `${name}-${w}.webp`));
      await base.clone().png({ compressionLevel: 9, palette: true }).toFile(path.join(OUT, `${name}-${w}.png`));
      console.log(`${name} ${w}px`);
    }
  }
}
