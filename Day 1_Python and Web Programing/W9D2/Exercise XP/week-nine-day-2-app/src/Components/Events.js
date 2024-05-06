import React, { useState } from 'react'

const Events = () => {
  const [inputValue, setInputValue] = useState('')

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
      alert('The Enter key was pressed, and the input value is: ' + inputValue)
    }
  }

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const [isToggleOn, isToggleOff] = useState(true)

  const toggleSwitch = () => {
    isToggleOff(!isToggleOn)
  }
  return (
    <React.Fragment>
      <input
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        value={inputValue}
        type="text"
        id="myInput"
        name="myInput"
        placeholder="Press the Enter key!"
      />
      <button onClick={toggleSwitch}>{isToggleOn ? 'ON' : 'OFF'}</button>
    </React.Fragment>
  )
}

export default Events
