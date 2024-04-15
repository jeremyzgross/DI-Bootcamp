//all the logic for users goes to controller

const { users } = require('../Config/data_example.js')

const getAllUsers = (req, res) => {
  res.json(users)
} //cut from users functions

const getUserById = (req, res) => {
  const { id } = req.params
  const user = users.find((users) => user.id == id)
  if (!user) return res.status(404).json({ msg: 'notfound' })
  res.json(user)
}
module.exports = {
  getAllUsers,
  getUserById,
}
