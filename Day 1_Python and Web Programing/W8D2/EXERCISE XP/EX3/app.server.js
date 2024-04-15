//init express and routers
const express = require('express')
const app = express()
const books_router = require('./Routes/books.routes.js')

//middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//init port
app.listen(3000, () => {
  console.log('run on 3000!!')
})

app.use('/', books_router)
