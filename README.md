# Shelz Media

**Public website:** https://shelzmedia.nz

**Cloudflare preview:** https://shelz-media.pages.dev

**Repository:** https://github.com/shankarappan/shelz-media

Colourful, dimensional creative-studio site with animated 3D camera artwork, oversized Syne typography, photo collages and orange, pink and acid-yellow service sections. Built with Vinext (Next.js App Router APIs), TypeScript, React, clean CSS and the scaffold's accessible Base UI/Shadcn primitives.

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

Cloudflare Pages is the primary host. `npm run build:cloudflare` exports the site for the root domain `https://shelzmedia.nz`; `npm run deploy:cloudflare` publishes locally with Cloudflare credentials set in the environment or Wrangler login. Credentials are never committed. Cloudflare deployment is currently manual; GitHub pushes update only the backup host.

GitHub Pages remains a client-review backup. Push to `main` to run `.github/workflows/pages.yml`. It installs the locked dependencies, builds via `npm run build:pages`, and deploys only `dist/client`. No server, API keys or paid hosting are required.

`build:pages` sets the public base path and canonical origin, exports both routes, normalises the static asset directory, creates clean `/work/` navigation, and verifies referenced assets. Static-mode links use full-page navigation so GitHub Pages never needs a React server. The enquiry form continues to prepare an email; it does not pretend to submit to a backend.

`npm run dev` and `npm run build` retain the original root-domain/Sites setup for local development and optional Cloudflare-compatible hosting. `.openai/hosting.json` contains only the original hosting identity, not credentials. The existing private Sites preview is unaffected by GitHub deployments.

## Accessibility

Semantic landmarks, skip link, labelled fields, touch targets, visible focus, reduced motion, dialog-managed focus and Escape dismissal, and accessible selection primitives are included. The quote form optionally exposes `stage_quote_services` through browser WebMCP; this only stages selections and never submits.

## Verification notes

Checked both pages at 375, 390, 768, 1024, 1280 and 1440px with no horizontal overflow. Verified required service validation, email draft contents, edit preservation, mobile menu Escape/focus restoration, portfolio filtering and empty states, lightbox opening/Escape, reduced-motion scroll behaviour, all 32 WhatsApp link configurations and successful page/robots/sitemap responses. No test enquiry was sent. Confirmed Instagram and Facebook profiles are linked in the social section, contact section and footer. Optional WebMCP could not be contract-tested because the browser does not expose modelContext. Lint covers authored application code; bundled untouched UI primitives and their unused hook are excluded because they have pre-existing lint findings. A full WCAG audit and real-device testing remain separate from these checks.

## September 2026 visual redesign

Preserves the supplied Shelz logo and all quote, WhatsApp, portfolio and navigation behaviour. New hero artwork was generated with the built-in image-generation tool and saved at `public/images/creative-camera.png`; it is an illustrative 3D composition, not a product or client-work claim. Animation respects reduced-motion preferences.

Image prompt: Premium playful 3D studio still life for a photography, event and decor company. Central floating black mirrorless camera with coral-orange accents and reflective lens, chrome inflated four-point sparkle, polished hot pink ribbon, lemon-yellow balloon and orange confetti. Three-quarter view, tactile materials, transparent alpha background, no logos or text.
