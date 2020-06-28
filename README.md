# Z RTC

A Project to play around with RTC

## Architecture

ZRTC is composed of 2 npm projects a front-end (`client/`) and a backend (`server/`).

Both projects are installed with 


## Getting Started

### Using Docker

Both client and server are Dockerized, and a `docker-compose.yml` ties them together so the project can be started with a single command.

```console
$ docker-compose up --build
```

### Using NPM

If not using `docker-compose`, you have to treat the client and server separately, using 2 different terminal sessions if you want to do development with both.

#### The server

```console
$ cd server/
$ npm install
$ npm start
```

#### The client

```console
$ cd client/
$ npm install
$ npm start
```
