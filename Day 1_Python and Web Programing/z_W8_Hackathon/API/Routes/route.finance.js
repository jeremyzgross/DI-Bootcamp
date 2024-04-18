const express = require('express')
const router = express.Router()

const {
  registerUser,
  loginUser,
  budgetUser,
} = require('../Controllers/controller.finance.js')

router.post('/register', registerUser)

router.get('/login', loginUser)

router.get('/:id', budgetUser)

module.exports = router
