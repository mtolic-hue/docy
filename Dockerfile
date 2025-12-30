# Production Dockerfile for Wasp app (intended for Railway)
# Wasp builds dynamically at runtime, so no pre-build needed.

FROM node:20-alpine

WORKDIR /app
ENV NODE_ENV=production

# Install dependencies
COPY package*.json ./
COPY package-lock.json ./
RUN npm ci --production

# Copy source files and prisma schema
COPY . .

# Generate Prisma client
RUN npx prisma generate || true

# Copy migration wrapper script
COPY .npm-start-with-migrate.sh .

EXPOSE 3000 3001 3002

CMD ["./.npm-start-with-migrate.sh"]
