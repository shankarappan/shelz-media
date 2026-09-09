import { spawnSync } from 'node:child_process';
import {
  cp,
  mkdir,
  readFile,
  rename,
  writeFile,
  access,
} from 'node:fs/promises';
import path from 'node:path';

const basePath = '/shelz-media';
const origin = 'https://shankarappan.github.io' + basePath;
const build = spawnSync(
  process.execPath,
  ['node_modules/vinext/dist/cli.js', 'build'],
  {
    stdio: 'inherit',
    env: {
      ...process.env,
      GITHUB_PAGES: 'true',
      NEXT_PUBLIC_STATIC_HOST: 'true',
      NEXT_PUBLIC_BASE_PATH: basePath,
      NEXT_PUBLIC_SITE_URL: origin,
    },
  },
);
if (build.status !== 0) process.exit(build.status || 1);
const output = 'dist/client';
// Vinext puts assetPrefix files in a nested directory. Pages mounts this entire
// artifact at basePath, so lift those files to the artifact root once.
await rename(path.join(output, basePath, '_next'), path.join(output, '_next'));
await mkdir(path.join(output, 'work'), { recursive: true });
await cp(path.join(output, 'work.html'), path.join(output, 'work/index.html'));
await cp(path.join(output, 'work.rsc'), path.join(output, 'work/index.rsc'));
await writeFile(path.join(output, '.nojekyll'), '');
await writeFile(
  path.join(output, 'robots.txt'),
  `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`,
);
await writeFile(
  path.join(output, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${origin}/</loc></url><url><loc>${origin}/work/</loc></url></urlset>\n`,
);
for (const route of ['index.html', 'work/index.html']) {
  const html = await readFile(path.join(output, route), 'utf8');
  if (!html.includes('Shelz') || !html.includes(origin))
    throw new Error(`Missing page content or metadata: ${route}`);
  const localAssets = [
    ...html.matchAll(
      /(?:src|href)="(\/shelz-media\/(?:_next|images)\/[^"?]+)"/g,
    ),
  ];
  for (const [, url] of localAssets)
    await access(path.join(output, url.slice(basePath.length + 1)));
}
console.log(
  'GitHub Pages artifact ready: dist/client (home, portfolio, images and metadata checked).',
);
