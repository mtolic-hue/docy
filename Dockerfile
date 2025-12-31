FROM node:20.0.0-alpine3.17 AS base
RUN apk --no-cache -U upgrade

# Build the already-generated Wasp server bundle that lives in /server
FROM base AS server-builder
RUN apk add --no-cache python3 build-base libtool autoconf automake openssl1.1-compat
WORKDIR /app
COPY server/package.json server/package-lock.json server/tsconfig.json server/rollup.config.js server/.npmrc ./
COPY sdk/wasp ./sdk/wasp
COPY server/src ./src
# Copy app source to /src so generated imports like '../../../../../src/...'
# resolve during server build.
COPY src /src
COPY db ./db
RUN npm ci
RUN npx prisma generate --schema=./db/schema.prisma
RUN npm run bundle

FROM base AS server-production
RUN apk add --no-cache python3 openssl1.1-compat
ENV NODE_ENV=production
WORKDIR /app
COPY --from=server-builder /app/node_modules ./node_modules
COPY --from=server-builder /app/bundle ./bundle
COPY --from=server-builder /app/db ./db
COPY --from=server-builder /app/sdk ./sdk
COPY server/package.json server/.npmrc ./

ENV PORT=3001
EXPOSE 3001

# Run migrations then start the bundled server
CMD sh -c "npx prisma migrate deploy --schema='./db/schema.prisma' && npm run start"
