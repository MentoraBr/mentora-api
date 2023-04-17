<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

 <p align="center">API back-end of Mentora application</p>
<p align="center">

[![CI](https://github.com/MentoraBr/mentora-api/actions/workflows/ci.yml/badge.svg)](https://github.com/MentoraBr/mentora-api/actions/workflows/ci.yml)

## Description

- FrameWork: [Nest](https://github.com/nestjs/nest)
- Não sabe NestJS? Tutorial básico: [Programa em Node.js? Então conheça esse framework (NestJS do ZERO)](https://www.youtube.com/watch?v=TRa55WbWnvQ)
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Banco de dados

```bash
# Abrir o gerenciador de banco de dados no browser
$ npx prisma studio

# Roda as migrations de desenvolvimento
$ npx prisma migrate dev

# Configura o Prisma
$ npm prisma init
```
## TO-DO

- [ ] Criar migrations para configurar o banco
- [ ] Criar endpoint para mostrar a listagem padrão da tela pesquisa de mentores
- [ ] Criar endpoint para fazer a pesquisa de mentores
