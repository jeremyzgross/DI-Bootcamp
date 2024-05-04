function FirstComponent(props) {
  console.log(props)
  return (
    <div>
      <p>My name is {props.theUser.name}</p>
      <p>My address is {props.theUser.address}</p>
      {props.theUser.favoriteFood && (
        <p>My favorite food is {props.theUser.favoriteFood}</p>
      )}
    </div>
  )
}

export default FirstComponent
