import { useReducer } from 'react'
import { initialState, reducer } from '../App'
const Test = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <h1>TEST</h1>
    </>
  )
}

export default Test
