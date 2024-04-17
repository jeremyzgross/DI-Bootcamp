const express = require('express')
const app = express()
//middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(__dirname + '/public'))

const books_router = require('./Routes/books.route')

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})

app.use('/', books_router)
