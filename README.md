# Core Productions

Marketing website for **Core Productions** — a South African audio visual,
lighting, sound and video production company.

Built with **Next.js 14 (App Router)**, **Tailwind CSS** and **Framer Motion**,
designed as a dark, cinematic single-page site with scroll-triggered motion.

## Highlights

- Motion-rich, scroll-reveal animations (respects `prefers-reduced-motion`)
- Film-grain overlay, ambient glow and a fluid display type scale
- Expandable services section covering both **Live Production** (Audio Visual,
  Lighting, Sound, Set & Stage) and **Video** (Videography, Video Production,
  Storyboarding, Editing & Post)
- Contact section with a `mailto`-based enquiry form (no backend required)
- Fully static — deploys to Vercel out of the box

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Editing content

All site copy lives in [`lib/content.ts`](lib/content.ts) — headings, services,
process steps and contact details are defined there so the wording can be
updated without touching components.

### Before launch

- Contact email is set to `bernard@coreproductions.co.za` in `lib/content.ts`.
- Add social links / a physical address if desired (the structure is in place
  in `lib/content.ts` and `components/Footer.tsx`).
- Swap in real photography/video for richer hero and section backgrounds.

## Structure

```
app/
  layout.tsx      # fonts, metadata, global shell
  page.tsx        # section composition
  globals.css     # theme tokens, grain, type scale
components/        # Nav, Hero, About, Services, Process, Contact, Footer, Reveal
lib/content.ts     # all copy in one place
```
