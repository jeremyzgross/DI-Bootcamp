//fetching endpoints

//testdata to send
firstName = 'Elisabeth'
lastName = 'Gross'
userName = 'eMoney'
monthlyIncome = 7000
eMail = 'email@email.com'
defaultCurrency = 'USD'
hardPassword = 'unsecure'

async function registerUser() {
  const url = 'http://localhost:3001/finance/register'
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      first_name: firstName, //need to declare this in DOM
      last_name: lastName, //need to declare this in DOM
      username: userName, //needs to be declared in dom
      email: eMail, //needs to be declared in dom
      monthly_income: monthlyIncome, //needs to be declared in dom
      currency: defaultCurrency, //needs to be declared in dom
      password: hardPassword,
    }),
  }
  try {
    const res = await fetch(url, options)
    const data = await res.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
// registerUser()

async function loginUser() {
  const url = 'http://localhost:3001/finance/login'
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: userName, //needs to be declared in dom
      password: hardPassword,
    }),
  }
  try {
    const res = await fetch(url, options)
    const data = await res.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

// loginUser()

//need a way to get userId in session?
activeUserId = 1
async function getBudget() {
  const url = 'http://localhost:3001/finance/budget/' + activeUserId
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }
  try {
    const res = await fetch(url, options)
    const data = await res.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
updatedIncome = 25000
async function updateIncome() {
  const url = 'http://localhost:3001/finance/' + activeUserId
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      monthly_income: updatedIncome,
    }),
  }
  try {
    const res = await fetch(url, options)
    const data = await res.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
// updateIncome()
