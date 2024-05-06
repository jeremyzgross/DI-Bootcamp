import React from 'react'
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      users: [],
    }
    console.log('constructor')
  }
  changeCount = (num) => {
    this.setState({
      count: this.state.count + num,
    })
  }
  componentDidMount = () => {
    console.log('componentDidMount')
    this.setState({ count: 15 })
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ users: data })
      })
  }
  componentDidUpdate = (previousPros, previousState) => {
    console.log('componentDidUpdate', previousState)
  }

  render() {
    console.log('render')
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={() => this.changeCount(1)}> + </button>
          {this.state.count}
          <button onClick={() => this.changeCount(-1)}> - </button>
          <h2>Users</h2>
          {this.state.users.map((item) => {
            return <div>{item.name}</div>
          })}
        </header>
      </div>
    )
  }
}

export default App
