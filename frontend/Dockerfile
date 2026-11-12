FROM node:22.23.5-slim

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
