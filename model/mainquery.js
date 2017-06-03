'use strict'

import PgAsync, { SQL } from 'pg-async'
import once from 'once'

const uri = 'postgres://postgres@localhost:5432/koastudy'

function setupSchema() {
  return (tx) => {
    tx.query(`
      CREATE TABLE blogs (
        id int primary key not null,
        title text not null,
        data jsonb not null
      )
      `)
  }
}

export async function startPostgres(pg, ctx){
  const pg = new PgAsync(uri)
  ctx._postgres = pg
}

export function postgres(ctx){
  return ctx._postgres
}
