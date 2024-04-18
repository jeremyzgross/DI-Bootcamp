
const express = require('express')
const router = express.Router()
const {
  registerUser,
  loginUser,
  budgetUser,
} = require('../controllers/controller.finance.js')

// Route for user registration
router.post('/register', registerUser)

// Route for user login
router.post('/login', loginUser)

// Route for fetching user's budget details
router.get('/budget/:id', budgetUser)

module.exports = router
