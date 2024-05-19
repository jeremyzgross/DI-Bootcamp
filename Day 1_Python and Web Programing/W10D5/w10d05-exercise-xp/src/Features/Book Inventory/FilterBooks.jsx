import {useSelector, useDispatch,} from 'react-redux'

import { useFilterSelector,  } from './booksHooks';
import {selected} from './bookSlice'



const FilterBooks = (props)=>{
   const books = useFilterSelector();
   const dispatch = useDispatch()


  return(
    <>
    <select onChange={(event)=> dispatch(selected(event.target.value))}>
        {books.map((book) => (
          <option key={book.id} value={book.genre}>
           {book.genre}
          </option>
        ))}
      </select>
    </>
  )
}

export default FilterBooks