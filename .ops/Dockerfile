FROM node:14.15-alpine as base

WORKDIR /incidents-backend
COPY package*.json /incidents-backend/
RUN npm install && \
    npm ci --only=production
COPY . /incidents-backend/

FROM base as production

ENV NODE_PATH=./dist

RUN npm run build

CMD ["node", "/incidents-backend/dist/bin/www.js"]
