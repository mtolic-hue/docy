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

EXPOSE 3000 3001 3002

# Run migrations (if DATABASE_URL exists) then start the app
CMD ["sh", "-c", "if [ -n \"$DATABASE_URL\" ]; then npx prisma migrate deploy --schema=./schema.prisma || true; fi && npm run start"]
