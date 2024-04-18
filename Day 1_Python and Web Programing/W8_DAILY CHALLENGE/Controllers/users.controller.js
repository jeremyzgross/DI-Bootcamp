const {
  _getConnection,
  _registerUser,
  _loginUser,
} = require('../Models/users.model.js')

const getConnection = (req, res) => {
  _getConnection()
    .then((data) => {
      res.json(data.rows)
    })
    .catch((error) => {
      console.log(error)
      res.status(500).json({ error: 'Internal server error' })
    })
}

const registerUser = (req, res) => {
  const userData = req.body // Assuming user data is sent in the request body
  _registerUser(userData)
    .then((result) => {
      res.json(result)
    })
    .catch((error) => {
      console.error('Error registering user:', error)
      res.status(500).json({ error: 'Internal server error' })
    })
}

const loginUser = (req, res) => {
  const userLogin = req.body
  _loginUser(userLogin)
    .then((result) => {
      res.json(result)
    })
    .catch((error) => {
      console.error('Error log in user:', error)
      // res.status(500).json({ error: 'Internal server error' })
      res.json('Username and Password not found')
    })
}
module.exports = {
  getConnection,
  registerUser,
  loginUser,
}
