const express = require('express')

// const { products } = require('../Config/data_example.js')

const {
  getAllProudcts,
  getProductById,
  deleteProductsById,
} = require('../Controllers/product.controller.js')

const router = express.Router()

//bring in all routes that were using app and make them routs

router.get('/', getAllProudcts)

// router.get('/:id', getProductById)
// router.delete('/:id', deleteProductsById)

module.exports = router
