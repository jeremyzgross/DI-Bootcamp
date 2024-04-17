//all the logic for product goes to controller

const {
  _getAllProducts,
  _getProductsById,
  _createProduct,
  _updateProduct,
} = require('../Models/products.model.js')
// const { products } = require('../Config/data_example.js')

const getAllProudcts = (req, res) => {
  _getAllProducts()
    .then((data) => {
      res.json(data)
    })
    .catch((error) => {
      console.log(error)
    })
}

const getProductById = (req, res) => {
  const { id } = req.params
  _getProductsById(id)
    .then((data) => {
      res.json(data)
    })
    .catch((error) => {
      console.log(error)
    })
}

const createProducts = (req, res) => {
  const { name, price } = req.body
  _createProduct(name, price)
    .then((data) => {
      res.json(data)
    })
    .catch((error) => {
      console.log(error)
    })
}

const updateProduct = (req, res) => {
  const { id } = req.params
  const { name, price } = req.body
  _updateProduct(id, name, price)
    .then((data) => {
      res.json(data)
    })
    .catch((error) => {
      console.log(error)
    })
}
const deleteProductsById = (req, res) => {
  //functionality
}

module.exports = {
  getAllProudcts,
  getProductById,
  deleteProductsById,
  createProducts,
  updateProduct,
}
