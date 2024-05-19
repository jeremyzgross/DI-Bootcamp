import { createSelector } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
// import { books } from './bookSlice'
import { useCallback } from 'react'

export const books = (state) => state.booksReducer.books
export const genre = (state) => state.booksReducer.selectedGenere

export const useBooksSelector = () => {
  //array of functions that represent the first state
  //the second state
  //how to present that second state
  const selectorBooks = createSelector([books, genre], (books, genre) => {
    if (genre === null) return books
    return books.filter((book) => book.genre === genre)
  })
  return useSelector(selectorBooks)
}

export const useFilterSelector = () => {
  const filteredBooks = createSelector(books, (books) => {
    console.log(books)
    // return new Set(books)
    const genres = books.map(({ genre }) => genre)
    console.log(genres)
    return books.filter(
      ({ genre }, index) => !genres.includes(genre, index + 1)
    )
  })
  return useSelector(filteredBooks)
}
