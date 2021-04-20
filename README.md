# POC Incidents Backend

Incidents REST and Streaming code. Using Mongo as datasource.

## Start in dev mode

We Assume that [NodeJs 14](https://nodejs.org) is installed in your machine.

Install dependencies:

```
npm install
```

Start server:

```
npm start
```

## Docker startup

Starts the `App` and `Database`:

```
docker-compose -f .ops/docker-compose.yml up -d
```

Starts `Database` only:

```
docker-compose -f .ops/docker-compose.yml up -d database
```

Stop and Remove Docker Containers:

```
docker-compose -f .ops/docker-compose.yml down --rmi local
```
