import type { NextConfig } from 'next';
const githubPages = process.env.GITHUB_PAGES === 'true';
const nextConfig: NextConfig = {
  ...(githubPages ? { output: 'export' } : {}),
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
};
export default nextConfig;
