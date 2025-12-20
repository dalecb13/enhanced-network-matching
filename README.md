# Enhanced Network Matching

A SaaS platform for matching users based on their skills, experience, and preferences. Built with NestJS, Prisma, and PostgreSQL.

## Features

- **User Matching System**: Intelligent matching algorithm that pairs users based on skills and preferences
- **Cooldown Management**: Prevents re-matching users within configurable time periods
- **User Feedback**: Collects feedback after matches to improve future matching
- **Free-text Skills & Preferences**: Flexible system using natural language instead of predefined categories
- **External Matching Service Integration**: Designed to work with external intelligent matching services
- **Comprehensive Testing**: Unit tests covering edge cases and validation logic

## Tech Stack

- **Backend**: [NestJS](https://nestjs.com/) - Progressive Node.js framework
- **Database**: [PostgreSQL](https://www.postgresql.org/) 16
- **ORM**: [Prisma](https://www.prisma.io/) - Next-generation ORM
- **Testing**: [Jest](https://jestjs.io/) - JavaScript testing framework
- **Monorepo**: [Turborepo](https://turbo.build/) - High-performance build system
- **Package Manager**: [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager

## Getting Started

### Prerequisites

- Node.js >= 18
- pnpm 8.15.6+
- Docker and Docker Compose (for database)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd enhanced-network-matching
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Start PostgreSQL database:**
   ```bash
   pnpm db:up
   # or
   docker-compose up -d
   ```

4. **Configure database connection:**
   Create a `.env` file in `apps/api/`:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/enhanced_network_matching?schema=public"
   ```

5. **Generate Prisma Client:**
   ```bash
   cd apps/api
   pnpm prisma:generate
   ```

6. **Run database migrations:**
   ```bash
   pnpm prisma:migrate
   ```

7. **Start the development server:**
   ```bash
   # From root
   pnpm dev

   # Or from apps/api
   cd apps/api
   pnpm dev
   ```

The API will be available at `http://localhost:5001`

## Project Structure

```
enhanced-network-matching/
├── apps/
│   ├── api/                    # NestJS API application
│   │   ├── prisma/            # Prisma schema and migrations
│   │   └── src/
│   │       ├── matching/      # Matching service and controller
│   │       ├── prisma/        # Prisma module and service
│   │       ├── types/          # TypeScript type definitions
│   │       └── __tests__/     # Unit tests
│   ├── admin/                  # Vite admin app
│   ├── blog/                   # Remix blog
│   └── storefront/             # Next.js storefront
├── packages/                   # Shared packages
│   ├── config-eslint/         # ESLint configurations
│   ├── config-typescript/     # TypeScript configurations
│   ├── jest-presets/          # Jest presets
│   ├── logger/                # Shared logger utility
│   └── ui/                    # Shared UI components
└── docker-compose.yml         # PostgreSQL database setup
```

## API Endpoints

### Health Check
- `GET /status` - Health check endpoint

### Matching
- `POST /matching/match-all` - Match all active users in the database
  - Returns: Number of matches created, list of matches, and any errors
- `GET /matching/stats` - Get matching statistics
  - Returns: Active users count, pending matches, accepted matches

## Database Management

### Available Scripts

- `pnpm db:up` - Start PostgreSQL container
- `pnpm db:down` - Stop PostgreSQL container
- `pnpm db:logs` - View database logs
- `pnpm db:reset` - Reset database (removes all data)

### Prisma Commands

From `apps/api/` directory:

- `pnpm prisma:generate` - Generate Prisma Client
- `pnpm prisma:migrate` - Run database migrations
- `pnpm prisma:studio` - Open Prisma Studio (database GUI)
- `pnpm prisma:format` - Format Prisma schema

## Development

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests for specific app
cd apps/api
pnpm test
```

### Type Checking

```bash
# Check types for all packages
pnpm check-types

# Check types for specific app
cd apps/api
pnpm check-types
```

### Linting

```bash
# Lint all packages
pnpm lint

# Lint specific app
cd apps/api
pnpm lint
```

## Database Schema

The application uses the following main models:

- **User**: Core user entity with profile information
- **UserSkill**: Free-text skills with experience levels
- **UserPreference**: Free-text preferences for matching
- **Match**: Records of matches between users
- **MatchHistory**: Historical matches for cooldown tracking
- **MatchFeedback**: User feedback on matches
- **SystemConfig**: System-wide configuration

See `apps/api/prisma/schema.prisma` for the complete schema.

## Matching Logic

The matching system:

1. **Validates Users**: Ensures both users are active
2. **Checks Cooldown**: Prevents matching users within their cooldown period
3. **Prevents Duplicates**: Ensures no existing pending/accepted matches
4. **Excludes Invalid Pairs**: Filters out self-matches and inactive users
5. **Creates Matches**: Uses maximum cooldown period from both users

## Testing

The project includes comprehensive unit tests covering:

- Cooldown period enforcement (active, expired, boundary cases)
- User state validation
- Self-matching prevention
- Duplicate match prevention
- Missing data scenarios
- Boundary conditions
- Data integrity edge cases

Run tests with:
```bash
cd apps/api
pnpm test
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Submit a pull request

## License

[Add your license here]

## Apps and Packages

### Apps

- **`api`**: NestJS server with Prisma ORM and user matching functionality
- **`storefront`**: Next.js e-commerce storefront
- **`admin`**: Vite-based admin dashboard
- **`blog`**: Remix blog application

### Packages

- **`@repo/eslint-config`**: Shared ESLint configurations
- **`@repo/jest-presets`**: Jest configuration presets
- **`@repo/logger`**: Isomorphic logger utility
- **`@repo/ui`**: Shared React UI components
- **`@repo/typescript-config`**: Shared TypeScript configurations

## Utilities

This Turborepo includes:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io/) for testing
- [Prettier](https://prettier.io/) for code formatting
- [Turborepo](https://turbo.build/) for monorepo management
