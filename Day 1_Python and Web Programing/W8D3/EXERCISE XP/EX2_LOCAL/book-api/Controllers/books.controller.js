const { _getAllBooks } = require('../Models/books.model')

const getAllBooks = (req, res) => {
  _getAllBooks()
    .then((data) => {
      res.json(data)
    })
    .catch((error) => {
      console.log(error, 'there is an error in the controller')
    })
}

module.exports = {
  getAllBooks,
}
