const express = require('express')

const { auth } = require('../Middleware/utils.middleware.js')

const { users } = require('../Config/data_example.js')
const {
  getAllUsers,
  getUserById,
} = require('../Controllers/users.controller.js')
const router = express.Router()

router.get('/', auth, getAllUsers) //middleware in between
router.get('/:id', getUserById)
module.exports = router
