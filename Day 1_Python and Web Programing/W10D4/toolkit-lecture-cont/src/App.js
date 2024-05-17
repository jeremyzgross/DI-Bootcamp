import './App.css'
import Counter from './features/counter/Counter'
import Users from './features/Users/Users'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Redux Toolkit Continue</h2>
        <Counter />
        <h2>Asynchronous Exercise</h2>
        <Users />
      </header>
    </div>
  )
}

export default App
