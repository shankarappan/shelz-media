/* Images are pre-compressed local assets with responsive sources; no runtime image service required. */
/* eslint-disable nextjs/no-img-element */
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { categories, projects, type Project } from '@/lib/site-config';
export function Portfolio({ full = false }: { full?: boolean }) {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState<Project | null>(null);
  const visible = projects.filter(
    (p) => filter === 'All' || p.category === filter,
  );
  return (
    <section
      className={`section portfolio ${full ? 'portfolio-full' : ''}`}
      id="work"
    >
      <div className="section-top">
        <div>
          <p className="eyebrow">THE POSSIBILITIES</p>
          <h2>
            Every event has <em>a story.</em>
          </h2>
        </div>
        {!full && (
          <Link className="text-link" href="/work">
            Explore our work <ArrowUpRight size={18} />
          </Link>
        )}
      </div>
      <p className="portfolio-note">
        A glimpse of the experiences we can help create. Imagery is
        illustrative; our Shelz Media project collection is coming soon.
      </p>
      <fieldset className="filters" aria-label="Filter event gallery">
        {(full ? categories : categories.slice(0, 4)).map((c) => (
          <button
            key={c}
            aria-pressed={filter === c}
            className={filter === c ? 'active' : ''}
            onClick={() => setFilter(c)}
          >
            {c === 'All' ? 'All events' : c}
          </button>
        ))}
      </fieldset>
      <div className="portfolio-grid">
        {visible.map((p) => (
          <button
            key={p.id}
            className="project"
            onClick={() => setSelected(p)}
            aria-label={`View ${p.title} — illustrative ${p.category} image`}
          >
            <div className="project-image">
              <img
                src={p.image}
                srcSet={`${p.image.replace('.jpg', '-640.jpg')} 640w, ${p.image.replace('.jpg', '-1100.jpg')} 1100w, ${p.image} 1600w`}
                sizes="(max-width:767px) 90vw, 50vw"
                alt={p.alt}
                width="1100"
                height="800"
                loading="lazy"
              />
              <span className="image-label">
                {p.demo ? 'ILLUSTRATIVE IMAGE' : 'SHELZ MEDIA PROJECT'}
              </span>
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
        <DialogContent className="lightbox">
          {selected && (
            <>
              <DialogTitle>{selected.title}</DialogTitle>
              {selected.video ? (
                <video
                  controls
                  poster={selected.image}
                  aria-label={selected.title}
                >
                  <source src={selected.video} />
                  <track kind="captions" />
                </video>
              ) : (
                <img
                  src={selected.image}
                  alt={selected.alt}
                  width="1600"
                  height="1100"
                />
              )}
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
