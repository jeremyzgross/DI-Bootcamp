import React, { useState, useEffect } from 'react'
import Search from './Components/search'

function App() {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    getdata()
  }, [])

  const getdata = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json()
      console.log(data)
      setUsers(data) // Update state with fetched data
    } catch (error) {
      console.log(error)
    }
  }

  const filter = users.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase())
  })
  return (
    <div className="App">
      <header className="App-header">
        <h1>Users</h1>
        <Search setSearch={setSearch} />
        {filter.map((item) => {
          return <div key={item.id}>{item.name}</div>
        })}
      </header>
    </div>
  )
}

export default App
