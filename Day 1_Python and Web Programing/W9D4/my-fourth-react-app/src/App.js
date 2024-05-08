// import logo from './logo.svg';
import './App.css'
// import Form from './Components/Forms'
import About from './Components/About'
import Home from './Components/Home'
// import Shop from './Components/Shop'
// import Product from './Components/Product'
// import { Route, Routes, Link } from 'react-router-dom'
import {
  Link,
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom'

//Routering Component
const Root = () => {
  return (
    <>
      <header>
        <nav>
          <Link to={'/'}>Home</Link>
          <Link to={'/about'}>About</Link>
        </nav>
      </header>
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
])
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
          <RouterProvider router={router} />
        </>
      </header>
    </div>
  )
}

export default App
