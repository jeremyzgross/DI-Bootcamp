const {
  _registerUser,
  _getUserByEmail,
  _budgetUser,
  _updateIncome,
} = require('../models/model.finance.js')

const registerUser = async (req, res) => {
  try {
    const userData = req.body
    const result = await _registerUser(userData)
    // calculate  budget details after user registration
    const budgetDetails = await _budgetUser(result.userId)
    res.json({ message: result.message, budget: budgetDetails })
  } catch (error) {
    console.error('Error registering user:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await _getUserByEmail({ username, password })
    res.json(user)
  } catch (error) {
    console.error('Error logging in user:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

const budgetUser = async (req, res) => {
  try {
    const userId = req.params.id
    const userBudget = await _budgetUser(userId)
    res.json(userBudget)
  } catch (error) {
    console.error('Error getting budget:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

const updateIncome = async (req, res) => {
  try {
    const userID = req.params.id
    const { monthly_income } = req.body
    const income = await _updateIncome(userID, monthly_income)
    res.json(income)
  } catch (error) {
    console.error('Error updating income:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

module.exports = {
  registerUser,
  loginUser,
  budgetUser,
  updateIncome,
}
