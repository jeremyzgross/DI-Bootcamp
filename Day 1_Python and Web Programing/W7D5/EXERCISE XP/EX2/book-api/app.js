/*In this exercise, you’ll build a basic CRUD (Create, Read, Update, Delete) API using Express.js. Your task is to create routes to manage a collection of books.

Create a new directory named book-api.

Inside the book-api directory, initialize a new Node.js project and install the express package.

Create a new file named app.js in the book-api directory.

In app.js, import the express module and create an instance of an Express app.

Define a basic data array containing a few book objects. Each book object should have properties like id, title, author, and publishedYear.

Set up the app to listen on port 5000. Print a message in the console to indicate that the server is running.

Implement the “Read all” route by defining a route at GET /api/books. Send a JSON response with the books array.

Implement the “Read” route by defining a route at GET /api/books/:bookId. Extract the bookId parameter from the URL and use it to find the corresponding book in the books array. If the book is found, send a JSON response with the book details and a status code of 200 (OK). If the book is not found, send a 404 status with a “Book not found” message.

Implement the “Create” route at POST /api/books. Use the express.json() middleware to parse JSON body content. Inside the route handler, create a new book object with an incremented ID and the data from the request body. Add the new book to the books array and return a JSON response with the new book and a status code of 201 (Created). */

// Import the express module
const express = require('express')
// Create an Express application
const app = express()

app.use(express.urlencoded({ extended: false })) // Parse URL-encoded bodies
app.use(express.json()) // Parse JSON bodies

app.listen(5001, () => {
  console.log('Server is running on port 5001')
}) //for some reason 5000 keeps giving errors on my computer

let bookCase = [
  {
    bookid: 201,
    title: 'Great Book',
    author: 'Great Author',
    publishedYear: '2001',
  },
  {
    bookid: 202,
    title: 'Fantastic Book',
    author: 'Fantastic Author',
    publishedYear: '2001',
  },
  {
    bookid: 203,
    title: 'Horrible Book',
    author: 'Horrible Author',
    publishedYear: '2024',
  },
]
app.get('/api/bookcase', (request, response) => {
  response.json(bookCase) //sends JS object as json to client
})

//get by id
app.get('/api/bookcase/:bookid', (request, response) => {
  const { bookid } = request.params

  const book = bookCase.find((item) => item.bookid == bookid)

  if (!book) {
    return response.status(404).json({ message: 'Book not found' })
  } else {
    response.status(200).json(book)
  }
})

//create

app.post('/api/bookcase/', (request, response) => {
  console.log(request.body)
  bookCase.push(request.body)
  response.status(201).json({ message: 'book created' })
})
