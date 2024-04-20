// updateIncomeBtn.addEventListener('click', async (event) => {
//   event.preventDefault()

//   const incomeData = document.getElementById('monthlyIncome').value
//   const currency = document.getElementById('currency').value
//   const userData = JSON.parse(window.sessionStorage.getItem('user'))
//   const userId = userData.id

//   try {
//     const data = await updateIncome(userId, incomeData, currency)
//     console.log('User data:', data)

//     // Update user data in session storage with the updated income and currency
//     userData.monthly_income = incomeData
//     userData.currency = currency
//     window.sessionStorage.setItem('user', JSON.stringify(userData))

//     // Navigate back to the budget.html page
//     window.location.href = './budget.html'
//   } catch (error) {
//     console.error('Error updating income:', error)
//   }
// })

// async function updateIncome(userId, monthly_income, currency) {
//   const url = 'http://localhost:3001/finance/income'
//   const options = {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       userId,
//       monthly_income,
//       currency,
//     }),
//   }

//   try {
//     const response = await fetch(url, options)
//     const data = await response.json()
//     return data
//   } catch (error) {
//     throw new Error('Failed to update income')
//   }
// }

updateIncomeBtn.addEventListener('click', async (event) => {
  event.preventDefault()

  const incomeData = document.getElementById('monthlyIncome').value
  const currency = document.getElementById('currency').value
  const userData = JSON.parse(window.sessionStorage.getItem('user'))
  const userId = userData.id

  try {
    const data = await updateIncome(userId, incomeData, currency)
    console.log('User data:', data)

    // Update user data in session storage with the updated income and currency
    userData.monthly_income = incomeData
    userData.currency = currency
    window.sessionStorage.setItem('user', JSON.stringify(userData))

    // Navigate back to the budget.html page
    window.location.href = './budget.html'
  } catch (error) {
    console.error('Error updating income:', error)
  }
})

async function updateIncome(userId, monthly_income, currency) {
  const url = 'http://localhost:3001/finance/income'
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId,
      monthly_income,
      currency,
    }),
  }

  try {
    const response = await fetch(url, options)
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error('Failed to update income')
  }
}
