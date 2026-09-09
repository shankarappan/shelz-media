// Set by the GitHub Pages workflow; empty for a root-domain deployment.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
export function assetPath(path: string) {
  return `${basePath}${path}`;
}
