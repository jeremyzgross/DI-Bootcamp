// const express = require('express')

// const app = express()

// app.listen(3001, () => {
//   console.log('run on 3001')
// })

// /**
//  * app.get
//  * app.post
//  * app.delete
//  */

// // const users = [
// //   { id: 1, name: 'john', email: 'j@email.com' },
// //   { id: 2, name: 'anne', email: 'anne@email.com' },
// //   { id: 3, name: 'dan', email: 'dan@email.com' },
// // ]

// // app.get('/users', (request, response) => {
// //   response.send(users) //a request from the browser will response with an object
// // })

// //if you enter http://localhost:3001/. you wouldnt get anything. you need to put in the param /users

// // app.get('/users', (request, response) => {
// //   response.json(users) //a request from the browser will response with an JSON
// // })

// //EXAMPLE with another array of objects

// const products = [
//   { id: 102, name: 'iPhone', price: 800 },
//   { id: 132, name: 'iPad', price: 650 },
//   { id: 213, name: 'iWatch', price: 750 },
// ]
// //how to get one object
// app.get('/api/products/:id', (request, response) => {
//   const { id } = request.params //id in the url
//   const productOne = products.find((item) => item.id == id)
//   if (!product) {
//     return response.json({ message: 'product not found' })
//   }
//   response.json(product)
// })

// /** REQUEST.QUERY
//  *  Read - get search for a product with the name
//  * ip
//  */

// app.get('/api/products', (request, response) => {
//   //http://localhost:3001/api/search?q='NAME TO QUERY' the ?q is the query command
//   const { q } = request.query
//   const filtered = products.filter((item) => {
//     return item.name.toLowerCase().includes(q.toLowerCase()) //finds item that include in the url
//   })
//   if (filtered.length === 0) {
//     return response.status(404).json({ msg: 'No product matched your search' })
//   } else {
//     response.status(200).json(filtered)
//   }
// })

// /*
// Create - POST - to create a new product
// POST with Postman
//  */
// app.use(express.urlencoded({ extended: false }))
// app.use(express.json())

// app.post('/api/products', (request, response) => {
//   console.log(request.body)
//   response.send('ok post')
// })

//chat gpt fixed?? CRUD
// Import the express module
const express = require('express')
// Create an Express application
const app = express()

// Start the server and listen on port 3001
app.listen(3001, () => {
  console.log('Server is running on port 3001')
})

// Sample array of products
const products = [
  { id: 102, name: 'iPhone', price: 800 },
  { id: 132, name: 'iPad', price: 650 },
  { id: 213, name: 'iWatch', price: 750 },
]

// Route to get a single product by its ID (Read)
app.get('/api/products/:id', (request, response) => {
  const { id } = request.params
  // Find the product with the specified ID
  const product = products.find((item) => item.id == id)
  // If the product is not found, return 404 status with a message
  if (!product) {
    return response.status(404).json({ message: 'Product not found' })
  }
  // If the product is found, return it with a 200 status
  response.json(product)
})

// Route to get all products or filter by name (Read)
app.get('/api/products', (request, response) => {
  const { q } = request.query
  // Check if the 'q' query parameter is provided
  if (!q) {
    // If 'q' is not provided, return all products
    return response.status(200).json(products)
  }
  // If 'q' is provided, filter products by name
  const filtered = products.filter((item) =>
    // Convert product names and search query to lowercase for case-insensitive search
    item.name.toLowerCase().includes(q.toLowerCase())
  )
  // If no products match the search, return 404 status with a message
  if (filtered.length === 0) {
    return response
      .status(404)
      .json({ message: 'No product matched your search' })
  } else {
    // If products are found, return them with a 200 status
    response.status(200).json(filtered)
  }
})

// Middleware to parse URL-encoded and JSON request bodies
app.use(express.urlencoded({ extended: false })) // Parse URL-encoded bodies
app.use(express.json()) // Parse JSON bodies

// Route to create a new product (Create)
app.post('/api/products', (request, response) => {
  console.log(request.body) // Log the request body to the console
  // Here you can add logic to validate the request body and create a new product
  response.send('Ok, product created') // Send a response indicating successful creation
})

// Route to update a product (Update)
app.put('/api/products/:id', (request, response) => {
  const { id } = request.params
  const { name, price } = request.body

  // Find the index of the product with the specified ID
  const index = products.findIndex((item) => item.id == id)

  // If the product is not found, return 404 status with a message
  if (index === -1) {
    return response.status(404).json({ message: 'Product not found' })
  }

  // Update the product's name and price
  products[index] = {
    ...products[index],
    name,
    price,
  }

  // Return the updated list of products
  response.json(products)
})

// Route to delete a product (Delete)
app.delete('/api/products/:id', (request, response) => {
  const { id } = request.params

  // Find the index of the product with the specified ID
  const index = products.findIndex((item) => item.id == id)

  // If the product is not found, return 404 status with a message
  if (index === -1) {
    return response.status(404).json({ message: 'Product not found' })
  }

  // Remove the product from the array
  products.splice(index, 1)

  // Return the updated list of products
  response.json(products)
})
