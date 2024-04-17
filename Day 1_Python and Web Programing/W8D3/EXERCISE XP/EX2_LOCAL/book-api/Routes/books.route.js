const express = require('express')

const { getAllBooks } = require('../Controllers/books.controller')

const router = express.Router()

router.get('/books', getAllBooks)

module.exports = router
