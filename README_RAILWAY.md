Railway deployment guide

Overview

This project is a Wasp app configured for local development with SQLite. To deploy on Railway you should use a Postgres database. This repository has been updated to use PostgreSQL as the Prisma provider; Railway will provide a `DATABASE_URL` that points to Postgres.

Steps to deploy on Railway

1. Create a new Railway project and add a Postgres plugin (managed database).

2. Set environment variables in Railway (Project > Variables):
   - `DATABASE_URL` → copy the connection string from the Railway Postgres plugin.
   - (Optional) add other env vars your app uses (e.g. `.env` values).

3. Add a Docker deployment on Railway (recommended):
   - Railway will detect the `Dockerfile` at repository root.
   - Build & deploy. Railway will run `npm run start` as defined in `package.json`.

4. Apply Prisma migrations on the Railway database:
   - Locally, after setting `DATABASE_URL` to the Railway DB, run:

```bash
# Set DATABASE_URL to Railway connection string locally (example)
export DATABASE_URL="postgresql://..."

# Generate Prisma client and apply migrations
npx prisma generate
npx prisma migrate deploy
```

Alternatively, you can run migrations from a Railway Console or run a one-off deploy shell in Railway to execute the above commands against the production DB.

Notes and caveats

- The project includes a local `wasp` SDK referenced as a file in `.wasp/out/sdk/wasp`. The Dockerfile copies the whole repo so that local SDK is available during the image build. If you prefer, you can publish the Wasp SDK to a registry or adjust the dependency before deploying.

- The app exposes `3000/3001/3002` — Railway will map an external port to the container. Open the Railway deployment URL (it will proxy to the running container).

- For production, ensure you have secure values for email sending and any secrets.

- I did not run migrations against Railway DB — you must apply migrations after setting `DATABASE_URL`.

Quick checklist

- [ ] Create Railway project and Postgres plugin
- [ ] Set `DATABASE_URL` in Railway
- [ ] Deploy using the provided `Dockerfile`
- [ ] Run `npx prisma migrate deploy` (or `wasp db migrate-prod` if preferred) on Railway DB
- [ ] Open deployment URL and verify app

If you want, I can:
- Add a Railway `railway.json` manifest.
- Run a local test build and a dry-run of the Prisma client generation.
- Help with a one-off migration step for Railway (you'll need to provide the `DATABASE_URL`).
