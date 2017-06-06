'use strict'

export const schema = {
  create: [
        `
        CREATE TABLE blogs (
          id int primary key not null,
          title text not null,
          data jsonb not null
        )`
  ]
}
