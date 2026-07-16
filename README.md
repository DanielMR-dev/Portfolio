# Daniel Mira — Portfolio

> Personal portfolio of **Daniel Mira**, Systems & Computer Engineering Graduate. Full Stack Development · Network Security · Ethical Hacking · Blue Team

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Turborepo](https://img.shields.io/badge/Turborepo-2-EF4444?logo=turborepo&logoColor=white)](https://turbo.build)
[![pnpm](https://img.shields.io/badge/pnpm-10-F69220?logo=pnpm&logoColor=white)](https://pnpm.io)

---

## Overview

This is a **monorepo** managed with [Turborepo](https://turbo.build) and [pnpm workspaces](https://pnpm.io/workspaces). It contains the main portfolio web application and a shared utilities package.

The portfolio is a single-page application with smooth scroll navigation, bilingual support (English / Spanish), dark/light mode, and a contact form powered by Formspree.

---

## Tech Stack

### Core

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org) | 15 | React framework (App Router + Turbopack) |
| [React](https://react.dev) | 19 | UI library |
| [TypeScript](https://www.typescriptlang.org) | 5 | Type safety |

### Styling & Animation

| Technology | Version | Purpose |
|---|---|---|
| [TailwindCSS](https://tailwindcss.com) | 4 | Utility-first CSS framework |
| [Framer Motion](https://www.framer.com/motion) | 12 | Animations & transitions |

### Internationalization

| Technology | Version | Purpose |
|---|---|---|
| [next-intl](https://next-intl.dev) | 3 | i18n routing & translations (EN / ES) |

### Forms & Validation

| Technology | Version | Purpose |
|---|---|---|
| [React Hook Form](https://react-hook-form.com) | 7 | Form state management |
| [Zod](https://zod.dev) | 3 | Schema validation |
| [@hookform/resolvers](https://github.com/react-hook-form/resolvers) | 3 | Zod adapter for RHF |

### Utilities

| Technology | Version | Purpose |
|---|---|---|
| [next-themes](https://github.com/pacocoursey/next-themes) | 0.4 | Dark / light mode |
| [Lucide React](https://lucide.dev) | 0.474 | Icon library |
| [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) | latest | Conditional class merging |

### Infrastructure

| Technology | Version | Purpose |
|---|---|---|
| [Turborepo](https://turbo.build) | 2 | Monorepo build system with task caching |
| [pnpm](https://pnpm.io) | 10 | Fast, disk-efficient package manager |
| [Prettier](https://prettier.io) | 3 | Code formatter |

---

## Key Features

- **Monorepo** — Turborepo pipeline with task caching for fast builds
- **Bilingual** — Full EN / ES support via `next-intl` with locale-prefixed URLs (`/en`, `/es`)
- **Galactic Dark Mode** — Pure CSS procedural galactic background using `radial-gradient` and vignette effects, avoiding Canvas/Three.js overhead.
- **Accessible Design** — Fully responsive, semantic HTML, comprehensive ARIA attributes (focus rings, live regions), and strict WCAG AA contrast.
- **Reduced Motion Support** — Uses Framer Motion's `useReducedMotion` to respect user OS preferences by providing simplified, instant transitions.
- **Dynamic Documents** — Build-time detection of local resumes/CVs allowing conditional rendering of download CTAs.
- **Contact form** — Validated with Zod + React Hook Form, submitted to Formspree
- **SEO ready** — Canonical URLs, `sitemap.xml`, `robots.txt`, meta tags per locale
- **Image optimization** — Next.js `<Image>` with AVIF/WebP formats, paired with visual placeholders when source assets are missing.

---

## Configuration & Usage

### Environment Variables
To enable the contact form, create a `.env.local` file in `apps/web/` with your Formspree endpoint:
```env
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your_endpoint_id
```

### Resume / CV Files
The portfolio conditionally renders "Download CV" buttons based on the presence of the PDF files at build time. Place your files here:
- `apps/web/public/documents/daniel-mira-cv-es.pdf` (Spanish)
- `apps/web/public/documents/daniel-mira-resume-en.pdf` (English)

### Project Assets
Project overview images should be placed in `apps/web/public/projects/`. 
For example, the featured NetSentinel project uses:
- `apps/web/public/projects/netsentinel/overview.webp`

If an image is missing, the portfolio will safely fallback to an accessible icon-based placeholder.

### Development Commands
Run the following commands from the root of the repository:
- `pnpm dev`: Start the development server.
- `pnpm lint`: Run ESLint checks.
- `pnpm typecheck`: Run TypeScript typechecking without emitting files.
- `pnpm build`: Build the production bundle.

---

## License

The source code for this project is publicly visible and available for review. However, all personal content, text, data, and visual resources are reserved © Daniel Mira.
