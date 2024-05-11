// import logo from './logo.svg'
import React from 'react'
import './App.css'
import FormComponent from './Component/Form'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      statement: '',
    }
  }

  componentDidMount() {
    console.log('componentDidMount')
    fetch('http://localhost:3001/api/hello')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ statement: data })
      })
  }

  render() {
    return (
      <>
        <div>{this.state.statement}</div>
        <FormComponent />
      </>
    )
  }
}

export default App
