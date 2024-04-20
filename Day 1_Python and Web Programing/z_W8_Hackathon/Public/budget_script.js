// console.log('from JSON');

//LOGIN INFO
window.sessionStorage.getItem('user')
// console.log('from session sotrage');
const userData = JSON.parse(sessionStorage.getItem('user'))
console.log('User data from localStorage:', userData)

document.getElementById(
  'userName'
).textContent = `${userData.first_name} ${userData.last_name}`
document.getElementById(
  'monthlyIncome'
).textContent = `${userData.monthly_income} ${userData.currency}`

document.getElementById(
  'necessitiesBudget'
).textContent = `${userData.necessities_50} ${userData.currency}`
document.getElementById(
  'entertainmentBudget'
).textContent = `${userData.entertainment_30} ${userData.currency}`
document.getElementById(
  'savingsBudget'
).textContent = `${userData.savings_20} ${userData.currency}`

//Update Income event listener

const updateIncomeBtn = document.getElementById('updateIncomeBtn')

// Add an event listener to handle button clicks
updateIncomeBtn.addEventListener('click', function () {
  // Redirect to the update income page when the button is clicked
  window.location.href = './update_income.html'
})
