/* Images are pre-compressed local assets with responsive sources; no runtime image service required. */
/* eslint-disable nextjs/no-img-element */
'use client';

import Link from '@/components/site/link';
import { useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { portfolioPhotos as projects } from '@/lib/portfolio-photos';
const categories = [
  'All',
  'Couple portraits',
  'Wedding moments',
  'Wedding parties',
];
type Project = (typeof projects)[number];
export function Portfolio({ full = false }: { full?: boolean }) {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState<Project | null>(null);
  const matches = projects.filter(
    (p) => filter === 'All' || p.category === filter,
  );
  const visible = full ? matches : matches.slice(0, 6);
  const stepPhoto = (direction: number) => {
    if (!selected) return;
    const index = matches.findIndex((p) => p.id === selected.id);
    setSelected(matches[(index + direction + matches.length) % matches.length]);
  };
  return (
    <section
      className={`section portfolio real-portfolio ${full ? 'portfolio-full' : ''}`}
      id="work"
    >
      <div className="section-top">
        <div>
          <p className="eyebrow">THROUGH THE SHELZ LENS.</p>
          <h2>
            Real moments. <em>Beautifully kept.</em>
          </h2>
        </div>
        {!full && (
          <Link className="text-link" href="/work">
            Explore our work <ArrowUpRight size={18} />
          </Link>
        )}
      </div>
      <p className="portfolio-note">
        Wedding stories, quiet details and celebrations with your favourite
        people. Photographed by Shelz Media.
      </p>
      <fieldset className="filters" aria-label="Filter event gallery">
        {(full ? categories : categories.slice(0, 4)).map((c) => (
          <button
            key={c}
            aria-pressed={filter === c}
            className={filter === c ? 'active' : ''}
            onClick={() => setFilter(c)}
          >
            {c === 'All' ? 'All photos' : c}
          </button>
        ))}
      </fieldset>
      <div className="portfolio-grid">
        {visible.map((p) => (
          <button
            key={p.id}
            className="project"
            onClick={() => setSelected(p)}
            aria-label={`View ${p.title} — ${p.category}`}
          >
            <div className="project-image">
              <img
                src={p.thumbnail}
                srcSet={`${p.thumbnail} ${Math.round(p.width * Math.min(1, 640 / Math.max(p.width, p.height)))}w, ${p.image} ${p.width}w`}
                sizes="(max-width:600px) 90vw, (max-width:1000px) 44vw, 28vw"
                alt={p.alt}
                width={p.width}
                height={p.height}
                decoding="async"
                loading="lazy"
              />
              <span className="image-label">SHELZ MEDIA</span>
              <span className="project-arrow">
                <ArrowUpRight size={24} />
              </span>
            </div>
            <div className="project-caption">
              <p>{p.category}</p>
              <h3>{p.title}</h3>
            </div>
          </button>
        ))}
      </div>
      {!full && (
        <Link className="button gallery-more" href="/work">
          View all 17 photographs <ArrowUpRight size={18} />
        </Link>
      )}
      {visible.length === 0 && (
        <div className="empty-state">
          <h3>More stories to come.</h3>
          <p>
            Our {filter.toLowerCase()} project collection is being prepared.
            Tell us what you’re planning and we’ll discuss the possibilities.
          </p>
          <Link className="text-link" href="/#contact">
            Talk about your event <ArrowRight size={18} />
          </Link>
        </div>
      )}
      <Dialog
        open={!!selected}
        onOpenChange={(o) => {
          if (!o) setSelected(null);
        }}
      >
        <DialogContent
          className="lightbox"
          onKeyDown={(event) => {
            if (event.key === 'ArrowLeft') {
              event.preventDefault();
              stepPhoto(-1);
            }
            if (event.key === 'ArrowRight') {
              event.preventDefault();
              stepPhoto(1);
            }
          }}
        >
          {selected && (
            <>
              <DialogTitle>{selected.title}</DialogTitle>
              <img
                src={selected.image}
                alt={selected.alt}
                width={selected.width}
                height={selected.height}
              />
              <div className="gallery-navigation">
                <button
                  type="button"
                  onClick={() => stepPhoto(-1)}
                  aria-label="Previous photograph"
                >
                  ← Previous
                </button>
                <span aria-live="polite">
                  {matches.findIndex((p) => p.id === selected.id) + 1} /{' '}
                  {matches.length}
                </span>
                <button
                  type="button"
                  onClick={() => stepPhoto(1)}
                  aria-label="Next photograph"
                >
                  Next →
                </button>
              </div>
              <DialogDescription>{selected.description}</DialogDescription>
              <Link
                className="text-link"
                href="/#contact"
                onClick={() => setSelected(null)}
              >
                Create your own experience <ArrowUpRight size={18} />
              </Link>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
