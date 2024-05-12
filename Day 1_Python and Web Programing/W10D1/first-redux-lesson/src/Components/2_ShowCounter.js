import { useContext } from 'react'
import { AppContext } from '../App'
const ShowCounter = (props) => {

  const { count } = useContext(AppContext)
  return (
    <>
      <h3>ShowCounter</h3>
      <p>Props Count => </p>
      {count}
    </>
  )
}

export default ShowCounter
