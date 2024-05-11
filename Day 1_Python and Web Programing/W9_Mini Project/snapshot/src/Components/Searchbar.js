import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Searchbar = () => {
  const navigate = useNavigate()
  const [searchData, setSearchData] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()
    let formData = event.target.elements.search.value
    setSearchData(formData)
    navigate(`/search/${searchData}`)
    setSearchData('')
  }
  return (
    <>
      <h1 style={{ backgroundColor: 'white', color: '#051B33' }}>Snapshot</h1>
      <form onSubmit={submitHandler}>
        <input
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
          name="search"
          type="search"
          placeholder="Search..."
        />
        <input type="submit" />
      </form>
    </>
  )
}

export default Searchbar
