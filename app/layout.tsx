import type { Metadata } from 'next';
import './globals.css';
import { shareImage } from '@/lib/share-image';
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
    siteName: 'Shelz Media',
    locale: 'en_NZ',
    images: [shareImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shelz Media | Event Production',
    images: [shareImage],
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
