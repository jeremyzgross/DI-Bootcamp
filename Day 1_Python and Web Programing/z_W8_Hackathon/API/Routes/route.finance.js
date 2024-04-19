const express = require('express')
const router = express.Router()
const {
  registerUser,
  userIncome,
  loginUser,
  budgetUser,
  updateIncome,
} = require('../controllers/controller.finance.js')

// Route for user registration
router.post('/register', registerUser)

//route for users income after registration
router.post('/income', userIncome)

// Route for user login
router.post('/login', loginUser)

// Route for fetching user's budget details
router.get('/budget/:id', budgetUser)

router.put('/income/:id', updateIncome)

module.exports = router
