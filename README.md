# TRIO — Website

A cinematic, editorial website for TRIO, a media and creative studio working
across **film, music, and photography**. Built with React, Vite, Tailwind CSS,
and Framer Motion.     s

The real TRIO logo, colors, and a few starter photos (the "Sur, Shabd aur
Shakhsiyat" flyer photo, and portraits of your three Custodians) are already
wired in from the materials you shared, sitting in `src/assets/`. The color
palette in `tailwind.config.js` was derived directly from your logo (navy,
gold, teal) and your event/team collateral. Everything else — full-res
photography, additional events, more team members — drops into the same
system. See below for exactly where.

## 1. Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
```

This outputs a static site to `dist/`, which you can deploy anywhere
(Vercel, Netlify, Cloudflare Pages, S3 + CloudFront, etc).

## 2. Where to put your images

**Everything image-related lives in one file: `src/data/images.js`.**
It currently imports a handful of starter assets from `src/assets/`
(logo, one event photo, three Custodian portraits) — to replace any of
them with your own cloud storage URLs, just swap that slot's value for a
plain URL string instead of the import. Empty slots (`""`) fall back to a
tasteful brand-colored placeholder instead of a broken image.

```js
export const brand = {
  logo: trioLogo,          // ← swap for a higher-res logo export when ready
};

export const siteImages = {
  hero: sabriPerformance,   // ← replace with your best hero-worthy shot
  aboutPrimary: sabriPerformance,
  aboutSecondary: "",       // ← add a behind-the-scenes / candid shot
  storyBreak: "",           // ← full-width break between Events and Team
};

export const eventImages = {
  "sur-shabd-aur-shakhsiyat": {
    cover: sabriPerformance,
    gallery: [sabriPerformance, "", "", "", ""], // ← add more shots from the night
    video: "",              // ← YouTube embed link, if you film the session
  },
  // ...one entry per new event, keyed by the event's `id`
};

export const teamImages = {
  "kashif-raza": kashifRaza,       // ← currently a cropped slide photo —
  "sheeba-lateef": sheebaLateef,   //   swap for a proper studio portrait
  "altamash-abbas": altamashAbbas, //   whenever you have one
};
```

**Note on the starter photos:** the event photo and team portraits were
cropped out of the flyer/slide you shared, so they have soft edges and
lower resolution than a dedicated photo shoot would give you. They're
there so the site doesn't look empty on day one — replace them with
full-resolution originals as soon as you can.

Use **direct image URLs** (the link should end in `.jpg`, `.png`, `.webp`,
etc., or otherwise return raw image data — not an HTML preview page). Most
cloud storage providers have a "get shareable/direct link" option; Google
Drive links in particular need to be converted to a direct-download format.

## 3. Where to edit content

- **Events** — `src/data/events.js`. Copy an existing object, give it a new
  unique `id`, then add a matching entry in `eventImages` inside
  `images.js` using that same `id`.
- **Team** — `src/data/team.js`. Same pattern: copy an object, give it a new
  `id`, add a matching portrait URL in `teamImages`.
- **Social links** — `src/components/Footer.jsx`, at the top of the file in
  the `socials` array. None were provided yet, so all three (Instagram,
  YouTube, X) are currently hidden — add a `url` to show one.
- **Contact email / phone** — also in `Footer.jsx`, currently set to
  `trisetof3arts@gmail.com` and `+91 75067 35354` from your team slide.
- **Copy** (headlines, About text, taglines) — each page's file under
  `src/pages/`, and the homepage sections under `src/components/`. All copy
  is plain JSX text, easy to find and edit.

## 4. Design system

- **Colors** (`tailwind.config.js`), sampled directly from your logo and
  event materials:
  - `ink` — deep navy (`#0B1B32`), the site's primary background
  - `bone` — warm cream (`#F3ECDD`), matching your flyer's paper tone
  - `brass` — the gold from your logo's swirl / event script accent
  - `teal` — the teal ring from your logo, used sparingly as a secondary accent
- **Type**: `Fraunces` (display serif, used for headlines) + `Inter` (body).
  Loaded via Google Fonts in `index.html`.
- **Signature mark**: the three-stroke `TrioMark` component is a small
  original motif (distinct from your logo) standing in for Sur, Shabd aur
  Shakhsiyat — it appears as a loading/placeholder cue alongside your real
  logo, never in place of it.

## 5. Project structure

```
src/
  data/          # events.js, team.js, images.js — all editable content
  components/    # Navbar, Hero, EventCard, TeamMember, Footer, etc.
  pages/         # Home, Events, EventDetail, TeamPage, AboutPage
  App.jsx        # routes
  main.jsx       # entry point
```

## 6. Notes

- Respects `prefers-reduced-motion`.
- All images use `loading="lazy"` (except hero/event-hero images, which load
  eagerly) and fade in once loaded.
- Mobile navigation is a full animated overlay; the nav bar itself becomes
  opaque once you scroll or open the mobile menu.

## 7. Event registration

Every event card and event page now has a **Register** button that opens a
form (Name, Age, Contact, Email) plus a one-tap **Register via WhatsApp**
option. Configuration lives in `src/data/config.js`:

- **Right now, with zero setup:** the form falls back to opening the
  visitor's email app, pre-filled and addressed to
  `triosetof3arts@gmail.com`. The WhatsApp button always works with no
  setup, since it just opens the visitor's own WhatsApp to your number.
- **For full automation** (form submits silently, lands in your inbox,
  logs to a spreadsheet, and optionally forwards to WhatsApp automatically):
  follow the steps at the top of `src/data/config.js` — it walks through
  setting up a free Formspree form and connecting it to Google Sheets /
  WhatsApp via Zapier or Make. I can't create those third-party accounts
  for you, but once you have a Formspree endpoint, it's a one-line change.

## 8. Social links & contact

`src/data/config.js` now holds your real YouTube, Instagram, and Facebook
links, plus both phone numbers and the corrected email
(`triosetof3arts@gmail.com`). YouTube also gets its own prominent
"Watch on YouTube" banner on the homepage, per your request that it be the
most visible social link.

## 9. Currently In The Studio

A new homepage section (`src/components/Upcoming.jsx`, content in
`src/data/upcoming.js`) showcases behind-the-scenes photos from your album
recording sessions. The album title, release date, and full artist list
weren't confirmed in what you shared, so the copy currently says "in
production" — update `src/data/upcoming.js` once those are locked.

**On identifying people in the photos:** you mentioned artists like Shaan
and Mahalakshmi Iyer are in these sessions, so the section credits them by
name generally. I wasn't able to confidently match specific faces to
specific frames from the photos alone, so I haven't hard-coded names to
individual photo captions — that's worth doing once you confirm which
frame is which, since getting a public credit wrong is worse than leaving
it generic for now.
