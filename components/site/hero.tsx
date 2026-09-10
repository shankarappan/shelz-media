/* eslint-disable nextjs/no-img-element */
import Link from '@/components/site/link';
import { assetPath } from '@/lib/site-path';
import {
  ArrowUpRight,
  ArrowDownRight,
  MessageCircle,
} from 'lucide-react';
import { whatsappUrl } from '@/lib/site-config';
export function Hero() {
  return (
    <section className="creative-hero" id="home">
      <div className="hero-intro">
        <p className="studio-label">
          <span /> EVENTS. CONCERTS. COMPLETE PRODUCTION.
        </p>
        <h1>
          Make it
          <br />a{' '}
          <span className="moment-word">
            moment
            <svg viewBox="0 0 520 24" aria-hidden="true">
              <path
                d="M5 15 Q260 -7 513 15"
                fill="none"
                stroke="currentColor"
                strokeWidth="7"
              />
            </svg>
          </span>
          <span className="hero-period">.</span>
        </h1>
        <p className="new-hero-copy">
          Big stages. Unforgettable celebrations.
          <br />
          From lighting and LED screens to planning, photography and film — we bring your event to life.
        </p>
        <div className="hero-buttons">
          <Link className="button hero-primary" href="#contact">
            Let’s make something amazing <ArrowUpRight size={21} />
          </Link>
          <Link
            className="hero-chat"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={23} />
          </Link>
        </div>
        <div className="hero-bottom-note">
          <span className="little-arrow">
            <ArrowDownRight size={24} />
          </span>
          <p>
            Your events, production &<br />
            <strong>all-things-event people.</strong>
          </p>
        </div>
      </div>
      <div className="hero-playground">
        <img
          className="hero-art"
          src={assetPath('/images/creative-stage.png')}
          alt="Illustrative 3D concert stage with LED screens, colourful lighting, performers and a crowd"
          width="1254"
          height="1254"
          fetchPriority="high"
        />
        <div className="studio-sticker">
          <span>GOOD TIMES.</span>
          <strong>
            GREAT
            <br />
            EVENTS.
          </strong>
          <ArrowUpRight size={26} />
        </div>
        <span className="visual-credit">
          ILLUSTRATIVE EVENT PRODUCTION
        </span>
      </div>
      <div className="hero-edition">
        <span>SHELZ MEDIA — CREATIVE EVENT STUDIO</span>
        <span>
          SCROLL FOR THE GOOD STUFF <ArrowDownRight size={16} />
        </span>
      </div>
    </section>
  );
}
