const {
  _registerUser,
  _loginUser,
  _geAllUsers,
} = require('../1_Models/model.users')

const registerUser = async (req, res, next) => {
  try {
    const userData = req.body
    const result = await _registerUser(userData)
    res.json(result)
  } catch (error) {
    console.error('Error registering user', error)
    next(error)
  }
}

const loginUser = async (req, res, next) => {
  try {
    const userLogin = req.body
    const user = await _loginUser(userLogin)
    res.json(user)
  } catch (error) {
    console.error('Error logging in user:', error)
    next(error)
  }
}
const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = req.params
    const user = await _geAllUsers(allUsers)
    res.json(user)
  } catch (error) {
    console.error('Error getting users:', error)
    next(error)
  }
}

module.exports = { registerUser, loginUser, getAllUsers }
