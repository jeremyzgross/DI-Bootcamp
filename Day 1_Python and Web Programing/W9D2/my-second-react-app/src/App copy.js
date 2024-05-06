// import logo from './logo.svg'
import './App.css'
// import Hello from './Componenets/Hello'
// import HelloClass from './Componenets/HelloClass'
import User from './Componenets/User'
import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      users: [],
    }
  }
  getUsers = async () => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json()
      // console.log(data)
      this.setState({ users: data })
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <Hello title="function component" />
          <HelloClass title="Class component with this extends" /> */}
          <button onClick={this.getUsers}>Click me but user</button>
          {this.state.users.map((item) => {
            return <User key={item.id} {...item} />
          })}
        </header>
      </div>
    )
  }
}

async function getUsers() {
  const url = 'https://jsonplaceholder.typicode.com/users'
  const options = {
    method: 'Get',
    headers: {
      'Content-Type': 'application/json',
    },
  }
}

export default App
