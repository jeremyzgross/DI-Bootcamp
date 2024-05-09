// import logo from './logo.svg';
import './App.css'
import Search from './Components/Search'
import Mountains from './Components/Mountain'
import Beaches from './Components/Beaches'
import Birds from './Components/Birds'
import Food from './Components/Food'
import SearchResult from './Components/SearchResult'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search />
        <br />
        <nav style={{ background: 'white' }}>
          <Link to="/"></Link>
          <Link to="Mountain" className="nav-link">
            Mountain{' '}
          </Link>
          <Link to="Beaches" className="nav-link">
            Beaches{' '}
          </Link>
          <Link to="Birds" className="nav-link">
            Birds{' '}
          </Link>
          <Link to="Food" className="nav-link">
            Food{' '}
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Mountains />} />
          <Route path="/mountain" element={<Mountains />} />
          <Route path="/beaches" element={<Beaches />} />
          <Route path="/birds" element={<Birds />} />
          <Route path="/food" element={<Food />} />
          <Route path="/searchresults" element={<SearchResult />} />
        </Routes>
      </header>
    </div>
  )
}

export default App
