const userGuess = async (event) => {
  if (event){}
  event.preventDefault()
}
  const selectedEmoji = document.querySelector(
    'input[name="emoji"]:checked'
  ).value

  try {
    const response = await fetch('/emojis')
    const randomEmoji = await response.text() 

    if (selectedEmoji === randomEmoji) {
      alert('Congratulations! Your guess is correct!')
    } else {
      alert('Oops! Your guess is incorrect. Try again!')
    }
  } catch (error) {
    console.error('Error:', error)
  }
}

userGuess()
