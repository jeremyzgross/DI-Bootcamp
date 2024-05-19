import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit'

const initialState = {
  books: [
    { id: 1, title: '1984', author: 'George Orwell', genre: 'Dystopian' },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      genre: 'Classic',
    },
    {
      id: 3,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      genre: 'Classic',
    },
    {
      id: 4,
      title: 'Brave New World',
      author: 'Aldous Huxley',
      genre: 'Dystopian',
    },
    {
      id: 5,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      genre: 'Classic',
    },
    {
      id: 6,
      title: 'Fahrenheit 451',
      author: 'Ray Bradbury',
      genre: 'Dystopian',
    },
    {
      id: 7,
      title: 'Moby-Dick',
      author: 'Herman Melville',
      genre: 'Adventure',
    },
    { id: 8, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
    {
      id: 9,
      title: "Harry Potter and the Philosopher's Stone",
      author: 'J.K. Rowling',
      genre: 'Fantasy',
    },
    {
      id: 10,
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      genre: 'Fantasy',
    },
  ],
  status: null,
  selectedGenere: null,
}

export const getBooksAsync = createAsyncThunk(
  'books/getBooksAsync',
  async () => {}
)

export const booksSlice = createSlice({
  name: 'books',
  initialState: initialState,
  reducers: {
    selected: (state, action) => {
      state.selectedGenere = action.payload
      console.log(action.payload)
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getBooksAsync.pending, (state, action) => {
        state.status = 'Loading...'
      })
      .addCase(getBooksAsync.fulfilled, (state, action) => {
        state.status = 'Here are your books!'
        state.books = action.payload
      })
      .addCase(getBooksAsync.rejected, (state, action) => {
        state.status = 'failed...'
      })
  },
})

export const books = (state) => state.booksReducer
export default booksSlice.reducer
export const { selected } = booksSlice.actions
