const express = require('express')
const app = express()

const {
  getAllBooks,
  addNewBooks,
  updateBooks,
  deleteBooks,
} = require('../Controllers/books.controller.js')
const router = express.Router()

router.get('/books', getAllBooks)

router.post('/books', addNewBooks)

router.put('/books/:id', updateBooks)

router.delete('/books/:id', deleteBooks)

module.exports = router
