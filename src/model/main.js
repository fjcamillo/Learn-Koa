'use strict'

import PgAsync from 'pg-async'
export{ SQL } from 'pg-async'
import once from 'once'

import { schema as blogsSchema } from  './blogs'

async function setupSchema(tx) {

  await pg.transaction(async (tx) => {
		for (const schema of schemas) {
			const {drop, create} = schema
			if (drop) {
				for (const q of drop) {
					await tx.query(q)
				}
			}
			if (create) {
				for (const q of create) {
					await tx.query(q)
				}
			}
		}
	})



  // return await tx.query()
}

export async function startPostgres(uri){
  const pg = new PgAsync(uri)
  // const setup = once(setupSchema)
  return async (ctx, next) => {
    await setupSchema(pg)
    return await next()
  }
}

export function postgres(ctx){
  return ctx._postgres
}
