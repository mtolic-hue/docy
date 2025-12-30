#!/bin/bash
set -e

# Run migrations if DATABASE_URL is set (i.e., on Railway)
if [ -n "$DATABASE_URL" ]; then
  echo "Running migrations..."
  npx prisma migrate deploy --schema=./schema.prisma || true
else
  echo "DATABASE_URL not set; skipping migrations"
fi

# Start the app
npm run start
