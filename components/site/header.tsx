/* Images are pre-compressed local assets with responsive sources; no runtime image service required. */
/* eslint-disable nextjs/no-img-element */
'use client';

import Link from '@/components/site/link';
import { assetPath } from '@/lib/site-path';
import { useState } from 'react';
import { ArrowUpRight, Menu, MessageCircle } from 'lucide-react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { whatsappUrl } from '@/lib/site-config';
const links = [
  ['Home', '/#home'],
  ['Services', '/#services'],
  ['Our work', '/work'],
  ['About', '/#about'],
  ['Event types', '/#events'],
  ['Contact', '/#contact'],
];
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Link className="skip-link" href="#main">
        Skip to content
      </Link>
      <header className="header">
        <Link className="brand" href="/#home" aria-label="Shelz Media home">
          <img
            src={assetPath('/images/shelz-logo.jpg')}
            alt=""
            width="58"
            height="58"
          />
          <span>
            SHELZ<span className="brand-sub">MEDIA & EVENT PRODUCTION</span>
          </span>
        </Link>
        <nav aria-label="Main navigation">
          {links.slice(1, 5).map(([title, url]) => (
            <Link key={title} href={url}>
              {title}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link
            className="header-wa"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={21} />
          </Link>
          <Link className="button gold" href="/#contact">
            Request a quote <ArrowUpRight size={17} />
          </Link>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger
              className="menu-button"
              aria-label="Open navigation menu"
            >
              <Menu size={23} />
            </DialogTrigger>
            <DialogContent className="mobile-dialog">
              <DialogTitle>Explore Shelz Media</DialogTitle>
              <DialogDescription>
                Photography, film & complete event production.
              </DialogDescription>
              <nav aria-label="Mobile navigation">
                {links.map(([title, url]) => (
                  <Link key={title} href={url} onClick={() => setOpen(false)}>
                    {title}
                    <ArrowUpRight size={20} />
                  </Link>
                ))}
              </nav>
              <Link
                className="button gold"
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp <MessageCircle size={19} />
              </Link>
            </DialogContent>
          </Dialog>
        </div>
      </header>
    </>
  );
}
