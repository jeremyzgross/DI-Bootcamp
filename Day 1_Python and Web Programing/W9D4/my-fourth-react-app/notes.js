//install react router dom
//on the index.js or main.jsx import BrwoserRouter
//Wrap in browser router

//in App.js import Route and ROutes from react-router
//import link from react-router-dom will make a href

//import useParams from router dom to get the id params check product.jsx
//you can use params.id to display on the dom

// Example of syntax


//alternative way in app to make router
import App from './src/App copy' // <--click here for full reference

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
