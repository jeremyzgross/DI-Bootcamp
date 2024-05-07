import { useState } from 'react';

const BuggyCounter = (props)=>{
  const [counter, setCount] = useState(0)

  if(counter >= 5){
    throw new Error('I Crashed....')
  }
  return (
    <>
    <h1>Buggy Counter</h1>
    <button onClick={()=>setCount(counter + 1)}>+</button>
    <p>{counter}</p>
    </>
  )
}

export default BuggyCounter