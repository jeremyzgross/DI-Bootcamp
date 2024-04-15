//all the logic for product goes to controller

const { products } = require('../Config/data_example.js')

const getAllProudcts = (req, res) => {
  res.json(products)
}

const getProductById = (req, res)=>{
//functionality 
}

const deleteProductsById = (req, res) => {

  //functionality

}

module.exports = {
  getAllProudcts,
  getProductById,
  deleteProductsById,
}
