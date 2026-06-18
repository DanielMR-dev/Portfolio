---
name: portfolio-standards
description: Shared development standards for all Portfolio agents. Covers project conventions, stack rules, TypeScript strictness, code quality gates, testing standards, naming conventions, and Git workflow. Always apply this skill when working on any part of this project.
compatibility: opencode
---

## Language and environment

- **Language**: TypeScript (strict mode — `"strict": true` in tsconfig, no `any` ever)
- **Frontend**: Next.js 15 with App Router — never Pages Router
- **Package manager**: pnpm — never npm or yarn
- **Node version**: 20 LTS (minimum)

---

## Project structure

```
/                                   # Monorepo root
├── apps/
│   └── web/                        # Next.js 15 portfolio app
│       ├── public/                 # Static assets
│       └── src/
│           ├── app/                # Routes, layouts, pages
│           │   ├── globals.css     # Global styles & design tokens
│           │   ├── layout.tsx      # Root HTML layout (fonts)
│           │   └── [locale]/       # Bilingual pages (EN/ES)
│           ├── components/         # Reusable UI components
│           │   ├── layout/         # Header, Footer, etc.
│           │   ├── sections/       # Hero, About, Projects, Experience, Contact
│           │   └── shared/         # Common primitive sub-components
│           ├── i18n/               # next-intl configuration
│           ├── lib/                # helper constants and utilities
│           └── messages/           # Translation JSON files (en.json, es.json)
│
└── packages/
    └── shared/                     # Internal shared package (@portfolio/shared)
        └── src/
            └── index.ts            # Shared types & utilities
```

---

## Naming conventions

```
PascalCase        → React components, TypeScript interfaces/types
camelCase         → functions, variables, props, object keys
kebab-case        → file names, folder names, CSS class names
SCREAMING_SNAKE   → environment variables, global constants
use + PascalCase  → custom React hooks (e.g. useProjects, useAuth)
```

### File naming examples
```
✓  ProjectCard.tsx           ← React component
✓  useProjects.ts            ← custom hook
✗  projectcard.tsx           ← wrong case
```

---

## TypeScript rules

- `"strict": true` is mandatory in every `tsconfig.json` — no exceptions
- **Never use `any`** — use `unknown` and narrow, or define a proper type/interface
- **Never use type assertions (`as SomeType`)** without a comment explaining why it is safe
- Prefer `interface` over `type` for object shapes that may be extended
- Use `type` for unions, intersections, and utility types
- All function parameters and return types must be explicitly typed — no implicit returns
- Shared types between workspaces live in `packages/shared` and are imported from `@portfolio/shared`

```typescript
// WRONG
const data = response as any;

// CORRECT
interface ApiResponse<T> {
  data: T;
  message: string;
}
const data: ApiResponse<Project> = response;
```

---

## Frontend rules (Next.js 15 + React)

### Component structure
```typescript
// Props interface BEFORE the component, always
interface ProjectCardProps {
  /** The project data to display */
  project: Project;
  /** Whether the card is in a loading state */
  isLoading?: boolean;
}

// Named export + default export
export function ProjectCard({ project, isLoading = false }: ProjectCardProps) {
  // ...
}

export default ProjectCard;
```

### Server vs Client Components
- **Server Components by default** — add `'use client'` ONLY when required
- `'use client'` is required when: using `useState`, `useEffect`, `useRef`, event handlers, browser APIs
- Never add `'use client'` to a component just because a child needs it — extract the interactive part instead
- Data fetching happens in Server Components — never `useEffect` for initial data fetch

### Data fetching
```typescript
// CORRECT — Server Component fetches data directly
async function ProjectsPage() {
  const projects = await getProjects(); // server-side fetch
  return <ProjectList projects={projects} />;
}

// WRONG — Client Component fetching initial data with useEffect
'use client';
function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  useEffect(() => { fetchProjects().then(setProjects); }, []); // never do this for initial load
}
```

### Styling
- **Tailwind CSS** for all styling — no inline styles, no CSS modules unless absolutely necessary
- **shadcn/ui** components are in `components/ui/` — never modify them directly; wrap them instead
- Use `cn()` utility (from `lib/utils.ts`) for conditional class merging

### Accessibility
- All interactive elements must have `aria-label` or visible text
- Use semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`
- Images must have meaningful `alt` text — never empty or `alt="image"`
- Focus management on modals and dialogs must be handled correctly

---

## Code quality gates

All code produced or modified must pass these checks before being considered complete:

```bash
# Frontend (web app)
pnpm --filter web type-check      # tsc --noEmit — zero errors
pnpm --filter web lint            # ESLint — zero warnings, zero errors
pnpm --filter web build           # production build must succeed

# Shared Package
pnpm --filter shared type-check    # tsc --noEmit — zero errors
```

No `// eslint-disable` comments without an inline explanation of why the rule is a false positive in that specific case.

---

## Testing rules

### Frontend (React Testing Library + Jest / Vitest)
- Test user interactions, not implementation details
- Never test internal state — test what the user sees
- Use `screen.getByRole` and `screen.getByLabelText` over `getByTestId`
- Mock API calls at the network level with `msw`

```typescript
// CORRECT — tests behavior from the user's perspective
it('shows project title after loading', async () => {
  render(<ProjectCard project={mockProject} />);
  expect(await screen.findByText(mockProject.title)).toBeInTheDocument();
});

// WRONG — tests implementation detail
it('sets isLoading to false after fetch', () => {
  // Testing state directly is an anti-pattern
});
```

---

## Environment and configuration

- **Never hardcode secrets** — all secrets live in `.env` files (gitignored)
- `.env.example` documents every variable with a description — keep it up to date
- Frontend env vars exposed to the browser must be prefixed with `NEXT_PUBLIC_`
- Never commit `.env`, `.env.local`, or any file with real credentials

---

## Git and versioning

- Commit messages follow **Conventional Commits**: `feat:`, `fix:`, `refactor:`, `docs:`, `test:`, `chore:`
- Every feature branch targets `main`
- Branch naming: `feat/feature-name`, `fix/bug-name`, `chore/task-name`
- Pull requests require: passing CI, no TypeScript errors, no lint errors

---

## Import organization

Imports must be ordered in this sequence (ESLint enforces this):

```typescript
// 1. Node built-ins
import { join } from 'path';

// 2. External packages
import { useState } from 'react';
import { motion } from 'framer-motion';

// 3. Shared workspace packages
import type { Project } from '@portfolio/shared';

// 4. Internal absolute imports (using path aliases)
import { cn } from '@/lib/utils';

// 5. Relative imports
import { ProjectCard } from './ProjectCard';
```

---

## What all agents must respect

1. **Planner** defines feature architecture before any code is written — Developer does not deviate without flagging the change
2. **Developer** produces code that passes all quality gates before handoff to the Reviewer
3. **Reviewer** blocks any code with CRITICAL or HIGH issues — no exceptions
4. All agents share this skill file as the single source of truth for project standards
5. When this skill conflicts with an agent's own instructions, **this skill takes precedence**