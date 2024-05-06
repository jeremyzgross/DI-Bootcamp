// import { useState, useEffect } from 'react'
// import { useForm } from 'react-hook-form'

// const Book = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm()

//   const [data, dataSent] = useState('')

//   const dataSentDisplay = () => {
//     dataSent('Data Sent!')
//   }
//   return (
//     <div>
//       <h1>{data}</h1>
//       <form onSubmit={handleSubmit((data) => console.log(data))}>
//         <label htmlFor="Title">Title:</label>
//         <input {...register('title')} />
//         <br />
//         <label htmlFor="Author">Author:</label>
//         <input {...register('author', { required: true })} />
//         <br />
//         <label htmlFor="Genre">Genre:</label>
//         <input {...register('genre')} />
//         <br />
//         <label htmlFor="Year Published">Year Published:</label>
//         <input {...register('Year Published')} />
//         <br />
//         <input onClick={dataSentDisplay} type="submit" />
//       </form>
//     </div>
//   )
// }
// export default Book

import { useState } from 'react'
import { useForm } from 'react-hook-form'

const Book = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  // State to store form data
  const [data, setData] = useState(null)

  // Function to handle form submission
  const onSubmit = (formData) => {
    setData(formData) // Update data state with form data
  }

  return (
    <div>
      {/* Conditional rendering based on the data state */}
      {data ? (
        <div>
          {/* Display form data */}
          <h2>Title: {data.title}</h2>
          <p>Author: {data.author}</p>
          <p>Genre: {data.genre}</p>
          <p>Year Published: {data['Year Published']}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="title">Title:</label>
          <input {...register('title')} />
          <br />
          <label htmlFor="author">Author:</label>
          <input {...register('author', { required: true })} />
          <br />
          <label htmlFor="genre">Genre:</label>
          <input {...register('genre')} />
          <br />
          <label htmlFor="Year Published">Year Published:</label>
          <input {...register('Year Published')} />
          <br />
          <input type="submit" />
        </form>
      )}
    </div>
  )
}

export default Book
