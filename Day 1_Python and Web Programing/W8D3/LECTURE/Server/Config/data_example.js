//syntax to bring in database
const knex = require('knex')
const dotenv = require('dotenv')
dotenv.config()

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT } = process.env

const db = knex({
  client: 'pg', //postgres pg admin
  connection: {
    host: PGHOST, //from pgadmin database properties
    port: PGPORT,
    user: PGUSER,
    database: PGDATABASE,
    password: PGPASSWORD,
  },
})

//old hardcoded
// const products = [
//   { id: 102, name: 'iphone', email: ' email@email.com' },
//   { id: 103, name: 'ipad', email: ' aa@email.com' },
// ]

// const users = [
//   { id: 102, name: 'john', email: ' email@email.com' },
//   { id: 103, name: 'anne', email: ' aa@email.com' },
// ]

module.exports = {
  // products,
  // users,
  db,
}
