console.log(window.sessionStorage.getItem('user'))

const userData = JSON.parse(sessionStorage.getItem('user'))
const userId = userData.id
console.log('User data from localStorage:', userId)

const continueBtn = document.getElementById('continueBtn')
// console.log(continueBtn)

continueBtn.addEventListener('click', async (event) => {
  event.preventDefault()
  const incomeData = document.getElementById('monthlyIncome').value
  const currency = document.getElementById('currency').value

  const data = await userIncome(userId, incomeData, currency)
  console.log('User data:', data) // Log the data to verify it's not null or undefined
  window.sessionStorage.setItem('user', JSON.stringify(data)) // Ensure to stringify the data when setting in localStorage
  window.location.href = './login.html'
})

async function userIncome(userId, incomeData, currency) {
  const url = 'http://localhost:3001/finance/income'
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // userId: userData.id,
      // incomeData: incomeInput, //needs to be declared in dom
      // currency: currencyInput,
      userId,
      incomeData, //needs to be declared in dom
      currency,
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
