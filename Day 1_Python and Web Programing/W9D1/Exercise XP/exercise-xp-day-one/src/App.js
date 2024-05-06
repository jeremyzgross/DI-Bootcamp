import logo from './logo.svg'
// import './App.css'
import MyElement from './Components/MyElement'
import Sum from './Components/Sum'
import UserFavoriteAnimals from './Components/UserFavoriteAnimals'
import Exercise from './Components/Exercise3'
import Planets from './Components/Planets'
const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey'],
}

const planets = ['Mars', 'Venus', 'Jupiter', 'Earth', 'Saturn', 'Neptune']

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
        <p>Hello World!</p>
        <MyElement />
        <p>
          React is <Sum /> times better with JSX
        </p>
        <h3>{user.firstName}</h3>
        <h3>{user.lastName}</h3>
        <UserFavoriteAnimals favorites={user.favAnimals} />
        <Exercise />
        <Planets myPlanets={planets} />
      </header>
    </div>
  )
}

export default App
