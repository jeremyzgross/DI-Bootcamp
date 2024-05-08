import { useState } from 'react'
const Form = (props) =>{
  const [name, setName] = useState('')
  const [email, setEmail]= useState('')
  const [num, setNum]= useState('')
  const [yesno, setYesNo] = useState(false)

  const [inputs, setInputs] = useState()

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(num, name, email, yesno);
    setName("")
    setEmail("")

    //send them to server
  }
  // const handInputs = (e) =>{

  // }
  return( //getnot use action "GET" because of prevent default
    <>
    <h2>Form</h2>
    <form onSubmit={handleSubmit}>
      <input value={name}onChange={(e)=>setName(e.target.value)}type="text" placeholder='Name...' 
      name='name'
      />
      <br />
      <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email...' 
      name='email'
      /> <br />
      <select onChange={(e)=>setNum(e.target.value)}name="" id="">
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
      <br />

        Yes/No<input onChange={(e)=> setYesNo(e.target.checked)} type="checkbox" checked={yesno}/>

      <br />
      <input type="submit" value= "submit"/>
    </form>
    </>
  )
}


export default Form