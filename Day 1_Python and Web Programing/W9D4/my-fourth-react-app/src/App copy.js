// import logo from './logo.svg';
import './App.css'
import Form from './Components/Forms'
import About from './Components/About'
import Home from './Components/Home'
import Shop from './Components/Shop'
import Product from './Components/Product'
import { Route, Routes, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <header>
          <nav>
            <Link to="/">Home </Link>
            <Link to="About">About </Link>
            <Link to="Contact">Contact </Link>
            <Link to="Shop">Shop</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route
            path="/contact"
            element={
              <>
                <Form /> <About />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <h2>404 not Found</h2>
              </>
            }
          />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </header>
    </div>
  )
}

export default App
