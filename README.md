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
