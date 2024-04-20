const {
  _registerUser,
  _userIncome,
  _getUserByEmail,
  _budgetUser,
  _updateIncome,
} = require('../models/model.finance.js')

const registerUser = async (req, res, next) => {
  try {
    const userData = req.body
    const result = await _registerUser(userData)
    // calculate  budget details after user registration
    // const budgetDetails = await _budgetUser(result.userId)
    // res.json({ message: result.message, userId: result.userId })
    res.json( result.user )
  } catch (error) {
    console.error('Error registering user', error)
    next(error)
  }
}

const userIncome = async (req, res, next) => {
  try {
    const { incomeData, userId, currency } = req.body
    const result = await _userIncome(incomeData, userId, currency)
    res.json(result)
  } catch (error) {
    console.error('Error registering user income', error)
    next(error)
  }
}

const loginUser = async (req, res, next) => {
  try {
    const { username, password } = req.body
    const user = await _getUserByEmail({ username, password })
    res.json(user)
  } catch (error) {
    console.error('Error logging in user:', error)
    next(error)
  }
}

const budgetUser = async (req, res, next) => {
  try {
    const userId = req.params.id
    const userBudget = await _budgetUser(userId)
    res.json(userBudget)
  } catch (error) {
    console.error('Error getting budget:', error)
    next(error)
  }
}

const updateIncome = async (req, res, next) => {
  try {
    const userID = req.params.id
    const { monthly_income } = req.body
    const income = await _updateIncome(userID, monthly_income)
    res.json(income)
  } catch (error) {
    console.error('Error updating income:', error)
    next(error)
  }
}

module.exports = {
  registerUser,
  userIncome,
  loginUser,
  budgetUser,
  updateIncome,
}
