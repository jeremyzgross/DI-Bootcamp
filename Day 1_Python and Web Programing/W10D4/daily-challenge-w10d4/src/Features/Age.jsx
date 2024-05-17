import {useSelector, useDispatch,} from 'react-redux'
import { ageUpAsync, ageDownAsync } from './ageSlice'

const Age = (props) =>{

  const dispatch = useDispatch()
  const age = useSelector((state)=> state.ageReducer.age)
  const status = useSelector((state)=> state.ageReducer.status)

  return(
    <>
    <h1>Age Counter</h1>
    <h2>Status: {status}</h2>
    <p>The age: {age} </p>
    <button onClick={()=>{dispatch(ageUpAsync())}}>Increase Async</button>
    <br />
    <button  onClick={()=>{dispatch(ageDownAsync())}}>Decrease Async</button>
    </>
  )
}

export default Age