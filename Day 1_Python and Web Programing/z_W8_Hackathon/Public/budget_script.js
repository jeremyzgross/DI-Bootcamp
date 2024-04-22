// Retrieve user data from session storage
window.sessionStorage.getItem('user')
const userData = JSON.parse(sessionStorage.getItem('user'))
const userToDisplay = userData.id


//GET budget
// Function to fetch budget data
async function getBudgetData(userId) {
  const url = 'http://localhost:3001/finance/budget'

  const options = {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId: userId, // or simply userId if key and value are same
    }),
  }

  try {
    const response = await fetch(url, options)
    const data = await response.json()
    return data
  } catch (error) {
    // throw new Error('Failed to get budget data')
    console.log(error)
  }
}

async function updateDOMWithBudget(userToDisplay) {
  try {
    const budgetData = await getBudgetData(userToDisplay)
    console.log('Budget data:', budgetData)

    // Update DOM elements with budget data
    document.getElementById(
      'userName'
    ).textContent = `${userData.first_name} ${userData.last_name}`
    document.getElementById('monthlyIncome')
    document.getElementById(
      'monthlyIncome'
    ).textContent = `${userData.monthly_income} ${userData.currency}`
    document.getElementById(
      'necessitiesBudget'
    ).textContent = `${budgetData.necessities_50} ${budgetData.currency}`
    document.getElementById(
      'entertainmentBudget'
    ).textContent = `${budgetData.entertainment_30} ${budgetData.currency}`
    document.getElementById(
      'savingsBudget'
    ).textContent = `${budgetData.savings_20} ${budgetData.currency}`
  } catch (error) {
    console.error('Error updating DOM with budget data:', error)
  }
}

updateDOMWithBudget(userToDisplay)

const updateIncomeBtn = document.getElementById('updateIncomeBtn')

// Add an event listener to handle button clicks
updateIncomeBtn.addEventListener('click', function () {
  // Redirect to the update income page when the button is clicked
  window.location.href = './update_income.html'
})
