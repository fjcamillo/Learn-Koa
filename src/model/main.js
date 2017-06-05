'use strict'

import PgAsync from 'pg-async'
export{ SQL } from 'pg-async'
import once from 'once'



async function setupSchema(tx) {
  return await tx.query(`
      CREATE TABLE blogs (
        id int primary key not null,
        title text not null,
        data jsonb not null
      )`)
}

export async function startPostgres(uri){
  const pg = new PgAsync(uri)
  // pg.query(`
  //   create table blogs (
  //     id int primary key not null,
  //     title text not null,
  //     data jsonb not null
  //   )
  //   `)
  const setup = once(setupSchema)
  // ctx._postgres = pg

  return async (ctx, next) => {
    await setup(pg)
    return await next()
  }
}

export function postgres(ctx){
  return ctx._postgres
}
