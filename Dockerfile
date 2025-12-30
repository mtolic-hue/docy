# Production Dockerfile for Wasp app (intended for Railway)
# This image builds the app and runs the Wasp start command.

FROM node:20-alpine AS builder

WORKDIR /app

# Install dev dependencies to build and generate Prisma client
COPY package*.json ./
COPY package-lock.json ./
RUN npm ci

# Copy source and generate Prisma client, then build the app
COPY . .
RUN npx prisma generate || true
RUN npm run build

FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production

# Copy built app from builder
COPY --from=builder /app .

# Install only production deps
RUN npm ci --production

EXPOSE 3000 3001 3002

CMD ["npm", "run", "start"]

# Install deps (including the local wasp SDK path)
RUN npm ci --production

# Expose the default ports the dev server may use (Railway will map)
EXPOSE 3000 3001 3002

ENV NODE_ENV=production

# Expect Railway to set DATABASE_URL env var. Do not run migrations here automatically.
CMD ["npm", "run", "start"]
