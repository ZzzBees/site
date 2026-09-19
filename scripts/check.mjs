// Checks that the site still meets its performance budget.
//
//   npm test
//
// Serves site/ on a local port, runs Lighthouse (mobile, performance only),
// and fails if any of these slip:
//   - Lighthouse performance score below MIN_SCORE
//   - total transfer on first view above MAX_KB
//   - any JavaScript loaded, or any <script> tag in index.html
//   - cumulative layout shift above MAX_CLS
//   - a file referenced from index.html that doesn't exist in site/
//
// Needs Chrome. Set CHROME_PATH if it isn't found automatically.

import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { existsSync, readdirSync } from "node:fs";
import path from "node:path";
import os from "node:os";
import lighthouse from "lighthouse";
import * as chromeLauncher from "chrome-launcher";

const SITE = new URL("../site/", import.meta.url).pathname;
const MIN_SCORE = 99;
const MAX_KB = 300;
const MAX_CLS = 0.01;

const TYPES = {
  ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript",
  ".json": "application/json", ".webmanifest": "application/manifest+json",
  ".avif": "image/avif", ".webp": "image/webp", ".jpg": "image/jpeg", ".png": "image/png",
  ".ico": "image/x-icon", ".svg": "image/svg+xml",
};

const failures = [];
const fail = (msg) => failures.push(msg);

// 1. Static checks on index.html: no scripts, every local reference resolves.
const html = await readFile(path.join(SITE, "index.html"), "utf8");
if (/<script[\s>]/i.test(html)) fail("index.html contains a <script> tag");

const refs = new Set();
for (const m of html.matchAll(/\b(?:src|href)="([^"#?]+)/g)) refs.add(m[1]);
for (const m of html.matchAll(/\b(?:srcset|imagesrcset)="([^"]+)"/g)) {
  for (const part of m[1].split(",")) refs.add(part.trim().split(/\s+/)[0]);
}
for (const ref of refs) {
  if (/^(https?:|mailto:|tel:)/.test(ref)) continue;
  if (!existsSync(path.join(SITE, ref))) fail(`index.html references missing file: ${ref}`);
}

// 2. Serve site/ locally.
const server = createServer(async (req, res) => {
  let p = decodeURIComponent(new URL(req.url, "http://x").pathname);
  if (p.endsWith("/")) p += "index.html";
  const file = path.join(SITE, p);
  try {
    const body = await readFile(file);
    res.writeHead(200, { "content-type": TYPES[path.extname(file)] || "application/octet-stream" });
    res.end(body);
  } catch {
    res.writeHead(404); res.end("not found");
  }
});
await new Promise((r) => server.listen(0, "127.0.0.1", r));
const url = `http://127.0.0.1:${server.address().port}/`;

// 3. Find Chrome.
function findChrome() {
  if (process.env.CHROME_PATH) return process.env.CHROME_PATH;
  try { const found = chromeLauncher.Launcher.getInstallations(); if (found.length) return found[0]; } catch {}
  const cache = path.join(os.homedir(), ".cache", "puppeteer", "chrome");
  if (existsSync(cache)) {
    for (const v of readdirSyncSafe(cache)) {
      const mac = path.join(cache, v, "chrome-mac-arm64", "Google Chrome for Testing.app", "Contents", "MacOS", "Google Chrome for Testing");
      const linux = path.join(cache, v, "chrome-linux64", "chrome");
      if (existsSync(mac)) return mac;
      if (existsSync(linux)) return linux;
    }
  }
  return null;
}
function readdirSyncSafe(dir) { try { return readdirSync(dir); } catch { return []; } }

const chromePath = findChrome();
if (!chromePath) {
  server.close();
  console.error("Chrome not found. Install Google Chrome or set CHROME_PATH to a Chrome binary.");
  process.exit(2);
}

// 4. Run Lighthouse, mobile, performance only.
const chrome = await chromeLauncher.launch({ chromePath, chromeFlags: ["--headless=new", "--no-sandbox"] });
let lhr;
try {
  const result = await lighthouse(url, {
    port: chrome.port, logLevel: "silent", output: "json",
    onlyCategories: ["performance"], formFactor: "mobile",
    screenEmulation: { mobile: true, width: 412, height: 823, deviceScaleFactor: 1.75, disabled: false },
  });
  lhr = result.lhr;
} finally {
  await chrome.kill();
  server.close();
}

const score = Math.round(lhr.categories.performance.score * 100);
const requests = lhr.audits["network-requests"].details.items;
const totalKB = requests.reduce((n, r) => n + (r.transferSize || 0), 0) / 1024;
const scripts = requests.filter((r) => r.resourceType === "Script");
const cls = lhr.audits["cumulative-layout-shift"].numericValue;

console.log(`Performance score   ${score}   (min ${MIN_SCORE})`);
console.log(`Transferred         ${totalKB.toFixed(0)} KB (max ${MAX_KB})`);
console.log(`JavaScript requests ${scripts.length}   (max 0)`);
console.log(`Layout shift        ${cls.toFixed(3)} (max ${MAX_CLS})`);
console.log(`LCP                 ${lhr.audits["largest-contentful-paint"].displayValue}`);
for (const r of requests) console.log(`  ${((r.transferSize || 0) / 1024).toFixed(1).padStart(6)} KB  ${r.url.replace(url, "/")}`);

if (score < MIN_SCORE) fail(`performance score ${score} is below ${MIN_SCORE}`);
if (totalKB > MAX_KB) fail(`page transfers ${totalKB.toFixed(0)} KB, over ${MAX_KB}`);
if (scripts.length) fail(`page loads JavaScript: ${scripts.map((s) => s.url).join(", ")}`);
if (cls > MAX_CLS) fail(`layout shift ${cls} is over ${MAX_CLS}`);

if (failures.length) {
  console.error("\nFAIL");
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}
console.log("\nPASS");
