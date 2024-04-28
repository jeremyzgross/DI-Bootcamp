const express = require('express')
const router = express.Router()

const {
  registerUser,
  addQuote,
  randomQuote,
  loginUser,
  getAllQuotes,
} = require('../2_Controllers/controller.quotes')

const { auth } = require('../4_Middleware/middleware.quotes')

router.post('/register', registerUser)

router.post('/quote', addQuote)

router.get('/quote', getAllQuotes)

router.get('/random', randomQuote)

router.post('/login', loginUser)

module.exports = router
