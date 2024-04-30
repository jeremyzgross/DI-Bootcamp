//create DOM elements
const registerFormDiv = document.querySelector('.register-form-container')
const loginFormDiv = document.querySelector('.login-form-container')

//event handlers for displaying forms
const displayRegisterForm = (event) => {
  event.preventDefault(event)
  registerFormDiv.style.display = 'block'
  loginFormDiv.style.display = 'none'
}
const displayLoginForm = (event) => {
  event.preventDefault(event)
  registerFormDiv.style.display = 'none'
  loginFormDiv.style.display = 'block'
}

//Login User function and API post/

//event handler for sumbit
const loginBtn = document.getElementById('loginBtn')

loginBtn.addEventListener('click', async (event) => {
  event.preventDefault(event)
  const usernameInputLogin = document.getElementById('usernamelogin').value
  const passwordInputLogin = document.getElementById('passwordlogin').value

  try {
    const data = await loginUser(usernameInputLogin, passwordInputLogin)
    console.log('User ID:', data.id)

    // Set user data in session storage
    window.sessionStorage.setItem('user', JSON.stringify(data))

    // Navigate to the budget.html page
    window.location.href = '../products.html'
  } catch (error) {
    console.error('Error logging in:', error)
  }
})

async function loginUser(usernameInputLogin, passwordInputLogin) {
  const url = 'http://localhost:3001/api/login'
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: usernameInputLogin,
      password: passwordInputLogin,
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

//Register User function and API post/
//Creating DOM elements
const registerBtn = document.getElementById('registerBtn')

registerBtn.addEventListener('click', async (event) => {
  event.preventDefault()
  const usernameInput = document.getElementById('usernameregister').value
  const passwordInput = document.getElementById('passwordregister').value
  const firstNameInput = document.getElementById('firstName').value
  const lastNameInput = document.getElementById('lastName').value
  const emailInput = document.getElementById('email').value

  const data = await registerUser(
    firstNameInput,
    lastNameInput,
    usernameInput,
    emailInput,
    passwordInput
  )
  console.log(data)
  console.log('User data:', data) // Log the data to verify it's not null or undefined
  window.sessionStorage.setItem('user', JSON.stringify(data)) // Ensure to stringify the data when setting in localStorage
  window.location.href = '../products.html'
})

//fetching endpoints

async function registerUser(
  firstNameInput,
  lastNameInput,
  usernameInput,
  emailInput,
  passwordInput
) {
  const url = 'http://localhost:3001/api/register'
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      first_name: firstNameInput,
      last_name: lastNameInput, //need to declare this in DOM
      username: usernameInput, //needs to be declared in dom
      email: emailInput, //needs to be declared in dom
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
