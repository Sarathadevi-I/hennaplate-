# Henna Palettes Magic — Website

React + Tailwind CSS landing page (frontend only, no backend). Premium,
editorial-style layout with a full-bleed hero, gallery grid, and menu-style
pricing.

## Run locally
```
npm install
npm run dev
```

## Build for production
```
npm run build
```
Output goes to `dist/` — upload that folder to any static host (Netlify, Vercel, Hostinger, etc).

## Adding real photos
Every dashed box with a camera icon is a placeholder — swap it for a real
`<img>` tag (or a background-image) once you have photos:
- Hero background (`src/components/Hero.jsx`)
- About collage — 2 images (`src/components/About.jsx`)
- Services — 1 photo per service, 4 total (`src/components/Services.jsx`)
- Gallery — 5 "recent work" photos (`src/components/Gallery.jsx`)
- Testimonials — 3 circular client photos (`src/components/Testimonials.jsx`)
- Contact background (`src/components/Contact.jsx`)

## Before going live
- Replace the placeholder phone number `+91 90000 00000` in `Hero.jsx` and `Contact.jsx` with the real number.
- Swap the placeholder reviews in `Testimonials.jsx` with real client feedback.
- Fill in real pricing for "Other requests" in `Packages.jsx` once you have numbers.
