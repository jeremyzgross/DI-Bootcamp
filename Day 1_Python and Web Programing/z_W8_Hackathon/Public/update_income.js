window.sessionStorage.getItem('user')
// console.log('from session sotrage');
const userData = JSON.parse(sessionStorage.getItem('user'))
const userId = userData.id
console.log(userId)
const incomeData = userData.monthly_income
const currency = userData.currency
console.log('User data from localStorage:', userData)

const updateIncomeBtn = document.getElementById('updateIncomeBtn')

updateIncomeBtn.addEventListener('click', async (event) => {
  event.preventDefault()
  const newIncome = document.getElementById('monthlyIncome').value
  const newCurrency = document.getElementById('currency').value

  const data = await updateIncome(userId, newIncome, newCurrency)
  console.log('User data:', data)

  // Update session storage with the updated user data
  window.sessionStorage.setItem('user', JSON.stringify(data))

  // Navigate to the budget.html page
  window.location.href = './budget.html'
})

async function updateIncome(userId, incomeData, currency) {
  const url = 'http://localhost:3001/finance/income'
  const options = {
    method: 'PUT',
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
