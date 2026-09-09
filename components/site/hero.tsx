/* eslint-disable nextjs/no-img-element */
import Link from 'next/link';
import {
  ArrowUpRight,
  ArrowDownRight,
  MessageCircle,
  MoveUpRight,
} from 'lucide-react';
import { whatsappUrl } from '@/lib/site-config';
export function Hero() {
  return (
    <section className="creative-hero" id="home">
      <div className="hero-intro">
        <p className="studio-label">
          <span /> PHOTO. FILM. EVENTS. A LITTLE MAGIC.
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
          Big celebrations. Beautiful details. Stories worth keeping.
          <br />
          We capture it, style it and bring it all to life.
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
            Your photography, decoration &<br />
            <strong>all-things-event people.</strong>
          </p>
        </div>
      </div>
      <div className="hero-playground">
        <img
          className="hero-art"
          src="/images/creative-camera.png"
          alt="Sculptural 3D camera with a chrome sparkle, pink loop and celebration ribbons"
          width="1254"
          height="1254"
          fetchPriority="high"
        />
        <div className="photo-postcard photo-live">
          <img
            src="/images/concert-640.jpg"
            width="640"
            height="340"
            alt="Live concert inspiration with dramatic stage lighting"
          />
          <span>
            TURN IT UP. <MoveUpRight size={15} />
          </span>
        </div>
        <div className="photo-postcard photo-love">
          <img
            src="/images/wedding-640.jpg"
            width="640"
            height="427"
            alt="Wedding inspiration: a couple dancing beneath string lights"
          />
          <span>
            FEEL EVERYTHING. <MoveUpRight size={15} />
          </span>
        </div>
        <div className="studio-sticker">
          <span>GOOD TIMES.</span>
          <strong>
            GREAT
            <br />
            STORIES.
          </strong>
          <ArrowUpRight size={26} />
        </div>
        <span className="visual-credit">
          IMAGINATION + ILLUSTRATIVE PHOTOGRAPHY
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
