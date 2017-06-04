'use strict'

import Koa from 'koa'
import Router from 'koa-router'

import { routes as indexRoutes } from './src/routes/index'
import { routes as blogsRoutes } from './src/routes/blogs'

import { startPostgres } from './src/model/main'

const koa = new Koa()
const app = new Router({
  // prefix:"/fjcamillo/"
})


for (const route of [indexRoutes, blogsRoutes]) {
  route(app)
}

// app.use()


koa.use(app.routes())
koa.use(startPostgres)
koa.listen(3001)
