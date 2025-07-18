# next-prisma-auth-starter

Modern fullstack starter template with Next.js 14 (App Router), Prisma ORM, stack-auth for authentication, and Shadcn UI for components. Ideal for scalable, maintainable web apps.

---

## Features

- Next.js 14 with App Router (no `src/` folder)
- TypeScript
- Tailwind CSS styling
- Shadcn UI components
- stack-auth (OAuth authentication, e.g. GitHub)
- Prisma ORM with PostgreSQL or SQLite
- ESLint & Prettier for clean code
- Git-ready for easy version control

---

## Installation

1. Clone the repository

```
git clone https://github.com/your-username/next-prisma-auth-starter.git
cd next-prisma-auth-starter
```

2. Install dependencies

```
npm install
```

3. Create `.env` file

Copy `.env.example` to `.env` and adjust your environment variables:

```
cp .env.example .env
```

Example for SQLite:

```
DATABASE_URL="file:./dev.db"
```

Or for PostgreSQL:

```
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
```

4. Run Prisma migration

```
npx prisma migrate dev --name init
```

5. Start development server

```
npm run dev
```

---

## Folder Structure (Brief Overview)

```
/app # Next.js App Router pages & API routes
/components # UI components (Shadcn UI)
/prisma # Prisma schema & migrations
.env # Environment variables (don’t commit! Use .env.local for secrets)
```

---

## Authentication

- Implemented with [stack-auth](https://stack-auth.com/)

---

## Deployment

- Ready for Vercel or other hosts
- Make sure to set environment variables correctly in your deployment dashboard

---

## Contributing

Contributions are welcome! Please fork and open a pull request.

---

## License

MIT © Nicola Morganti
