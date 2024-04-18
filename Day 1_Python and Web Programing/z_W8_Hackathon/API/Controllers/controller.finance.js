const {
  _registerUser,
  _getUserByEmail,
  _budgetUser,
} = require('../Models/model.finance.js')

const registerUser = async (req, res) => {
  try {
    const userData = req.body // user data is sent in the request body
    const result = await _registerUser(userData)
    res.json(result)
  } catch (error) {
    console.error('Error registering user:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await _getUserByEmail({ username, password })

    // getUserByEmail will handle errors and response sending
    res.json(user)
  } catch (error) {
    // If an error occurs, getUserByEmail will throw an error with appropriate message
    console.error('Error logging in user:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

const budgetUser = async (req, res) => {
  try {
    const userId = req.params.id
    const userBudget = await _budgetUser(budgetData)
    res.json(user)
  } catch (error) {
    console.error('Error getting budget:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
module.exports = {
  registerUser,
  loginUser,
  budgetUser,
}
