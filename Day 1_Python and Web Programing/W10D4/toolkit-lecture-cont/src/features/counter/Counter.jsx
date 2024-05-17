import {useSelector, useDispatch} from 'react-redux'
import { useRef } from 'react'
import { increment, decrement, reset, incrementByNumber, incrementWithPrepare, incremencount1, delayIncrement, delayIncrementThunk } from './counterSlice'
const Counter = (props)=>{
  const dispatch = useDispatch()
  const incrementRef = useRef('')
  
  const count = useSelector((state)=> state.counter.count)
  const count1 = useSelector((state)=> state.counter.count1)


  return(
    <>
    <h2>Count: {count}</h2>
    <button onClick={()=> dispatch(increment())}>+</button>
    <button onClick={()=> dispatch(decrement())}>-</button>
    <button onClick={()=> dispatch(reset())}>Reset</button>
    <div>
      <input ref={incrementRef} type = 'number'/> <button onClick={()=> dispatch(incrementByNumber(Number(incrementRef.value)))}>Increment By Number</button>
      <br />
      <button onClick={()=> dispatch(incrementWithPrepare(5,6))}>Increment By Number with Prepare</button>
    </div>
    <div>
      <h1>Count1: {count1}</h1>
      <button onClick={()=> dispatch(incremencount1())}> + </button>
      
      {/* ASYNCHRONOUS: */}
      <h1>Delay Increment:</h1>
      <button onClick={()=> dispatch(delayIncrement())}> + </button>
    </div>
    </>
  )
}

export default Counter