const express = require('express')
const router = express.Router()
const {
  getConnection,
  registerUser,
  loginUser,
} = require('../Controllers/users.controller')

router.get('/', getConnection)

router.post('/register', registerUser)

router.post('/login', loginUser)

module.exports = router
