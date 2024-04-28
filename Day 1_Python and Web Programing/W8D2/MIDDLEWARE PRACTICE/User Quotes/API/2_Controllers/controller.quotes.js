const {
  _registerUser,
  _addQuote,
  _getRandomQuote,
  _loginUser,
  _getAllQuotes,
} = require('../1_Models/model.quotes')

const registerUser = async (req, res, next) => {
  try {
    const userData = req.body
    const result = await _registerUser(userData)
    res.json(result.user)
  } catch (error) {
    console.error('Error registering user', error)
    next(error)
  }
}
const addQuote = async (req, res, next) => {
  try {
    const { user_id, user_quote } = req.body // This should be 'user_quote'
    const result = await _addQuote(user_id, user_quote) // This should be 'quote'
    res.json(result)
  } catch (error) {
    console.error('Error registering quote', error)
    next(error)
  }
}

const randomQuote = async (req, res, next) => {
  try {
    const result = await _getRandomQuote()
    res.json(
      `I am ${result.firstName} ${result.lastName} and my quote is '${result.randomQuote}'`
    )
  } catch (error) {
    console.error('Something went wrong', error)
    next(error)
  }
}

const loginUser = async (req, res, next) => {
  try {
    const { username, password } = req.body
    const user = await _loginUser({ username, password })
    res.json(user)
  } catch (error) {
    console.error('Error logging in user:', error)
    next(error)
  }
}

const getAllQuotes = async (req, res, next) => {
  try {
    const result = await _getAllQuotes()
    res.json(result)
  } catch (error) {
    console.error('Error getting all quotes:', error)
    next(error)
  }
}
module.exports = {
  registerUser,
  addQuote,
  randomQuote,
  loginUser,
  getAllQuotes,
}
