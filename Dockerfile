FROM node:lts-slim

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./
RUN npm ci

COPY . .

RUN npm run build

CMD [ "npm", "start" ]