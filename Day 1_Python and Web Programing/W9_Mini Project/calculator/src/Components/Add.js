import { useState } from 'react'
const Add = () => {
  const [noSum, Sum] = useState(0)
  const [numOne, setNumOne] = useState(0)
  const [numTwo, setNumTwo] = useState(0)

  const addNumbers = (e) => {
    e.preventDefault()
    Sum(parseInt(numOne) + parseInt(numTwo))
  }

  return (
    <>
      <h1>Adding Two Numbers</h1>
      <form onSubmit={addNumbers}>
        <input
          id="numbers"
          name="numberOne"
          type="number"
          onChange={(e) => {
            setNumOne(e.target.value)
          }}
          value={numOne}
        />
        <br />
        <input
          id="numbers"
          name="numberTwo"
          type="number"
          onChange={(e) => {
            setNumTwo(e.target.value)
          }}
          value={numTwo}
        />
        <br />
        <input id="button" type="submit" value={'Add Them!'} />
      </form>
      <br />
      <div>{noSum}</div>
    </>
  )
}

export default Add
