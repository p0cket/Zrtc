# Z RTC

![CI](https://github.com/p0cket/Zrtc/workflows/CI/badge.svg)


A Project to play around with RTC

## Architecture

ZRTC is composed of 2 npm projects a front-end (`client/`) and a backend (`server/`).

## Getting Started

### Using Docker

Both client and server are Dockerized, and a `docker-compose.yml` ties them together so the project can be started with a single command.

```console
$ docker-compose up --build
```

### Using NPM

If not using `docker-compose`, you have to treat the client and server separately, using 2 different terminal sessions if you want to do development with both.

#### pre-reqs

Using the current NodeJS LTS version is reccomended. At the time of writing, it is NodeJS v12. Verify your current version with `node --version`

> Tip: Consider using a tool like [`nvm`](https://github.com/nvm-sh/nvm) to manage your node versions.

#### The server

##### Install dependencies

```console
$ cd server/
$ npm install
```

##### npm scripts

> Tip: run `$ npm run` to see all the available npm scripts in a node project.

- `$ npm start`: runs the server in dev-mode with file-watching and auto-reload (alias for `npm run start:dev`)
- `$ npm test`: runs the unit test suite
- `$ npm run start:dev` - starts the server in dev-mode with file-watching and auto-reload (use `npm start` as a shortcut)
- `$ npm run start:prod` - runs the server in prod-mode
- `$ npm run docker-build:dev` - builds the docker image
- `$ npm run docker-run:dev` runs the docker image

#### The client

##### Install dependencies

```console
$ cd client/
$ npm install
```

##### npm scripts

> Tip: run `$ npm run` to see all the available npm scripts in a node project.

- `$ npm start` - runs client in dev-mode
- `$ npm test` - runs unit test suite
- `$ npm run build` - builds the client for distribution
- `$ npm run docker-build:dev` - builds the (dev) docker image
- `$ npm run docker-run:dev` - runs the dev docker image
