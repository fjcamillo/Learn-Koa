'use strict'

const data = {
  text: 'Text'
}

export async function routes(router){
  router
    .get('/', async (ctx) => {
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
    .get('/body', async (ctx) => {
      console.log(ctx.request.url)
    })
}
