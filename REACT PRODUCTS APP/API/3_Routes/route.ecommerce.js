const express = require('express')
const router = express.Router()
const { auth } = require('../4_Middleware/middleware.ecommerce')
const {
  registerUser,
  loginUser,
  addInvetory,
  displayInvetory,
  displayNonShipped,
  addOrder,
  updateItemHasShipped,
  addItemsToOrder,
} = require('../2_Controllers/controller.ecommerce')

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/inventory', auth, addInvetory)
router.get('/inventory', displayInvetory)
router.get('/orders/:id', displayNonShipped)
router.post('/orders/:id', addOrder)
router.put('/orders', updateItemHasShipped)
router.post('/ordersinventory', addItemsToOrder)
module.exports = router
