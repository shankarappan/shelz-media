import { business } from '@/lib/site-config';
export default function sitemap() {
  return [
    { url: business.origin, lastModified: new Date(), priority: 1 },
    { url: business.origin + '/work', lastModified: new Date(), priority: 0.8 },
  ];
}
