FROM node:14.15-alpine

WORKDIR /poc-incidents_backend

COPY src/ /poc-incidents_backend/src/
COPY bin/ /poc-incidents_backend/bin/
COPY package*.json /poc-incidents_backend/

RUN npm install && \
    npm ci --only=production

ENV PORT 3000
EXPOSE 3000

CMD ["node", "/poc-incidents_backend/bin/www"]
