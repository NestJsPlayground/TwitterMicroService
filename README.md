[![Build Status](https://travis-ci.org/NestJsPlayground/JobMicroService.svg?branch=master)](https://travis-ci.org/NestJsPlayground/JobMicroService)

# Register jobs microservice

**I created this seed for my educational purposes. Some design decisions will not make sense as why I used consul if kubernetes is already providing service discovery...** So if you use this seed you will probably have to do some clean ups.

<div align="center">
  <img src="http://kamilmysliwiec.com/public/nest-logo.png" width="100">
  <img src="https://github.com/kubernetes/kubernetes/raw/master/logo/logo.png" width="50">
</div>


## Features

- jest
- mongodb
- swagger
- consul
- travis
- docker
- kubernetes
  
  
## Installation
```bash
$ yarn install
```
> Note: you will need docker & docker-compose.


## Start (for developing)

```
$ ./dev.ts
$ npm run start
```

## Start (prod mode)

```typescript
$ docker-compose build && docker-compose up
```

## Deployment

Go to `kubernetes/` folder and use `kubectl apply -f` command for each yaml file.


