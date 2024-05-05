// import logo from './logo.svg'
// import './App.css'
import DemoCarousel from './Components/CarouselComp'

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
        <DemoCarousel
          centerSlidePercentage={100}
          showThumbs={true}
          centerMode={true}
        />
      </header>
    </div>
  )
}

export default App
