# Shelz Media

Cinematic charcoal-and-gold, responsive event-production site. Built with Vinext (Next.js App Router APIs), TypeScript, React, clean CSS and the scaffold's accessible Base UI/Shadcn primitives.

## Run

Node >=22.13.0. `npm ci`, then `npm run dev`. Validate with `npm run format`, `npm run lint`, `npx tsc --noEmit`, `npm run build`.

## Business configuration

Edit `lib/site-config.ts`: phone, email, WhatsApp (digits including country code), service locations, social URLs, streaming URLs, analytics and quote endpoint. The supplied number is used verbatim, normalised to digits for WhatsApp. Confirm that this number has WhatsApp enabled before public launch. Unconfirmed location and social claims are not displayed. Never place secrets in this client-imported configuration.

## Quotes

Without `quoteEndpoint`, the accessible form validates input, prepares an enquiry, and lets the visitor explicitly open an email draft or download the text. It does not claim to send anything. The phone and WhatsApp links also work directly. To enable online submission, set a public HTTPS endpoint accepting JSON and returning a successful 2xx status only after accepting the enquiry. For Formspree or another service, verify its payload contract. Keep Resend/Supabase/server credentials server-side. Implement rate limiting, validation, spam protection and consent handling on the backend; a honeypot is included in the frontend. Update the privacy notice to match actual processing before enabling a backend. No response-time promise is invented.

## Images and portfolio

Local, licensed illustrative images live in `public/images`; credits and source URLs appear in the privacy/image-credit disclosure. They are clearly labelled and never represented as Shelz client work. Replace them with approved business photographs before a public production launch. Edit `projects` in `lib/site-config.ts` to add id, title, category, local image, alt, description and demo:false for approved real work. Optional `video` supports local playable media; add a captions track to the player for spoken content. Categories without items display an honest empty state. Use compressed WebP/AVIF or JPEG with correct image dimensions. The supplied logo is preserved; it is also the favicon and social sharing mark.

## Content and SEO

Home sections: hero, introduction/about, services, portfolio, full production, approach, event types, streaming, process, client-story fallback, social-feed fallback and contact. `/work` provides all seven filters and an accessible lightbox. Edit descriptions in `lib/site-config.ts`, page text in `app/page.tsx`, shared styles in `app/globals.css`. Metadata is in `app/layout.tsx` and `app/work/page.tsx`. The canonical origin, robots and sitemap use the configured origin. LocalBusiness and service data omit unconfirmed city/address claims. Social feed APIs may be connected later; no third-party feed is fabricated. Analytics are off; add an approved provider only after configuring consent/privacy requirements.

## Deployment

Run the production build. `.openai/hosting.json` retains the Sites project identity. Package using the Sites helper and publish the matching committed source via Sites. For other hosting, use a Cloudflare Workers-compatible Vinext deployment, or deliberately configure a supported export. Do not upload source secrets.

## Accessibility

Semantic landmarks, skip link, labelled fields, touch targets, visible focus, reduced motion, dialog-managed focus and Escape dismissal, and accessible selection primitives are included. The quote form optionally exposes `stage_quote_services` through browser WebMCP; this only stages selections and never submits.
