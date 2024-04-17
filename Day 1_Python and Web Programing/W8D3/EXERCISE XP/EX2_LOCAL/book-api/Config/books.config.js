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
    ssl: { rejectUnauthorized: false },
  },
})

module.exports = {
  db,
}
