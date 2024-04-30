const {
  _registerUser,
  _loginUser,
  _addInventory,
  _displayInvetory,
  _displayNonShipped,
  _addOrder,
  _itemShipped,
  _addItemsToOrder,
} = require('../1_Models/model.ecommerce')

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

// const loginUser = async (req, res, next) => {
//   try {
//     const { username, password } = req.body
//     const user = await _loginUser({ username, password })
//     res.json(user)
//   } catch (error) {
//     console.error('Error logging in user:', error)
//     next(error)
//   }
// }

const loginUser = async (req, res, next) => {
  try {
    const { username, password } = req.body
    const userObject = await _loginUser({ username, password })

    // Extract user ID and user data from the userObject
    const { id, user } = userObject

    // Respond with user ID and user data
    res.json(userObject)
  } catch (error) {
    console.error('Error logging in user:', error)
    next(error)
  }
}
const addInvetory = async (req, res, next) => {
  try {
    const { itemsData } = req.body
    const results = await _addInventory(itemsData)
    res.json(results)
  } catch (error) {
    console.error('Error adding inventory items:', error)
    next(error)
  }
}

const displayInvetory = async (req, res, next) => {
  try {
    const results = await _displayInvetory()
    res.json(results)
  } catch (error) {
    console.error('Error getting all items:', error)
    next(error)
  }
}

const displayNonShipped = async (req, res, next) => {
  try {
    const userId = req.params.id //display nonshipped items based on the users id
    const results = await _displayNonShipped(userId)
    res.json(results)
  } catch (error) {
    console.error('Error finding itms:', error)
    next(error)
  }
}

// const addOrder = async (req, res, next) => {
//   try {
//     // const { user_id } = req.body
//     // const results = await _addOrder(user_id)
//     // res.json(results)
//     const user_id = req.params.id
//     const results = await _addOrder(user_id)
//     res.json({ id: results })
//   } catch (error) {
//     console.error('Error adding order:', error)
//     next(error)
//   }
// }

const addOrder = async (req, res, next) => {
  try {
    const user_id = req.params.id
    const { id: orderId } = await _addOrder(user_id) // Destructure the result object directly
    res.json({ id: orderId }) // Return just the ID as JSON
  } catch (error) {
    console.error('Error adding order:', error)
    next(error)
  }
}

const updateItemHasShipped = async (req, res, next) => {
  try {
    const { order_id } = req.body
    const results = await _itemShipped(order_id)
    res.json(results)
  } catch (error) {
    console.error('Error updating order status:', error)
    next(error)
  }
}

const addItemsToOrder = async (req, res, next) => {
  try {
    const orderData = req.body
    const results = await _addItemsToOrder(orderData)
    res.json(results)
  } catch (error) {
    console.error('Error adding items to order', error)
    next(error)
  }
}

module.exports = {
  registerUser,
  loginUser,
  addInvetory,
  displayInvetory,
  displayNonShipped,
  addOrder,
  updateItemHasShipped,
  addItemsToOrder,
}
