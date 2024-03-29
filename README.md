# POC Incidents Backend

Incidents REST and Streaming code. Using Mongo as datasource.

## Start in dev mode

We Assume that [NodeJs 14](https://nodejs.org) is installed in your machine.

Install dependencies:

```shell
npm install
```

Start server:

```shell
npm start
```

## Docker startup

Starts the `App` and `Database`:

```shell
docker-compose -f .ops/docker-compose.yml up --build -d
```

Starts `Database` only:

```shell
docker-compose -f .ops/docker-compose.yml up -d database
```

Stop and Remove Docker Containers:

```shell
docker-compose -f .ops/docker-compose.yml down --rmi local
```

## API Documentation

You can find API's documentation after starting `App` at: ``http://localhost:3000/docs``
