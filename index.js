'use strict'

import Koa from 'koa'
import Router from 'koa-router'

import { routes as indexRoutes } from './src/routes/index'
import { routes as blogsRoutes } from './src/routes/blogs'

const koa = new Koa()
const app = new Router({
  // prefix:"/fjcamillo/"
})



for (const route of [indexRoutes, blogsRoutes]) {
  route(app)
}



koa.use(app.routes())
koa.listen(3001)
