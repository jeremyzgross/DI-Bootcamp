/**
 * config directory - all connections to database
 * -conection databases (see W8D2 structure)
 * -models - queries to database/files
 * -controlers - function that implements code - request, response
 * - Routes - all the routes for API
 *
 * each route is dedicated to one set of endpoints
 */

const express = require('express')
const app = express()
//middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(__dirname + '/public'))

// const { logger, auth } = require('./Middleware/utils.middleware.js')

const product_router = require('./Routes/products.route.js') //PROBLEM!

const user_router = require('./Routes/users.route.js')

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})

// app.use('/api/products', product_router)
app.use('/users', user_router)
app.use('/', product_router)

//exercise get user by id

//It is called middleware because it comes somewhere in between the request and the response
//it must go at the top of the server file to intiate first

//create our own middleware:

// //a middleware function gets 3 params: req, res, and a callback(next)
// const logger = (req, res, next) => {
//   console.log('urls=>', req.url)
//   console.log('params=>', req.url)
//   console.log('method=>', req.url)
//   next()
// }
// //useing the middleware
// app.use(logger)
// //END OF FUNCTION

//We should make a folder for our middleware. see W8d2 structure

//you can use this middleware for certain data information. Here we see using with users and not products

// app.use('/users', logger)

// app.use(auth)

//middleware for specific routes
