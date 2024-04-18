const knex = require('knex')

// //connect to your database syntax
const db = knex({
  client: 'pg', //postgres pg admin
  connection: {
    host: 'localhost', //from pgadmin database properties
    port: 5432,
    user: 'postgres',
    database: 'Node W8D3',
    password: 'Mycollege1!',
    ssl: { rejectUnauthorized: false },
  },
})

//my cloud DB
PGHOST = 'ep-falling-thunder-a24uwioi.eu-central-1.aws.neon.tech'
PGDATABASE = 'neondb'
PGUSER = 'neondb_owner'
PGPASSWORD = 'njLer6pFK9ag'

//every querry in knex needs to be resolved with a promise (async, await/.then)
//this will confirm we have a connection
// async function getVersion() {
//   const result = await db.raw(`select version()`)
  // console.log(result) //everything
//   console.log(result.rows) //get only rows in json object which is the version
// }
// async function getProducts() {
//   const result = await db.raw(`select * from products`)
//   console.log(result.rows)
// }
// getVersion() //everything
/*
Result {
  command: 'SELECT',
  rowCount: 1,
  oid: null,
  rows: [
    {
      version: 'PostgreSQL 16.2 on x86_64-apple-darwin20.6.0, compiled by Apple clang version 12.0.5 (clang-1205.0.22.9), 64-bit'
    }
  ],
  fields: [
    Field {
      name: 'version',
      tableID: 0,
      columnID: 0,
      dataTypeID: 25,
      dataTypeSize: -1,
      dataTypeModifier: -1,
      format: 'text'
    }
  ],
  _parsers: [ [Function: noParse] ],
  _types: TypeOverrides {
    _types: {
      getTypeParser: [Function: getTypeParser],
      setTypeParser: [Function: setTypeParser],
      arrayParser: [Object],
      builtins: [Object]
    },
    text: {},
    binary: {}
  },
  RowCtor: null,
  rowAsArray: false,
  _prebuiltEmptyResultObject: { version: null }
}
 */

// getVersion() //version
/*
[
  {
    version: 'PostgreSQL 16.2 on x86_64-apple-darwin20.6.0, compiled by Apple clang version 12.0.5 (clang-1205.0.22.9), 64-bit'
  }
] */

// getProducts()

//query builder
// db('products')
//   .select('id', 'name')
//   .where({ id: 3 })
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
// //[ { id: 3, name: 'iWatch' } ]

// //order products
// db('products')
//   .orderBy('name')
//   .then((data) => {
//     //promise
//     console.log(data)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
// // [
// //   { id: 2, name: 'iPad', price: 700 },
// //   { id: 1, name: 'iPhone', price: 800 },
// //   { id: 3, name: 'iWatch', price: 500 }
// // ]
// db('products')
//   .orderBy('name')
//   .select('price') //select no *
//   .then((data) => {
//     //promise
//     console.log(data)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
// //[ { price: 700 }, { price: 800 }, { price: 500 } ]

// //insert array of products, after is where we see id
// db('products')
//   .insert(
//     [
//       { name: 'samsung s23', price: 1002 },
//       { name: 'samsung s24', price: 1500 },
//     ],
//     ['id']
//   )
//   .then((data) => {
//     //promise
//     console.log(data)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
// //update an existing product
// db('products')
//   .update({ name: 'iphone 15' }, ['id', 'name'])
//   .where({ id: 1 })
//   .then((data) => {
//     //promise
//     console.log(data)
//   })
//   .catch((error) => {
//     console.log(error)
//   })

//   //delete an item

//   db('products')
//   .where({ id: 2 }) //deletes the id
//   .del()
//   .returning('*') //returns the WHOLE row that was just deleted. CAN ALSO USE THIS WHEN INSERTING AND UPDATING ITEMS
//   .then((data) => {
//     //promise
//     console.log(data)
//   })
//   .catch((error) => {
//     console.log(error)
//   })

//WITH POSTGRES

const postgres = require('postgres')
const { param } = require('../Server/Routes/products.route')

const sql = postgres({
  host: 'localhost', //from pgadmin database properties
  database: 'Node W8D3',
  port: 5432,
  username: 'postgres',
  password: 'Mycollege1!',
})
// async function getVersion() {
//   const result = await sql`select * from products where id = 3`
//   // console.log(result) //everything
//   console.log(result) //get only rows in json object which is the version
// }

// getVersion()

//Raw Parameter Binding method. Question mark points to querry in caches

// async function getVersion(params) {
//   const result = await db.raw(
//     `select id, name, price from products where id = ? and name = ?`, // Question mark allows it to be faster than just looking for $[params]
//     [params[0], params[1]]
//   )

//   console.log(result)
// }

// getVersion(7, 'iphone')

//advance Transaction and Rollback
const test = async () => {
  try {
    const trx = await db.transaction()

    const product1 = await db('products')
      .insert({ name: 'aaa', price: 111 }, ['id'])
      .transacting(trx)

    console.log('product1', product1)

    const product2 = await db('products')
      .insert({ name: 'bbb', price: 222 }, ['*'])
      .transacting(trx)
    console.log('product2', product2)

    await trx.commit() //depending on if you are commiting or rolling back these
    // await trx.rollback()
  } catch (error) {
    console.log(error)
    await trx.rollback()
  }
}

test()


//more transaction test

const express = require('express');
const knex = require('knex');

const app = express();

// Initialize Knex.js with your database configuration
const db = knex({
  client: 'mysql', // or any other supported client
  connection: {
    host: 'your-database-host',
    user: 'your-database-user',
    password: 'your-database-password',
    database: 'your-database-name'
  }
});


// Other CRUD endpoints without transactions
// ...

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


//using cloud neon connection

const db = knex({
  client: 'pg', //postgres pg admin
  connection: {
    connectionString:
      'postgresql://neondb_owner:njLer6pFK9ag@ep-falling-thunder-a24uwioi.eu-central-1.aws.neon.tech/neondb?sslmode=require',
    ssl: { rejectUnauthorized: false },
  },
})
