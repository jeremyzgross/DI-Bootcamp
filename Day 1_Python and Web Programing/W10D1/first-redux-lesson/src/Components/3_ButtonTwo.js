import { useContext } from 'react'
import { AppContext } from '../App'
const ButtonTwo = () => {
  const { count, setCount } = useContext(AppContext)
  return (
    <>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  )
}

export default ButtonTwo
