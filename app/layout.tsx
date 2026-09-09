import type { Metadata } from 'next';
import './globals.css';
const origin = 'https://shelz-media.shankarappan.chatgpt.site';
export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: 'Shelz Media | Photography, Videography & Event Production',
  description:
    'Photography, videography and complete event production. Lighting, LED walls, staging, event coordination and live streaming for celebrations, concerts and corporate events.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Shelz Media — From the first cue to the final frame.',
    description: 'Photography, film and complete event production.',
    url: origin,
    type: 'website',
    images: [{ url: '/images/shelz-logo.jpg' }],
  },
  twitter: {
    card: 'summary',
    title: 'Shelz Media | Event Production',
    images: ['/images/shelz-logo.jpg'],
  },
  icons: { icon: '/images/shelz-logo.jpg' },
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
