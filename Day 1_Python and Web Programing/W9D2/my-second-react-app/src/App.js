import './App.css'
import { useState, useEffect } from 'react'

const App = () => {
  // const [state, setState] = useState() //syntax

  const [count, setCount] = useState(0) //example with counter. state is count and setState is setCount
  //in class componenets this would be: this.state.count
  const [name, setWhatever] = useState('Jon')

  const [users, setUsers] = useState([])

  useEffect(() => {
    console.log('useEffect')
    if (count === 0) {
      setCount(count + 100)
    }
    return () => console.log('unmount') //component unmount
  }, [count]) //what components to listen for. In this case the count state changing
  const addOne = () => {
    setCount(count + 1)
    setWhatever('Dan')
    //in class componenets this would be: this.setState({count: this.state.count + 10})
  }
  const displayUsers = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json()
      console.log(data)
      setUsers(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={addOne}>+</button>
        {count}
        <div>
          <button onClick={displayUsers}>Get Users</button>
          <h2>Name Users:</h2>
          {users
            ? users.map((item) => {
                return <div>{item.name}</div>
              })
            : null}
        </div>
        <br></br>
        {/* {name} */}
      </header>
    </div>
  )
}

export default App
