import type { Metadata } from 'next';
import './globals.css';
import { business } from '@/lib/site-config';
import { assetPath } from '@/lib/site-path';
const origin = business.origin;
export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: 'Shelz Media | Photography, Videography & Event Production',
  description:
    'Photography, videography and complete event production. Lighting, LED walls, staging, event coordination and live streaming for celebrations, concerts and corporate events.',
  alternates: { canonical: origin + '/' },
  openGraph: {
    title: 'Shelz Media — From the first cue to the final frame.',
    description: 'Photography, film and complete event production.',
    url: origin,
    type: 'website',
    images: [{ url: origin + '/images/shelz-logo.jpg' }],
  },
  twitter: {
    card: 'summary',
    title: 'Shelz Media | Event Production',
    images: [origin + '/images/shelz-logo.jpg'],
  },
  icons: { icon: assetPath('/images/shelz-logo.jpg') },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-NZ">
      <body>{children}</body>
    </html>
  );
}
