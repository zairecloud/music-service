FROM node:lts-slim

WORKDIR /app

COPY package*.json ./
RUN npm ci
RUN npm run build

COPY . .

CMD [ "npm", "start" ]