# Portfolio Project

## Stack
- Frontend: Next.js 15 + TypeScript + TailwindCSS + shadcn/ui
- Backend: NestJS + TypeScript + Prisma + PostgreSQL
- Deploy: Vercel (frontend) + Railway/Render (backend)

## Estructura del proyecto
- /frontend → Next.js App Router
- /backend → NestJS API REST
- /shared → tipos TypeScript compartidos

## Convenciones
- Componentes en PascalCase
- Hooks con prefijo "use"
- DTOs con sufijo "Dto"
- Endpoints RESTful en kebab-case
- Commits en Conventional Commits (feat:, fix:, chore:)

## Lo que NO hacer
- No usar Pages Router, solo App Router
- No usar JavaScript puro, siempre TypeScript estricto
- No instalar librerías sin consultarme primero

## Comandos importantes
- `pnpm dev` → levantar frontend
- `pnpm start:dev` → levantar backend
- `pnpm build` → build de producción