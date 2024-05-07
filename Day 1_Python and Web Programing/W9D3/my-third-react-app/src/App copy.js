import React, { useState, useEffect } from 'react'
import Test from './Components/test'

function App() {
  const [show, setShow] = useState(true)

  // useEffect(() => {
  //   console.log('useeffect')
  //   if (show) {
  //     const fetchUsers = async () => {
  //       try {
  //         const res = await fetch('https://jsonplaceholder.typicode.com/users')
  //         const data = await res.json()
  //         console.log(data)
  //         setUsers(data) // Update state with fetched data
  //       } catch (error) {
  //         console.log(error)
  //       }
  //     }

  //     fetchUsers()
  //   }
  // }, [show]) // Add 'show' as a dependency to the useEffect hook

  return (
    <div className="App">
      <header className="App-header">
        <h1>useEffect</h1>
        <button onClick={() => setShow(!show)}>Submit</button>
        {show ? <Test /> : <h2>Email was sent!</h2>}
      </header>
    </div>
  )
}

export default App
