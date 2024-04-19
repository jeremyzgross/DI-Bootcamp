const loginBtn = document.getElementById('loginBtn')
console.log(loginBtn)

loginBtn.addEventListener('click', async (event) => {
  event.preventDefault()
  const usernameInput = document.getElementById('username').value
  const passwordInput = document.getElementById('password').value
  const data = await loginUser(usernameInput, passwordInput)
  console.log('User data:', data) // Log the data to verify it's not null or undefined
  window.sessionStorage.setItem('user', JSON.stringify(data)) // Ensure to stringify the data when setting in localStorage
  window.location.href = './budget.html'
})

async function loginUser(usernameInput, passwordInput) {
  const url = 'http://localhost:3001/finance/login'
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: usernameInput, //needs to be declared in dom
      password: passwordInput,
    }),
  }
  try {
    const res = await fetch(url, options)
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
