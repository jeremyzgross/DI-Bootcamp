import ShowCounter from './2_ShowCounter'
import Title from './2_Title'
import { createContext, useState } from 'react'
export const DisplayContext = createContext()
const Display = (props) => {
  const [title, setTitle] = useState('original title')
  return (
    <>
      <div className="counter-container">
        <h2>Display</h2>
        <ShowCounter />
        <br />
        <DisplayContext.Provider value={{ title, setTitle }}>
          <Title />
          <br />
          {title}
        </DisplayContext.Provider>
      </div>
    </>
  )
}

export default Display
