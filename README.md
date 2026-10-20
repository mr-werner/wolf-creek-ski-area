# Wolf Creek Ski Area — Blueprint WebStudio Concept

Independent, non-official redesign concept for https://wolfcreekski.com/ (Continental Divide, southern Colorado).
Preview: https://wcsa.blueprintwebstudio.com (noindex; the demo code lives in the Neon `demos` table).

Custom build, not the shared concept layout. Content and layout are in `src/App.jsx`, styles in `src/styles.css`, and the Blueprint WebStudio concept widget in `src/concept.jsx`.

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Vercel project `wolf-creek-ski-area` (framework: Vite, team mrwerner-s-projects). Pushes to `main` deploy automatically.
Domain `wcsa.blueprintwebstudio.com` is a CNAME at Porkbun pointing to the target Vercel shows for this project.

Environment variables (all optional): `VITE_CONCEPT_END_DATE` (countdown end, 2026-11-24), `GOOGLE_PLACES_API_KEY` / `GOOGLE_PLACE_ID` (not used on the page yet), `RESEND_API_KEY` / `CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL` (contact form). The "I'm Interested" form posts to `api/demo-interest.js`, which proxies to the main studio site.

## Design

- Motif: a red-and-white snow stake that fills to 430 inches in the hero, the way skiers read a storm total.
- Barlow Condensed headlines with Barlow body; deep navy, glacier blue and signal red from the logo and trail-map colors.
- Snow report strip right under the hero, terrain mix bars with real trail-difficulty symbols, and a lift board listing all 12 lifts.
- Plan-a-trip cards (tickets, lessons, rentals, lodging), lift and ticket office hours, base-area dining, webcam previews and one contact directory.

## What changed from the current site

- Removes the leftover COVID operating-plan banner, the `/staging/` webcam image and the `about:blank` webcam embeds.
- Fixes visible typos ("Skiiable") and the icon-font text that leaks into the page.
- Mountain stats, lifts and terrain mix are on the homepage instead of buried on "The Mountain" page.
- Phone, snow line, ski patrol and email in one place; mobile layout checked at 390px with no sideways scrolling.

## Owner should confirm

- Logo colors: palette is navy, glacier blue and red; match exactly to the brand file.
- Lift count: the current site says eleven lifts but lists twelve; all twelve are shown.
- Snow report and webcams: the concept shows placeholders; wire them to the existing feeds before launch.
- Lodging copy (Pagosa Springs and South Fork) and dining descriptions are short summaries; confirm wording.
- Stewardship line about the U.S. Forest Service partnership.
- Photos are hotlinked from wolfcreekski.com and must be replaced with licensed originals before launch.
