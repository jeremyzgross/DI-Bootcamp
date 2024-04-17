const { db } = require('../Config/data_example.js')

const _getAllProducts = () => {
  return db('products').select('id', 'name', 'price').orderBy('id')
}

const _getProductsById = (id) => {
  return db('products').select('id', 'name', 'price').where({ id })
}

const _createProduct = (name, price) => {
  return db('products').insert({ name, price }, ['id', 'name', 'price'])
}

const _updateProduct = (id, name, price) => {
  return db('products')
    .update({ name, price }, ['id', 'name', 'price'])
    .where({ id })
}
module.exports = {
  _getAllProducts,
  _getProductsById,
  _createProduct,
  _updateProduct,
}
