import './App.css'

import { useState, createContext, useRef, useEffect } from 'react'

export const AppContext = createContext()

function App() {
  const [title, setTitle] = useState('my title')
  let name = 'Dan'
  const nameRef = useRef('Dan Ref')
  // const divRef = useRef()
  // const h2Ref = useRef()
  // const inputRef = useRef()
  // useEffect(() => {
  //   console.log(divRef.current)
  //   divRef.current.style.color = 'red'
  // }, [])

  // const changeToBlue = () => {
  //   h2Ref.current.style.color = 'blue'
  // }
  // const handleChange = (event) => {
  //   inputRef.current = event.target.value
  //   console.log(inputRef.current)
  // }

  //more examples
  // const [title, setTitle] = useState('my title')
  const changeTitle = () => {
    setTitle('title title')
  }
  const changeName = () => {
    name = 'John'
    nameRef.current = 'John Ref'
    // console.log(nameRef.current)
    // console.log(name)
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <div ref={divRef}>
          <h2 ref={h2Ref}>useRef</h2>
          <button onClick={changeToBlue}>Change to Blue</button>
        </div>
        <div>
          <input onChange={handleChange} ref={inputRef} />
        </div> */}
        <div className="more-examples">
          <h1>{name}</h1>
          <button onClick={changeName}>Change Name</button>
        </div>
        <div>
          <h1>{nameRef.current}</h1>
          <button onClick={changeName}>Change Name Ref</button>
        </div>
        <div>
          <h1>{title}</h1>
          <button onClick={changeTitle}>Change Title</button>
        </div>
      </header>
    </div>
  )
}

export default App
