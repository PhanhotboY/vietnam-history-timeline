FROM node:22-alpine

WORKDIR /app/user

COPY ./package.json .
COPY ./bun.lock .

RUN if [ -f ./bun.lock ]; then \
      if ! command -v bun >/dev/null 2>&1; then \
        npm install -g bun; \
      fi; \ 
      bun install; \
    else \
      npm install; \
    fi

COPY . .

ENV NODE_ENV=production
ENV NODE_PORT=3002

EXPOSE 3002

CMD ["bun", "start:prod"]