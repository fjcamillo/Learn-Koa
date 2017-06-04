'use strict'

import Koa from 'koa'
import Router from 'koa-router'

import { routes as indexRoutes } from './routes/index'
import { routes as blogsRoutes } from './routes/blogs'

const koa = new Koa()
const app = new Router({
  // prefix:"/fjcamillo/"
})

const data = {
  text: 'Text'
}

for (const route in [indexRoutes, blogsRoutes]) {
  route(app)
}



koa.use(app.routes())
koa.listen(3001)
