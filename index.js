'use strict'

import Koa from 'koa'
import Router from 'koa-router'

// import { startPostgres } from './src/mainquery'

const koa = new Koa()
const app = new Router({
  // prefix:"/fjcamillo/"
})

const data = {
  text: 'Text'
}

app.get('/', async (ctx) => {
  ctx.body = "Hello World!"
  console.log(ctx)
})
.get('/test', async (ctx) => {
  ctx.body = data.text
})
.get('/name/:id', async (ctx) => {
  data.text = ctx.params.id
})
.post('/post', async (ctx) => {
  // data.text = ctx.params.id
})

koa.use(app.routes())
koa.listen(3001)
