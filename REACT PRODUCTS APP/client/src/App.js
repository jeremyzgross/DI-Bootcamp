import logo from './logo.svg'
import './App.css'
import './FirstComponent'
import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent'

const users = [
  {
    name: 'Jeremy',
    address: '123 Tel Aviv',
    favoriteFood: 'pizza',
  },
  {
    name: 'Elisabeth',
    address: 'Brooklyn',
    favoriteFood: 'pasta',
  },
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {users.map((user) => {
        return <FirstComponent theUser={user} />
      })}
      <SecondComponent url={'http://localhost:3001/api/orders/10'} />
    </div>
  )
}

export default App
