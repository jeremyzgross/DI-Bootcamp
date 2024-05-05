import React from 'react'
import Button from '@mui/material/Button'

const User = (props) => {
  //tachyon class name
  return (
    <div
      className="tc dib br3 pa3 ma2 bg-light-green grow"
      // style={{
      //   display: 'inline=block',
      //   border: '5px solid black',
      //   margin: '20px',
      //   padding: '20px',
      //   textAlign: 'center',
      //   backgroundColor: 'cyan',
      // }}
    >
      <img src={`https://robohash.org/${props.info.id}?size=150x150`} />
      <h1>{props.info.name}</h1>
      <h1>{props.info.email}</h1>
      <h1>{props.info.username}</h1>
      {/* <Button variant="contained">Click me!</Button> */}
    </div>
  )
}

export default User
