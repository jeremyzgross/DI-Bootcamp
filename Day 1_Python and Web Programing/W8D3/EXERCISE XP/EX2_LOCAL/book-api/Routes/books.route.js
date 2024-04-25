const express = require('express')

const { getAllBooks, getBook } = require('../Controllers/books.controller')

const router = express.Router()

router.get('/books', getAllBooks)
router.get('/books/:id', getBook)

module.exports = router
