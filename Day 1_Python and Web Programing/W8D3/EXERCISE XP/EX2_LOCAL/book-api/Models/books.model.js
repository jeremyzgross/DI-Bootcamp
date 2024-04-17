const { db } = require('../Config/books.config.js')

const _getAllBooks = () => {
  return db('books').select('id', 'title', 'author', 'publishedyear')
}

module.exports = {
  _getAllBooks,
}
