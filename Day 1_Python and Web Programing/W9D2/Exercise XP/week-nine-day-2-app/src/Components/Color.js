import React, { useState, useEffect } from 'react'

const Color = () => {
  const [favoriteColor, setFavoriteColor] = useState('red')

  useEffect(() => {
    // alert('useEffect Reached')
    setFavoriteColor('yellow')
  }, [setFavoriteColor])

  const changeColor = (color) => {
    console.log('the color should be blue')
    setFavoriteColor(color)
  }
  return (
    <React.Fragment>
      <h1>My favorite color is {favoriteColor}</h1>
      <button onClick={() => changeColor('blue')}>Change Fav Color</button>
    </React.Fragment>
  )
}

export default Color
