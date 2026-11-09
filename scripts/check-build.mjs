import { readFileSync, statSync, readdirSync, existsSync } from 'node:fs';
import { gzipSync } from 'node:zlib';
import { resolve } from 'node:path';

const root = resolve('dist');
if (existsSync(resolve(root, 'review-media')))
  throw new Error('Unapproved review photographs must not be published.');
const manifest = JSON.parse(readFileSync(resolve(root, '.vite/manifest.json'), 'utf8'));
const entry = Object.entries(manifest).find(([, chunk]) => chunk.isEntry)?.[0];
if (!entry) throw new Error('No application entry was built.');

const chunks = new Set();
const styles = new Set();
function visit(key) {
  if (chunks.has(key)) return;
  const chunk = manifest[key];
  if (!chunk) throw new Error(`Missing manifest entry: ${key}`);
  chunks.add(key);
  for (const css of chunk.css ?? []) styles.add(css);
  for (const imported of chunk.imports ?? []) visit(imported);
}
visit(entry);

const compressedSize = (file) => gzipSync(readFileSync(resolve(root, file))).byteLength;
const jsBytes = [...chunks].reduce((sum, key) => sum + compressedSize(manifest[key].file), 0);
const cssBytes = [...styles].reduce((sum, file) => sum + compressedSize(file), 0);
const imageDirectory = resolve(root, 'assets/images');
const imageBytes = readdirSync(imageDirectory)
  .filter((name) => /\.(?:jpe?g|webp|png|avif)$/i.test(name))
  .reduce((sum, name) => sum + statSync(resolve(imageDirectory, name)).size, 0);
const heroBytes = statSync(resolve(root, 'assets/leadership/narayana-gowdru.png')).size;
const mastheadBytes = ['karave-emblem.webp', 'kuvempu-portrait.webp'].reduce(
  (sum, name) => sum + statSync(resolve(root, 'assets/branding', name)).size,
  0,
);

const budgets = [
  ['Initial JavaScript (gzip)', jsBytes, 150 * 1024],
  ['Initial styles (gzip)', cssBytes, 20 * 1024],
  ['Default hero image', heroBytes, 300 * 1024],
  ['Masthead images combined', mastheadBytes, 96 * 1024],
  ['Supporting image assets', imageBytes, 1024 * 1024],
];
for (const [label, bytes, budget] of budgets) {
  console.log(`${label}: ${(bytes / 1024).toFixed(1)} KiB / ${budget / 1024} KiB`);
  if (bytes > budget) process.exitCode = 1;
}
