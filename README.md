# ishan jain — portfolio

Personal portfolio site. Next.js 15 (App Router), TypeScript, Tailwind CSS v4, Framer Motion. No database, no CMS — content lives in `src/content/`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app` — routes (`/` and `/projects`)
- `src/components` — layout, hero, sections, and shared UI
- `src/content` — typed content (profile, projects, now, research, worlds)
- `src/lib` — hooks (scroll spy, reduced motion) and the Perseus star data

## Deploy

Built for Vercel. `npm run build` produces a static-optimized production build.
