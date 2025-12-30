# Production Dockerfile for Wasp app (intended for Railway)
# This image builds the app and runs with migrations on startup.

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

# Copy migration wrapper script
COPY .npm-start-with-migrate.sh .

EXPOSE 3000 3001 3002

CMD ["./.npm-start-with-migrate.sh"]
