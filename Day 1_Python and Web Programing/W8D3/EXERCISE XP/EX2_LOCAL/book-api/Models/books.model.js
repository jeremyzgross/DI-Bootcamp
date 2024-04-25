const { db } = require('../Config/books.config.js')

const _getAllBooks = () => {
  return db('books').select('id', 'title', 'author', 'publishedyear')
}

const _getBook = async (bookId) => {
  try {
    return await db.select('*').from('books').where('id', bookId)
  } catch (error) {
    console.error('Error fetching book:', error)
    throw error
  }
}
module.exports = {
  _getAllBooks,
  _getBook,
}
