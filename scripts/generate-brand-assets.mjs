import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const root = join(scriptDir, "..");
const publicBrandDir = join(root, "public", "brand");
const publicDir = join(root, "public");
const appDir = join(root, "src", "app");

mkdirSync(publicBrandDir, { recursive: true });
mkdirSync(appDir, { recursive: true });

const markSvg = String.raw`<svg width="1024" height="1024" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1024" height="1024" rx="248" fill="#173228"/>
  <rect x="88" y="88" width="848" height="848" rx="196" stroke="#F3ECDE" stroke-opacity="0.24" stroke-width="4"/>
  <path d="M250 308H774" stroke="#F3ECDE" stroke-opacity="0.18" stroke-width="4"/>
  <path d="M512 214V810" stroke="#F3ECDE" stroke-opacity="0.18" stroke-width="4"/>
  <circle cx="512" cy="512" r="278" stroke="#F3ECDE" stroke-opacity="0.28" stroke-width="4"/>
  <circle cx="512" cy="512" r="198" stroke="#F3ECDE" stroke-opacity="0.42" stroke-width="4"/>
  <circle cx="512" cy="512" r="126" stroke="#F3ECDE" stroke-opacity="0.58" stroke-width="4"/>
  <circle cx="512" cy="512" r="56" stroke="#F3ECDE" stroke-width="5"/>
  <path d="M338 635L676 392" stroke="#B85D2B" stroke-width="11" stroke-linecap="round"/>
  <circle cx="676" cy="392" r="21" fill="#B85D2B" stroke="#F3ECDE" stroke-width="12"/>
  <rect x="292" y="602" width="34" height="34" rx="9" fill="#F3ECDE"/>
  <rect x="718" y="590" width="34" height="34" rx="9" transform="rotate(45 718 590)" fill="#F3ECDE"/>
  <path d="M252 778H772" stroke="#F3ECDE" stroke-opacity="0.24" stroke-width="4"/>
  <text x="252" y="744" fill="#F3ECDE" fill-opacity="0.88" font-size="42" letter-spacing="0.34em" font-family="'IBM Plex Mono', 'SFMono-Regular', monospace">MY SBTI</text>
  <text x="252" y="812" fill="#F3ECDE" fill-opacity="0.62" font-size="28" letter-spacing="0.24em" font-family="'IBM Plex Mono', 'SFMono-Regular', monospace">SCIENCE-BASED TARGETS, DECODED</text>
</svg>`;

const faviconSvg = String.raw`<svg width="512" height="512" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1024" height="1024" rx="248" fill="#173228"/>
  <path d="M260 512H764" stroke="#F3ECDE" stroke-opacity="0.18" stroke-width="4"/>
  <path d="M512 260V764" stroke="#F3ECDE" stroke-opacity="0.18" stroke-width="4"/>
  <circle cx="512" cy="512" r="260" stroke="#F3ECDE" stroke-opacity="0.3" stroke-width="4"/>
  <circle cx="512" cy="512" r="182" stroke="#F3ECDE" stroke-opacity="0.46" stroke-width="4"/>
  <circle cx="512" cy="512" r="110" stroke="#F3ECDE" stroke-opacity="0.62" stroke-width="4"/>
  <circle cx="512" cy="512" r="46" stroke="#F3ECDE" stroke-width="6"/>
  <path d="M340 628L676 386" stroke="#B85D2B" stroke-width="14" stroke-linecap="round"/>
  <circle cx="676" cy="386" r="24" fill="#B85D2B" stroke="#F3ECDE" stroke-width="14"/>
  <rect x="304" y="602" width="38" height="38" rx="10" fill="#F3ECDE"/>
  <rect x="720" y="594" width="38" height="38" rx="10" transform="rotate(45 720 594)" fill="#F3ECDE"/>
</svg>`;

const markPath = join(publicBrandDir, "my-sbti-mark.svg");
const faviconSvgPath = join(publicBrandDir, "favicon.svg");
const iconSvgPath = join(appDir, "icon.svg");
const markPngPath = join(publicBrandDir, "my-sbti-mark-1024.png");
const favicon512Path = join(publicBrandDir, "favicon-512.png");
const favicon64Path = join(publicBrandDir, "favicon-64.png");
const faviconIcoPath = join(publicDir, "favicon.ico");
const appFaviconPath = join(appDir, "favicon.ico");

writeFileSync(markPath, markSvg);
writeFileSync(faviconSvgPath, faviconSvg);
writeFileSync(iconSvgPath, faviconSvg);

execFileSync("rsvg-convert", ["-w", "1024", "-h", "1024", markPath, "-o", markPngPath]);
execFileSync("rsvg-convert", ["-w", "512", "-h", "512", faviconSvgPath, "-o", favicon512Path]);
execFileSync("rsvg-convert", ["-w", "64", "-h", "64", faviconSvgPath, "-o", favicon64Path]);
execFileSync("magick", [
  favicon512Path,
  "-define",
  "icon:auto-resize=64,32,16",
  faviconIcoPath,
]);
execFileSync("magick", [
  favicon512Path,
  "-define",
  "icon:auto-resize=64,32,16",
  appFaviconPath,
]);

console.log("Brand assets generated.");
