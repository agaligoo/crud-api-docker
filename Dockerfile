FROM node:18-alpine AS base

RUN apk add --no-cache bash

RUN npm i -g pnpm

# FROM base AS dependencies

# RUN pnpm i -g @nestjs/cli typescript ts-node

FROM base AS build

WORKDIR /usr/src/app

COPY package*.json pnpm*.yaml ./

RUN pnpm i

CMD ["pnpm", "run", "start:dev"]