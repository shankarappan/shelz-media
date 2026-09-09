import Link from '@/components/site/link';
import { ArrowUpRight } from 'lucide-react';
import { business } from '@/lib/site-config';

export function SocialLinks() {
  return (
    <div className="social-links" aria-label="Shelz Media social profiles">
      {Object.entries(business.social)
        .filter(([, url]) => url)
        .map(([name, url]) => (
          <Link
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Shelz Media on ${name} (opens in a new tab)`}
          >
            {name} <ArrowUpRight size={16} />
          </Link>
        ))}
    </div>
  );
}
