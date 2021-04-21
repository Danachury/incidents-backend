FROM node:14.16-alpine as base

WORKDIR /app
COPY package*.json ./
RUN npm install && \
    npm ci --only=production
COPY . .

FROM base as production

ENV NODE_PATH=./dist

RUN npm run build

CMD ["node", "./dist/bin/www.js"]
