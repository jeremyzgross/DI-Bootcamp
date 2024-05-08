import './App.css'
import { Routes, Route } from 'react-router-dom'
import Shop from './Components/Shop'
import Product from './Components/Product'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/:id" element={<Product />} />
        </Routes>
      </header>
    </div>
  )
}

export default App
