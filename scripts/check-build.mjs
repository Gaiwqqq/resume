import { readFileSync, existsSync } from 'node:fs';
import assert from 'node:assert/strict';
import { resolve } from 'node:path';

// Catch the most common Pages regression: /media/... instead of /repo/media/...
const html = readFileSync('dist/index.html', 'utf8');
const prefix = `/${(process.env.BASE_PATH || '').replace(/^\/+|\/+$/g, '')}`.replace(/\/$/, '');
const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]));
let checked = 0;
for (const [, attribute, url] of html.matchAll(/\b(href|src|poster|data-video-src|data-video-poster)="([^"]+)"/g)) {
  if (/^(https?:|mailto:|data:)/.test(url)) continue;
  if (url.startsWith('#')) {
    assert(ids.has(url.slice(1)), `Missing anchor: ${url}`);
    continue;
  }
  assert(url.startsWith(`${prefix}/`), `Wrong base path for ${attribute}: ${url}`);
  const relative = decodeURIComponent(url.slice(prefix.length + 1).split(/[?#]/)[0]);
  assert(existsSync(resolve('dist', relative || 'index.html')), `Missing asset: ${url}`);
  checked++;
}
assert(html.includes('lang="en" data-lang="en"'), 'Default document language must be English');
assert((html.match(/<video\b[^>]*\bdata-sync-video\b/g) || []).length === 4, 'Expected four synchronized LeRobot videos');
assert(existsSync('dist/cv/Weiqi_Gai_CV_EN.pdf'), 'English CV is missing');
assert(existsSync('dist/cv/Weiqi_Gai_CV_ZH.pdf'), 'Chinese CV is missing');
if (process.env.SITE_URL) {
  const canonical = new URL(`${prefix}/`, process.env.SITE_URL).href;
  assert(html.includes(`rel="canonical" href="${canonical}"`), `Wrong canonical: ${canonical}`);
}
console.log(`Validated ${checked} local references, anchors, CVs, default language and video sources (base: ${prefix || '/'}).`);
