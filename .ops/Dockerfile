FROM node:14 as base

WORKDIR /poc-incidents_backend
COPY package*.json /poc-incidents_backend/
RUN npm install --production
COPY . /poc-incidents_backend/

FROM base as production

ENV NODE_PATH=./dist

RUN npm run build

CMD ["node", "/poc-incidents_backend/dist/bin/www.js"]
