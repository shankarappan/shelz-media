/* Images are pre-compressed local assets with responsive sources; no runtime image service required. */
/* eslint-disable nextjs/no-img-element */

import Link from '@/components/site/link';
import { assetPath } from '@/lib/site-path';
import { ArrowUpRight, MessageCircle, Mail, Phone } from 'lucide-react';
import { business, whatsappUrl } from '@/lib/site-config';
export function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-wordmark" aria-hidden="true">
          SHELZ<span>®</span> MEDIA
        </div>
        <div className="footer-top">
          <Link className="brand" href="/#home">
            <img
              src={assetPath('/images/shelz-logo.jpg')}
              width="65"
              height="65"
              alt="Shelz Media logo"
            />
            <span>
              SHELZ<span className="brand-sub">MEDIA & EVENT PRODUCTION</span>
            </span>
          </Link>
          <p>
            From the first cue
            <br />
            to the final frame.
          </p>
          <div>
            <Link href={`mailto:${business.email}`}>
              <Mail size={16} />
              {business.email}
            </Link>
            <Link href={`tel:${business.phoneHref}`}>
              <Phone size={16} />
              {business.phone}
            </Link>
          </div>
          <div>
            <Link href="/#services">
              Our services <ArrowUpRight size={15} />
            </Link>
            <Link href="/work">
              Our work <ArrowUpRight size={15} />
            </Link>
            <Link href="/#contact">
              Plan your event <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
        <details id="privacy" className="privacy">
          <summary>Privacy & image credits</summary>
          <p>
            Enquiry details are used to discuss your event. Until an online
            submission service is connected, the form prepares an email on your
            device and does not send or store your information. Email and
            WhatsApp messages are handled by those providers. Contact{' '}
            {business.email} about your information. No analytics are enabled.
          </p>
          <p>
            Illustrative photography from Unsplash:{' '}
            <Link
              href="https://unsplash.com/es/fotos/wV22Llnxc78"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tony Pham
            </Link>
            ,{' '}
            <Link
              href="https://unsplash.com/de/fotos/paar-das-bei-einer-hochzeitsfeier-mit-lichterketten-tanzt-qGinhI7Qqvk"
              target="_blank"
              rel="noopener noreferrer"
            >
              wedding celebration
            </Link>
            , and{' '}
            <Link
              href="https://unsplash.com/es/fotos/una-gran-multitud-de-personas-en-un-concierto-yMdb69xGEco"
              target="_blank"
              rel="noopener noreferrer"
            >
              Yoad Shejtman
            </Link>
            . Used under the Unsplash licence. These images do not depict Shelz
            Media projects.
          </p>
        </details>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Shelz Media. All rights reserved.
          </span>
          <span>CREATIVE VISION. COMPLETE PRODUCTION.</span>
        </div>
      </footer>
      <Link
        className="floating-whatsapp"
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Shelz Media on WhatsApp"
      >
        <MessageCircle size={22} />
        <span>Let’s talk</span>
      </Link>
      <div className="mobile-cta">
        <Link href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
          <MessageCircle size={18} /> WhatsApp
        </Link>
        <Link href="/#contact">
          Request a quote <ArrowUpRight size={18} />
        </Link>
      </div>
    </>
  );
}
