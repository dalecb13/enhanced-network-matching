# Turborepo kitchen sink starter

This Turborepo starter is maintained by the Turborepo core team.

This example also shows how to use [Workspace Configurations](https://turborepo.com/docs/core-concepts/monorepos/configuring-workspaces).

## Using this example

Run the following command:

```sh
npx create-turbo@latest -e kitchen-sink
```

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `api`: a [NestJS](https://nestjs.com/) server with Prisma ORM
- `storefront`: a [Next.js](https://nextjs.org/) app
- `admin`: a [Vite](https://vitejs.dev/) single page app
- `blog`: a [Remix](https://remix.run/) blog
- `@repo/eslint-config`: ESLint configurations used throughout the monorepo
- `@repo/jest-presets`: Jest configurations
- `@repo/logger`: isomorphic logger (a small wrapper around console.log)
- `@repo/ui`: a dummy React UI library (which contains `<CounterButton>` and `<Link>` components)
- `@repo/typescript-config`: tsconfig.json's used throughout the monorepo

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting

## Database Setup

The API uses PostgreSQL with Prisma ORM. To set up the database:

1. **Start PostgreSQL with Docker Compose:**
   ```bash
   docker-compose up -d
   ```

2. **Configure the database connection:**
   Create a `.env` file in `apps/api/` with:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/enhanced_network_matching?schema=public"
   ```

3. **Generate Prisma Client:**
   ```bash
   cd apps/api
   pnpm prisma:generate
   ```

4. **Run migrations:**
   ```bash
   pnpm prisma:migrate
   ```

5. **Optional: Open Prisma Studio to view data:**
   ```bash
   pnpm prisma:studio
   ```

The Docker Compose setup includes:
- PostgreSQL 16 (Alpine)
- Persistent data volume
- Health checks
- Port 5432 exposed to host
