import type { Metadata } from 'next';
import { shareImage } from '@/lib/share-image';
import { business } from '@/lib/site-config';
import { Header } from '@/components/site/header';
import { Footer } from '@/components/site/footer';
import { Portfolio } from '@/components/site/portfolio';
export const metadata: Metadata = {
  title: 'Our Work & Wedding Photography | Shelz Media',
  description:
    'Explore wedding photography by Shelz Media: couple portraits, wedding parties and the details that make a celebration personal.',
  alternates: { canonical: business.origin + '/work/' },
  openGraph: {
    title: 'Our Work & Wedding Photography | Shelz Media',
    description: 'Real wedding moments photographed by Shelz Media.',
    url: business.origin + '/work/',
    type: 'website',
    siteName: 'Shelz Media',
    images: [shareImage],
  },
};
export const dynamic = 'force-static';
export default function Work() {
  return (
    <>
      <Header />
      <main id="main">
        <div className="work-heading">
          <p className="eyebrow">SHELZ MEDIA / OUR WORK</p>
          <h1>
            The feeling.
            <br />
            <em>The frame. The experience.</em>
          </h1>
          <p>
            Explore event inspiration while we prepare our approved project
            collection.
          </p>
        </div>
        <Portfolio full />
      </main>
      <Footer />
    </>
  );
}
