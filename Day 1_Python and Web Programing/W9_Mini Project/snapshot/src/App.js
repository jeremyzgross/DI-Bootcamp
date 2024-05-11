// import logo from './logo.svg';
import './App.css'
import Search from './Components/Searchbar'
// import Mountains from './Components/Mountain'
// import Beaches from './Components/Beaches'
// import Birds from './Components/Birds'
// import Food from './Components/Food'
import SearchResult from './Components/SearchResult'
import Searchbar from './Components/Searchbar'
import Snapshot from './Components/Snapshot'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Searchbar />
        <br />
        <nav style={{ background: 'white' }}>
          <Link to="/"></Link>
          <Link to="Mountain" className="nav-link">
            Mountain
          </Link>
          <Link to="Beaches" className="nav-link">
            Beaches
          </Link>
          <Link to="Birds" className="nav-link">
            Birds
          </Link>
          <Link to="Food" className="nav-link">
            Food
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Snapshot catagory={'mountains'} />} />
          <Route
            path="/mountain"
            element={<Snapshot catagory={'mountains'} />}
          />
          {/* <Route path="/beaches" element={<Beaches />} /> */}
          <Route path="/beaches" element={<Snapshot catagory={'beaches'} />} />
          <Route path="/birds" element={<Snapshot catagory={'birds'} />} />
          <Route path="/food" element={<Snapshot catagory={'food'} />} />
          <Route
            path="/search/:catagory"
            element={<Snapshot catagory={'search'} />}
          />
        </Routes>
      </header>
    </div>
  )
}

export default App
