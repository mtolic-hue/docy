# Production Dockerfile for Wasp app (intended for Railway)
# This image builds the app and runs the Wasp start command.

FROM node:20-alpine

WORKDIR /app

# Install system deps needed by some packages
RUN apk add --no-cache bash git openssh

# Copy package files first for cached installs
COPY package.json package-lock.json ./

# Copy the entire project (including .wasp) so local wasp SDK is available
COPY . .

# Install deps (including the local wasp SDK path)
RUN npm ci --production

# Expose the default ports the dev server may use (Railway will map)
EXPOSE 3000 3001 3002

ENV NODE_ENV=production

# Expect Railway to set DATABASE_URL env var. Do not run migrations here automatically.
CMD ["npm", "run", "start"]
