// import logo from './logo.svg'
// import Hello from './Hello' //import hello component
// import './App.css'
import Users from './users.json'
import User from './User'
import 'tachyons'
// console.log(users)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
        {Users.map((item, i) => {
          return <User key={i} info={item} />
        })}
      </header>
    </div>
  )
}

export default App
