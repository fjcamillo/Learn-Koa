'use strict'

import Koa from 'koa'
import Router from 'koa-router'

const koa = new Koa()
const app = new Router()

app.get('/', async (ctx) => {
  ctx.body = "Hello World!"
})

koa.use(app.routes())
koa.listen(3001)
