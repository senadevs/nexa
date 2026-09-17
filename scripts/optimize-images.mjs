// Regenerates every optimized image served from public/images from the originals in
// assets/source (which are not deployed). Run: node scripts/optimize-images.mjs
// sharp ships with Astro's image service, so no extra dependency is needed.
import sharp from "sharp";
import { mkdirSync } from "node:fs";

const src = (name) => `assets/source/${name}.png`;
const out = (dir) => {
  mkdirSync(`public/images/${dir}`, { recursive: true });
  return (file) => `public/images/${dir}/${file}`;
};
const webp = { quality: 78 };

// Services: 3:2 at 800 / 1200.
const services = out("services");
for (const [slug, file] of [
  ["graphic", "graphic-v2"],
  ["branding", "branding-v2"],
  ["strategy", "strategy-v2"],
  ["paid-media", "paid-media-v2"],
  ["web", "web-v2"],
  ["audiovisual", "audiovisual"],
]) {
  for (const width of [800, 1200]) {
    await sharp(src(file))
      .resize({
        width,
        height: Math.round((width * 2) / 3),
        fit: "cover",
        position: "attention",
      })
      .webp(webp)
      .toFile(services(`${slug}-${width}.webp`));
  }
}

// Work cases: 4:3 at 800 / 1400.
const work = out("work");
for (const slug of ["marea", "norte", "orbita", "studio"]) {
  for (const width of [800, 1400]) {
    await sharp(src(`${slug}-case`))
      .resize({ width, height: Math.round((width * 3) / 4), fit: "cover" })
      .webp(webp)
      .toFile(work(`${slug}-${width}.webp`));
  }
}

// Hero slideshow: 16:10 at 720 / 1280 (mobile) and 4:5 portrait at 820 (desktop card).
const hero = out("hero");
const heroSources = {
  marea: "marea-case",
  paid: "paid-media-v2",
  orbita: "orbita-case",
  web: "web-v2",
};
// Hand-picked portrait crops where the automatic focus misses the subject.
const portraitCrops = {
  marea: { left: 500, top: 0, width: 869, height: 1086 },
  web: { left: 560, top: 0, width: 819, height: 1024 },
};
for (const [slug, file] of Object.entries(heroSources)) {
  for (const width of [720, 1280]) {
    await sharp(src(file))
      .resize({ width, height: Math.round((width * 10) / 16), fit: "cover" })
      .webp(webp)
      .toFile(hero(`${slug}-${width}.webp`));
  }
  const portrait = portraitCrops[slug]
    ? sharp(src(file)).extract(portraitCrops[slug]).resize(820, 1025)
    : sharp(src(file)).resize({
        width: 820,
        height: 1025,
        fit: "cover",
        position: "attention",
      });
  await portrait.webp(webp).toFile(hero(`${slug}-portrait-820.webp`));
}

// Social preview: 1200×630 JPG.
await sharp(src("marea-case"))
  .resize({ width: 1200, height: 630, fit: "cover", position: "attention" })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile("public/images/og-nexa.jpg");

console.log("Images optimized.");
