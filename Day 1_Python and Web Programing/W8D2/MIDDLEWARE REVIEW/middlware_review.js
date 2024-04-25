/**
 * Create a Middleware: Write a middleware function called requestTime that logs the current time when a request is made.
Apply Middleware Locally: Apply the requestTime middleware locally to a specific route, such as /api.
Chain Middleware: Create multiple middleware functions and chain them together to create a sequence of operations.
Error Handling Middleware: Write a middleware function to handle errors globally. This middleware should catch errors thrown in any route handler and respond with an appropriate error message.
Custom Middleware: Develop a custom middleware function that parses the request body and adds it to the request object. This middleware should be used for routes that expect JSON data in the request body.
By working through these exercises, you'll gain a better understanding of how middleware works in Node.js and Express, and you'll be able to apply it effectively in your applications.
 */
const express = require('express')
const app = express()

const requestTime = (req, res, next) => {
  const currentTime = new Date()
  console.log(`Request made at: ${currentTime}`)
  if (currentTime) {
    next()
  } else {
    res.status(401).send('something went wrong')
  }
}

app.use(requestTime)

app.get('/api', (req, res) => {
  res.send('Request Time')
})
