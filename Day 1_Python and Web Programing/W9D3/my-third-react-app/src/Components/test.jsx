import { useEffect } from 'react'

const Test = (props) => {
  useEffect(()=>{
    return () => alert('I will soon gone') //This is an unmount syntax. there needs to be a call back function at the end of an unmount. This will unmount
  },[])
  
  return(
  <>
  <h2>This is a Test Component</h2>
  <input type="email" placeholder='Email' />
  </>
  )
}

export default Test