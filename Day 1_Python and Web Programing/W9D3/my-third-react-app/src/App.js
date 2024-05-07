import React, { useState, useEffect } from 'react'
import './App.css'
// import Parent from './Components/Parent'
// import Child from './Components/Child'
import Counter from './Components/Counter'
import ErrorBoundary from './Components/ErrorBoundary'

function App() {
  const handleSubmit = (event) => {
    event.preventDefault()
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <h2>Parent & Child</h2>
        <Parent auth="">
          <Child />
  </Parent> */}
        <form onSubmit={handleSubmit}>
          <input type="submit" value="submit" />
        </form>
        <h2>Error Boundary</h2>
        <ErrorBoundary>
          <Counter />
        </ErrorBoundary>
        <Counter />
      </header>
    </div>
  )
}

export default App
