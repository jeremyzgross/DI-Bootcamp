// console.log('from JSON');

//LOGIN INFO
window.sessionStorage.getItem('user')
// console.log('from session sotrage');
const userData = JSON.parse(sessionStorage.getItem('user'))
console.log('User data from localStorage:', userData)

document.getElementById(
  'userName'
).textContent = `${userData.first_name} ${userData.last_name}`
document.getElementById('monthlyIncome').textContent = userData.monthly_income

document.getElementById('necessitiesBudget').textContent =
  userData.necessities_50
document.getElementById('entertainmentBudget').textContent =
  userData.entertainment_30
document.getElementById('savingsBudget').textContent = userData.savings_20

//Update Income event
