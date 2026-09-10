/* Images are pre-compressed local assets with responsive sources; no runtime image service required. */
/* eslint-disable nextjs/no-img-element */

import Link from '@/components/site/link';
import { assetPath } from '@/lib/site-path';
import {
  ArrowUpRight,
  MessageCircle,
  Camera,
  Clapperboard,
  Lightbulb,
  Radio,
  Check,
  Plus,
} from 'lucide-react';
import { Hero } from '@/components/site/hero';
import { SocialLinks } from '@/components/site/social-links';
import { Header } from '@/components/site/header';
import { Footer } from '@/components/site/footer';
import { Portfolio } from '@/components/site/portfolio';
import { QuoteForm } from '@/components/site/quote-form';
import { business, services, whatsappUrl } from '@/lib/site-config';
const eventTypes = [
  [
    'Weddings & engagements',
    'Intimate moments, joyful celebrations and a setting that feels like you.',
  ],
  [
    'Concerts & festivals',
    'Performance coverage, lighting, screens and production for the live experience.',
  ],
  [
    'Corporate & conferences',
    'Purposeful content, considered staging and coordinated event delivery.',
  ],
  [
    'Cultural & community',
    'Celebrate connection, tradition and the people who make it meaningful.',
  ],
  [
    'Private celebrations',
    'Photography, film and styling for birthdays, family occasions and private functions.',
  ],
  [
    'Launches & education',
    'Visual storytelling and event support for product launches, schools and universities.',
  ],
];
export const dynamic = 'force-static';
export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <div className="service-strip">
          EVENT PRODUCTION <span>✦</span> CONCERTS <span>✦</span> PHOTOGRAPHY & FILM{' '}
          <span>✦</span> LIGHTING & LED WALLS <span>✦</span> LIVE STREAMING
        </div>
        <section className="section intro" id="about">
          <p className="eyebrow">WE’RE YOUR EVENT PEOPLE</p>
          <div>
            <h2>
              A little louder.
              <br />
              <em>A lot more memorable.</em>
            </h2>
            <div className="intro-bottom">
              <p>
                Great events bring people together. We bring together the
                creativity, content and production that make them possible — so
                you can be present for the moments that matter.
              </p>
              <Link className="text-link" href="#production">
                Meet your event partner <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </section>
        <section className="section services" id="services">
          <div className="section-top">
            <div>
              <p className="eyebrow">THREE WAYS TO MAKE IT HAPPEN</p>
              <h2>
                Dream it. <em>We’ll bring it.</em>
              </h2>
            </div>
            <p>
              From a single camera to a complete production.
              <br />
              Choose the support your event needs.
            </p>
          </div>
          <div className="service-grid">
            {services.map((s, i) => (
              <article className="service-card" key={s.number}>
                <img
                  className="service-cover"
                  src={s.image}
                  alt={`${s.alt} — event inspiration`}
                  width="700"
                  height="480"
                  loading="lazy"
                />
                <div className="service-card-head">
                  <span>{s.number} /</span>
                  {i === 0 ? (
                    <Camera size={27} />
                  ) : i === 1 ? (
                    <Lightbulb size={27} />
                  ) : (
                    <Radio size={27} />
                  )}
                </div>
                <p className="eyebrow">{s.subtitle}</p>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <ul>
                  {s.items.slice(0, 4).map(([title]) => (
                    <li key={title}>{title}</li>
                  ))}
                </ul>
                <details>
                  <summary>
                    Explore all services <Plus size={17} />
                  </summary>
                  <div className="service-details">
                    <img
                      src={s.image}
                      alt={`${s.alt} — illustrative photography`}
                      width="600"
                      height="400"
                      loading="lazy"
                    />
                    {s.items.map(([title, description]) => (
                      <div key={title}>
                        <h4>{title}</h4>
                        <p>{description}</p>
                        <Link
                          href={whatsappUrl(title)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Enquire <ArrowUpRight size={14} />
                        </Link>
                      </div>
                    ))}
                  </div>
                </details>
                <Link
                  className="text-link"
                  href={whatsappUrl(s.subtitle.toLowerCase())}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Let’s talk{' '}
                  {i === 0 ? 'content' : i === 1 ? 'production' : 'planning'}{' '}
                  <ArrowUpRight size={17} />
                </Link>
              </article>
            ))}
          </div>
        </section>
        <Portfolio />
        <section className="production" id="production">
          <div className="production-photo">
            <img
              src={assetPath('/images/production.jpg')}
              srcSet={`${assetPath('/images/production-640.jpg')} 640w, ${assetPath('/images/production-1100.jpg')} 1100w, ${assetPath('/images/production.jpg')} 1700w`}
              sizes="(max-width: 767px) 100vw, 55vw"
              alt="Stage lighting and LED walls at a live event — illustrative event scene"
              width="1700"
              height="1133"
              loading="lazy"
            />
            <span className="image-label">
              THE BIG PICTURE · ILLUSTRATIVE IMAGE
            </span>
          </div>
          <div className="production-copy">
            <p className="eyebrow">FROM VISION TO SHOWTIME</p>
            <h2>
              From “what if”
              <br />
              to <em>“wow.”</em>
            </h2>
            <p>
              Your event deserves a connected plan. Shelz Media brings creative
              media, stage production and event operations into the same
              conversation.
            </p>
            <ul>
              {[
                'Photography & videography',
                'Stage styling, lighting & LED walls',
                'Event coordination & security',
                'Live streaming & post-event content',
              ].map((s) => (
                <li key={s}>
                  <Check size={17} />
                  {s}
                </li>
              ))}
            </ul>
            <Link
              className="button gold"
              href={whatsappUrl(
                'full event production, photography, videography, lighting and LED walls',
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Talk full event production <ArrowUpRight size={18} />
            </Link>
          </div>
        </section>
        <section className="section why">
          <p className="eyebrow">THE SHELZ APPROACH</p>
          <div className="why-grid">
            <h2>
              All the creativity.
              <br />
              <em>None of the guesswork.</em>
            </h2>
            <div className="why-list">
              {[
                [
                  'A shared vision',
                  'Creative and technical decisions start with what you want your guests to experience.',
                ],
                [
                  'A coordinated plan',
                  'Content, staging and event operations are considered together, with clear responsibilities.',
                ],
                [
                  'A personal conversation',
                  'We listen first, explain your options and shape the scope around your occasion.',
                ],
              ].map(([t, p], i) => (
                <div key={t}>
                  <span>0{i + 1}</span>
                  <div>
                    <h3>{t}</h3>
                    <p>{p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section events" id="events">
          <div className="section-top">
            <div>
              <p className="eyebrow">WHATEVER THE OCCASION</p>
              <h2>
                Made for <em>your kind of celebration.</em>
              </h2>
            </div>
          </div>
          <div className="events-grid">
            {eventTypes.map(([t, p]) => (
              <Link
                key={t}
                href={whatsappUrl(t)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>
                  {t}
                  <ArrowUpRight size={19} />
                </h3>
                <p>{p}</p>
              </Link>
            ))}
          </div>
        </section>
        <section className="section streaming" id="live-streaming">
          <div className="streaming-icon">
            <Radio size={53} strokeWidth={1} />
            <span>BEYOND THE ROOM</span>
          </div>
          <div>
            <p className="eyebrow">LIVE STREAMING</p>
            <h2>
              They can’t be there.
              <br />
              <em>They can still be part of it.</em>
            </h2>
            <p>
              Bring remote guests into your event with coordinated camera
              coverage and live broadcasting. We’ll discuss audience access,
              event visuals, recording and post-event content as part of your
              streaming plan.
            </p>
            <Link
              className="text-link"
              href={whatsappUrl('live streaming')}
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore live streaming <ArrowUpRight size={18} />
            </Link>
          </div>
        </section>
        <section className="section process" id="process">
          <div className="section-top">
            <div>
              <p className="eyebrow">SIMPLE FROM THE START</p>
              <h2>
                Good things. <em>In the making.</em>
              </h2>
            </div>
            <Link className="text-link" href="#contact">
              Start the conversation <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="process-grid">
            {[
              [
                'Tell us your vision',
                'Share your date, venue and what you have in mind. We’ll listen to what matters most.',
              ],
              [
                'Shape the experience',
                'Together, we’ll define the creative direction, services and production scope.',
              ],
              [
                'Plan every detail',
                'We’ll align schedules, venue requirements and the people involved in delivery.',
              ],
              [
                'Be in the moment',
                'With the agreed plan in motion, enjoy the event — and the memories that follow.',
              ],
            ].map(([t, p], i) => (
              <div key={t}>
                <span>0{i + 1}</span>
                <h3>{t}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="section trust-social">
          <div>
            <p className="eyebrow">REAL EXPERIENCES</p>
            <h2>
              Big moments start
              <br />
              <em>with a conversation.</em>
            </h2>
            <p>
              Our client stories are being gathered. In the meantime, talk to us
              about your event and the approach we’d take.
            </p>
            <Link className="text-link" href="#contact">
              Get to know Shelz <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="social-block">
            <Clapperboard size={32} strokeWidth={1.3} />
            <h3>Behind the moments.</h3>
            <p>
              Follow Shelz Media on Instagram and Facebook for event stories,
              creative details and life behind the scenes.
            </p>
            <SocialLinks />
            <Link className="text-link" href={`mailto:${business.email}`}>
              Ask for our latest work <ArrowUpRight size={18} />
            </Link>
          </div>
        </section>
        <section className="section contact" id="contact">
          <div className="contact-copy">
            <p className="eyebrow">LET’S MAKE IT HAPPEN</p>
            <h2>
              Got a date?
              <br />
              An idea?
              <br />
              <em>Let’s do this.</em>
            </h2>
            <p>
              A date in the diary. An idea taking shape.
              <br />
              Tell us what you’re planning — we’ll take it from there.
            </p>
            <Link className="contact-email" href={`mailto:${business.email}`}>
              {business.email}
              <ArrowUpRight size={18} />
            </Link>
            <Link href={`tel:${business.phoneHref}`}>{business.phone}</Link>
            <Link
              className="button outline"
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} /> Prefer WhatsApp? Let’s chat
            </Link>
            <SocialLinks />
            <p className="small">
              Share your location so we can confirm service availability for
              your event.
            </p>
          </div>
          <QuoteForm />
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: business.name,
            url: business.origin,
            email: business.email,
            telephone: business.phoneHref,
            sameAs: Object.values(business.social).filter(Boolean),
            image: business.origin + '/images/shelz-logo.jpg',
            description:
              'Events, concerts and complete production, with photography and film.',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Event services',
              itemListElement: services.flatMap((s) =>
                s.items.map(([name, description]) => ({
                  '@type': 'Offer',
                  itemOffered: { '@type': 'Service', name, description },
                })),
              ),
            },
          }),
        }}
      />
    </>
  );
}
