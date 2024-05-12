import logo from './logo.svg'
import './App.css'
import Display from './Components/1_Display'
import Action from './Components/1_Action'
import { useState, createContext } from 'react'

export const AppContext = createContext()

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <h2>UseContext / CreateContext</h2>
        <AppContext.Provider value={{ count, setCount }}>
          <Display />
          <Action />
        </AppContext.Provider>
      </header>
    </div>
  )
}

export default App
