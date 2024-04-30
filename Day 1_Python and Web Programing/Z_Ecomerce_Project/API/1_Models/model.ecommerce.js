const bcrypt = require('bcrypt')
const { db } = require('../0_Config/config.ecommerce')

const _registerUser = async (userData) => {
  const { first_name, last_name, username, email, password } = userData

  let trx

  try {
    const hashedPassword = await bcrypt.hash(password, 10)

    trx = await db.transaction()

    const [user] = await trx('users').insert(
      {
        first_name,
        last_name,
        username,
        email,
      },
      ['id']
    )

    await trx('hashpwd').insert({
      user_id: user.id,
      password: hashedPassword,
    })

    await trx.commit()

    return {
      user,
    }
  } catch (error) {
    if (trx) {
      await trx.rollback()
    }
    console.error('Error registering user:', error)
    throw new Error('Internal Server Error')
  }
}

const _loginUser = async (userLogin) => {
  const { username, password } = userLogin
  try {
    const user = await db('users')
      .select(
        'users.username',
        'hashpwd.password',
        'users.first_name',
        'users.id'
      )
      .where('users.username', username)
      .leftJoin('hashpwd', 'users.id', 'hashpwd.user_id')
      .first()
    if (!user) {
      throw new Error('Invalid credentials')
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
      throw new Error('Invalid credentials')
    }

    delete user.password

    // return `You are logged in ${user.first_name}`
    return { id: user.id, user }
    // return user
  } catch (error) {
    throw new Error(error.message)
  }
}

const _addInventory = async (itemsData) => {
  try {
    const addItems = await db('inventory').insert(itemsData, ['id']) //insert itemData array of obj into inventory and returns their 'id'
    return addItems
  } catch (error) {
    console.log('Error inserting items', error)
  }
}

const _displayInvetory = async () => {
  try {
    const allInvetory = await db('inventory').select('*') //shows all inventory
    return allInvetory
  } catch (error) {
    console.log('Error getting all items', error)
  }
}

const _displayNonShipped = async (userId) => {
  //Display the orders that have not shipped yet with their invetory and order information
  try {
    // Selecting specific columns from the 'orders' and 'inventory' tables
    const nonShipped = await db('orders')
      .select(
        'orders.id', // Selecting order ID from the 'orders' table
        'inventory.id', // Selecting inventory ID from the 'inventory' table
        'inventory.product_name', // Selecting product name from the 'inventory' table
        'inventory.description' // Selecting product description from the 'inventory' table
      )
      // Joining the 'orders' table with the 'orders_inventory' table based on order IDs
      .join('orders_inventory', 'orders.id', '=', 'orders_inventory.order_id')
      // Joining the 'orders_inventory' table with the 'inventory' table based on product IDs
      .join('inventory', 'orders_inventory.product_id', '=', 'inventory.id')
      // Filtering the results to include only orders for the specified user
      .where('orders.user_id', userId)
      // Further filtering to include only non-shipped orders
      .andWhere('orders.shipped', false)

    // Returning the result
    return nonShipped
  } catch (error) {
    // Handling errors
    console.log('Error Finding Item', error)
    // Optionally, you might want to rethrow the error to handle it further up the call stack
    throw error
  }
}

const _addOrder = async (user_id) => {
  try {
    console.log(user_id)
    const [addOrder] = await db('orders').insert({ user_id }).returning('id') //With the insert of a user_id which is a foreign key, add an order
    return addOrder
  } catch (error) {
    console.log('Error adding order', error)
  }
}

const _itemShipped = async (order_id) => {
  try {
    const updateOrderStatus = await db('orders')
      .where({ id: order_id }) // find order_id in orders table and update the status of shipped to true meaning it has shipped. This will set off a trigger in the sql that is timestamped
      .update({ shipped: true })
    return updateOrderStatus
  } catch (error) {
    console.log('Error updating order', error)
  }
}

const _addItemsToOrder = async (orderData) => {
  //add invetory items to the order_inventory intermdiary table
  try {
    const addItemsToTable = await db('orders_inventory').insert(orderData, [
      'id',
      'product_id',
      'order_id',
    ])
    return addItemsToTable
  } catch (error) {
    console.log('Error adding items to order', error)
  }
}

module.exports = {
  _registerUser,
  _loginUser,
  _addInventory,
  _displayInvetory,
  _displayNonShipped,
  _addOrder,
  _itemShipped,
  _addItemsToOrder,
}
