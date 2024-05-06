import './App.css'
import { useState, useEffect } from 'react'
import Car from './Components/Car'
import Events from './Components/Events'
import Phone from './Components/Phone'
import Color from './Components/Color'

const carinfo = { name: 'Ford', model: 'Mustang' }

function App() {
  const [color] = useState({ color: 'red' })

  const clickMe = () => {
    alert('I was clicked')
  }
  return (
    <div className="App">
      <header className="App-header">
        {
          <h1>
            This car is a {color.color}
            <Car model={carinfo.model} />
          </h1>
        }
        <Car model={carinfo.model} />
        <button onClick={clickMe}>Click Me</button>
        <Events />
        <Phone />
        <Color />
      </header>
    </div>
  )
}

export default App
