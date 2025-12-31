# This Dockerfile should be used from the .wasp/build directory (after running wasp build)
# It's based on Wasp's official production Dockerfile

FROM node:20.0.0-alpine3.17 AS base
RUN apk --no-cache -U upgrade

FROM base AS server-builder
RUN apk add --no-cache python3 build-base libtool autoconf automake openssl1.1-compat
WORKDIR /app
COPY src ./src
COPY package.json package-lock.json tsconfig*.json ./
COPY server .wasp/build/server
COPY sdk .wasp/out/sdk
RUN npm install && cd .wasp/build/server && npm install
COPY db/schema.prisma .wasp/build/db/
RUN cd .wasp/build/server && npx prisma generate --schema='../db/schema.prisma'
RUN cd .wasp/build/server && npm run bundle

FROM base AS server-production
RUN apk add --no-cache python3 openssl1.1-compat
ENV NODE_ENV=production
WORKDIR /app
COPY --from=server-builder /app/node_modules ./node_modules
COPY --from=server-builder /app/.wasp/build/server/node_modules .wasp/build/server/node_modules
COPY --from=server-builder /app/.wasp/build/server/bundle .wasp/build/server/bundle
COPY --from=server-builder /app/.wasp/build/db/schema.prisma .wasp/build/db/schema.prisma
COPY db ./db

ENV PORT=3001
EXPOSE 3001
WORKDIR /app/.wasp/build/server

# Run migrations then start
CMD sh -c "npx prisma migrate deploy --schema='../db/schema.prisma' && npm run start-production"
