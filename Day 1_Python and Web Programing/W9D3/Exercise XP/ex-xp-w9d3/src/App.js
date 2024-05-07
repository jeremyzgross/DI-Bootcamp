// import logo from './logo.svg'

import './App.css'
import ErrorBoundary from './Components/ErrorBoundary'
import BuggyCounter from './Components/BuggyCounter'
import ColorClass from './Components/ColorsClass'
import Child from './Components/Child'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ color: 'red' }}>Simulation 1</h1>

        <ErrorBoundary>
          <BuggyCounter />
          <BuggyCounter />
        </ErrorBoundary>
        <hr
          style={{ width: '100%', borderTop: '1px solid black', margin: 0 }}
        />
        <h1 style={{ color: 'red' }}>Simulation 2</h1>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <hr
          style={{ width: '100%', borderTop: '1px solid black', margin: 0 }}
        />
        <h1 style={{ color: 'red' }}>Simulation 3</h1>
        <BuggyCounter />
        {/* <ColorClass favcolor={'blue'} /> */}
        <Child />
      </header>
    </div>
  )
}

export default App
