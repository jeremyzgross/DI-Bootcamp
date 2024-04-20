const loginBtn = document.getElementById('loginBtn')

loginBtn.addEventListener('click', async (event) => {
  event.preventDefault()

  const usernameInput = document.getElementById('username').value
  const passwordInput = document.getElementById('password').value

  try {
    const userData = await loginUser(usernameInput, passwordInput)
    console.log('User data:', userData)

    // Set user data in session storage
    window.sessionStorage.setItem('user', JSON.stringify(userData))

    // Navigate to the budget.html page
    window.location.href = './budget.html'
  } catch (error) {
    console.error('Error logging in:', error)
  }
})

async function loginUser(usernameInput, passwordInput) {
  const url = 'http://localhost:3001/finance/login'
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: usernameInput,
      password: passwordInput,
    }),
  }

  try {
    const response = await fetch(url, options)
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error('Failed to log in')
  }
}
