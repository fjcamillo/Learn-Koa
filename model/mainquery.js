'use strict'

import PgAsync, { SQL } from 'pg-async'

const uri = 'postgres://postgres@localhost:5432/koastudy'

export async function startPostgres(pg, ctx){
  const pg = new PgAsync(uri)
  ctx._postgres = pg
}

export function postgres(ctx){
  return ctx._postgres
}
