const { _getAllBooks, _getBook } = require('../Models/books.model')

const getAllBooks = (req, res) => {
  _getAllBooks()
    .then((data) => {
      res.json(data)
    })
    .catch((error) => {
      console.log(error, 'there is an error in the controller')
    })
}

const getBook = async (req, res) => {
  try {
    const bookId = req.params.id
    const result = await _getBook(bookId)
    res.json(result)
  } catch (error) {
    console.error('Error getting book with ID', error)
    next(error)
  }
}
module.exports = {
  getAllBooks,
  getBook,
}
