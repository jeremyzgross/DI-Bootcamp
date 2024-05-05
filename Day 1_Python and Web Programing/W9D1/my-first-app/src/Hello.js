import React from 'react'

const Hello = ({ name, email }) => {
  // console.log(props)
  return (
    <React.Fragment>
      <h1>hello {name} </h1>
      <h1>Welcome to react</h1>
      <p> {email}</p>
    </React.Fragment>
  ) //if you have two elements you need to wrap it in a parent like a div or an empty parent -> <React.Fragment>
}

export default Hello
