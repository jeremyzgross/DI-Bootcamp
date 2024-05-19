import {useSelector, useDispatch,} from 'react-redux'
import { useEffect } from 'react'
import { useBooksSelector } from './booksHooks';
import FilterBooks from './FilterBooks';

const DisplayBooks = (props)=>{
   const books = useBooksSelector();
  //  const dispatch = useDispatch()
   
  return(
    <>
    <h1>Display Books</h1>
    <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author} - Genre: {book.genre}
          </li>
        ))}
      </ul>
      <FilterBooks/>
    </>
  );
};

export default DisplayBooks;