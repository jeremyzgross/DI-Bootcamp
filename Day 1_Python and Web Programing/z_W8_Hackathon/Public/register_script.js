const registerBtn = document.getElementById('registerBtn')
console.log(registerBtn)

registerBtn.addEventListener('click', async (event) => {
  event.preventDefault()
  const usernameInput = document.getElementById('username').value
  const passwordInput = document.getElementById('password').value
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
  window.location.href = './income.html'
})

//fetching endpoints

async function registerUser(
  firstNameInput,
  lastNameInput,
  usernameInput,
  emailInput,
  passwordInput
) {
  const url = 'http://localhost:3001/finance/register'
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
// registerUser()

// //need a way to get userId in session?
// activeUserId = 1
// async function getBudget() {
//   const url = 'http://localhost:3001/finance/budget/' + activeUserId
//   const options = {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   }
//   try {
//     const res = await fetch(url, options)
//     const data = await res.json()
//     console.log(data)
//   } catch (error) {
//     console.log(error)
//   }
// }
// updatedIncome = 25000
// async function updateIncome() {
//   const url = 'http://localhost:3001/finance/' + activeUserId
//   const options = {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       monthly_income: updatedIncome,
//     }),
//   }
//   try {
//     const res = await fetch(url, options)
//     const data = await res.json()
//     console.log(data)
//   } catch (error) {
//     console.log(error)
//   }
// }
// // updateIncome()
