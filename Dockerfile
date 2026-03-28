FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npx prisma generate && npm run build

FROM node:22-alpine
RUN apk add --no-cache curl
WORKDIR /app
ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=3000
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma
COPY --from=builder /app/node_modules/prisma ./node_modules/prisma
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/package.json ./package.json

# Create a simple migration script that uses the prisma binary directly
RUN echo '#!/bin/sh' > /app/start.sh && \
    echo 'node ./node_modules/prisma/build/index.js migrate deploy && node server.js' >> /app/start.sh && \
    chmod +x /app/start.sh

EXPOSE 3000
CMD ["/app/start.sh"]
