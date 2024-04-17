const express = require('express')

// const { products } = require('../Config/data_example.js')

const {
  getAllProudcts,
  getProductById,
  deleteProductsById,
  createProducts,
  updateProduct,
} = require('../Controllers/product.controller.js')

const router = express.Router()

//bring in all routes that were using app and make them routs

router.get('/products', getAllProudcts)

router.get('/products/:id', getProductById)
router.post('/products', createProducts)
router.put('/products/:id', updateProduct)
// router.delete('/:id', deleteProductsById)

module.exports = router
