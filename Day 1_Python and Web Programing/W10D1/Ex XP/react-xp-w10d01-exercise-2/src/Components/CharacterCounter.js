import React, { useRef, useState } from 'react'

function CharacterCounter() {
  const [char, setChar] = useState(null)
  const inputRef = useRef(null)
  console.log(inputRef.current)

  const handleInputChange = () => {
    const textLength = inputRef.current.value.length
    // Update the character count based on textLength
    setChar(textLength)
    console.log(textLength)
  }

  return (
    <div>
      <h1>Character Counter</h1>
      <textarea
        ref={inputRef}
        onChange={handleInputChange}
        placeholder="Type something..."
      ></textarea>
      <p>Character Count: {char}</p>
    </div>
  )
}

export default CharacterCounter
