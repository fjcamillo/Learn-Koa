'use strict'

import Koa from 'koa'
import Router from 'koa-router'

import { routes as indexRoutes } from './src/routes/index'
import { routes as blogsRoutes } from './src/routes/blogs'

import { startPostgres } from './src/model/main'

import pgAsync from 'pg-async'
const koa = new Koa()
const app = new Router({
  // prefix:"/fjcamillo/"
})

const uri = {
  postgres_docker: 'postgres://postgres@localhost:5432/koastudy',
  local: {
    user: 'fjcamillo',
    host: 'localhost',
    port: '5432',
    database: 'koastudy'
  }
}



const db = {
  user: 'fjcamillo',
  host: 'localhost',
  port: 5432,
  database: 'koastudy',
}

for (const route of [indexRoutes, blogsRoutes]) {
  route(app)
}

// app.use()

koa.use(startPostgres(uri.postgres_docker))
  .use(app.routes())
  .use(app.allowedMethods())

koa.listen(3001)
