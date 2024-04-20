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
router.post('/budget', budgetUser)

router.put('/income/', updateIncome)

module.exports = router
