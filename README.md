# Daniel Mira — Portfolio

> Personal portfolio of **Daniel Mira**, Systems & Computer Engineering Graduate. Purple Team · SOC Analyst · Ethical Hacker · Web Developer.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Turborepo](https://img.shields.io/badge/Turborepo-2-EF4444?logo=turborepo&logoColor=white)](https://turbo.build)
[![pnpm](https://img.shields.io/badge/pnpm-10-F69220?logo=pnpm&logoColor=white)](https://pnpm.io)

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Key Features](#key-features)

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

## Project Structure

```
Portfolio/                          # Monorepo root
├── apps/
│   └── web/                        # Next.js 15 portfolio app
│       ├── public/
│       │   └── profile.jpg         # Profile photo
│       └── src/
│           ├── app/
│           │   ├── [locale]/
│           │   │   ├── layout.tsx  # Locale-aware root layout (Header + Footer)
│           │   │   └── page.tsx    # Home page (all sections assembled)
│           │   ├── globals.css     # Design tokens (CSS variables) + global styles
│           │   ├── layout.tsx      # Root HTML layout (fonts)
│           │   ├── robots.ts       # SEO: robots.txt
│           │   └── sitemap.ts      # SEO: sitemap.xml
│           ├── components/
│           │   ├── layout/
│           │   │   ├── Header.tsx  # Sticky nav with mobile menu + theme/locale toggles
│           │   │   └── Footer.tsx  # Footer
│           │   ├── providers/
│           │   │   └── ThemeProvider.tsx  # next-themes wrapper
│           │   ├── sections/       # One component per page section
│           │   │   ├── Hero.tsx    # Intro with animated profile photo frame
│           │   │   ├── About.tsx   # Bio + values cards
│           │   │   ├── Skills.tsx  # Categorized skill bars
│           │   │   ├── Projects.tsx# Filterable project cards
│           │   │   ├── Experience.tsx     # Timeline of professional experience
│           │   │   └── Contact.tsx # Contact form (Formspree) + social links
│           │   └── shared/         # Reusable UI primitives
│           │       ├── SectionWrapper.tsx # Scroll-triggered fade-in container
│           │       ├── SectionTitle.tsx   # Consistent section headings
│           │       ├── TechBadge.tsx      # Technology tag badge
│           │       ├── ThemeToggle.tsx    # Dark/light mode button
│           │       └── LocaleToggle.tsx   # EN/ES language switcher
│           ├── i18n/
│           │   ├── routing.ts      # Locale config (en, es — default: es)
│           │   └── request.ts      # next-intl server-side setup
│           ├── lib/
│           │   ├── constants.ts    # Skills, projects, experience & social data
│           │   └── utils.ts        # cn() helper (clsx + tailwind-merge)
│           ├── messages/
│           │   ├── en.json         # English translations
│           │   └── es.json         # Spanish translations
│           └── middleware.ts       # next-intl locale detection middleware
├── packages/
│   └── shared/                     # Internal shared package (@portfolio/shared)
│       └── src/
│           └── index.ts            # Shared types & utilities
├── .env.example                    # Environment variable template
├── package.json                    # Root scripts + devDependencies
├── pnpm-workspace.yaml             # pnpm workspace definition
├── turbo.json                      # Turborepo task pipeline
└── README.md
```

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 20.0.0
- **pnpm** ≥ 9.0.0

```bash
# Install pnpm if you don't have it
npm install -g pnpm
```

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/DanielMR-dev/portfolio.git
cd portfolio

# 2. Install all dependencies (all workspaces)
pnpm install

# 3. Set up environment variables
cp .env.example apps/web/.env.local
# Edit apps/web/.env.local with your values (see below)

# 4. Start the development server
pnpm dev
```

The app will be available at **http://localhost:3000**. It redirects to `/es` by default (configurable in `src/i18n/routing.ts`).

---

## Environment Variables

Create `apps/web/.env.local` based on `.env.example`:

```env
# Public base URL (used for sitemap & canonical URLs)
NEXT_PUBLIC_BASE_URL="https://danielmira.dev"

# Formspree endpoint for the contact form
# Get yours at https://formspree.io
NEXT_PUBLIC_FORMSPREE_ENDPOINT="https://formspree.io/f/YOUR_ID"
```

---

## Available Scripts

All scripts are run from the **monorepo root** using Turborepo:

```bash
# Start all apps in development mode (Turbopack)
pnpm dev

# Build all apps for production
pnpm build

# Run ESLint across all packages
pnpm lint

# Format all .ts, .tsx, .json, .md files with Prettier
pnpm format
```

To target only the web app directly:

```bash
cd apps/web

pnpm dev      # Next.js dev server with Turbopack
pnpm build    # Production build
pnpm start    # Start production server
pnpm lint     # ESLint
```

---

## Key Features

- **Monorepo** — Turborepo pipeline with task caching for fast builds
- **Bilingual** — Full EN / ES support via `next-intl` with locale-prefixed URLs (`/en`, `/es`)
- **Dark / Light mode** — Persistent theme via `next-themes`, toggled from the header
- **Animated profile frame** — CSS conic-gradient rotating ring + pulsing glow using Framer Motion
- **Scroll animations** — Sections fade in on scroll with `framer-motion` + `whileInView`
- **Contact form** — Validated with Zod + React Hook Form, submitted to Formspree
- **SEO ready** — Canonical URLs, `sitemap.xml`, `robots.txt`, meta tags per locale
- **Design system** — CSS custom properties for all colors (light & dark), shared via `globals.css`
- **Image optimization** — Next.js `<Image>` with AVIF/WebP formats

---

## License

This project is private. All rights reserved © Daniel Mira.
