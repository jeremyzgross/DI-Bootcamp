const bcrypt = require('bcrypt')
const { db } = require('../Config/config.finance.js')

const _registerUser = async (userData) => {
  const {
    first_name,
    last_name,
    username,
    email,
    password,
    monthly_income,
    currency,
  } = userData

  let trx // Define trx outside try-catch block

  try {
    const hashedPassword = await bcrypt.hash(password, 10) // 10 is the salt rounds

    // Start a transaction
    trx = await db.transaction()

    // Insert user data into the users table
    const [id] = await trx('users').insert(
      {
        first_name,
        last_name,
        username,
        email,
      },
      ['id']
    )

    // Insert hashed password into the hashpwd table, referencing the user's ID
    await trx('hashpwd').insert({
      user_id: id.id,
      password: hashedPassword,
    })

    // Insert income data into the income table, referencing the user's ID
    await trx('income').insert({
      user_id: id.id,
      monthly_income: monthly_income,
      currency: currency,
    })

    // If everything is successful, commit the transaction
    await trx.commit()

    return `User ${username} was registered with ID ${id.id}`
  } catch (error) {
    // If any error occurs, rollback the transaction
    if (trx) {
      await trx.rollback()
    }
    console.error('Error registering user:', error)
    throw new Error('Internal Server Error')
  }
}
const _getUserByEmail = async (userLogin) => {
  const { username, password } = userLogin
  try {
    const user = await db('users')
      .select(
        'users.id',
        'users.first_name',
        'users.last_name',
        'income.monthly_income',
        'income.currency',
        'hashpwd.password'
      )
      .where('users.username', username)
      .leftJoin('income', 'users.id', 'income.user_id') //left join at same ids
      .leftJoin('hashpwd', 'users.id', 'hashpwd.user_id') //left join at same ids
      .first()

    if (!user) {
      throw new Error('Invalid credentials')
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
      throw new Error('Invalid credentials')
    }

    // Remove password from user object before returning
    delete user.password

    return user
  } catch (error) {
    throw new Error(error.message) // Throw error with appropriate message
  }
}

const _budgetUser = async (userId) => {
  try {
    // Fetch user's monthly income from the database
    const userIncome = await db('income').where('user_id', userId).first() //get's the users income from income table based on the id

    if (!userIncome) {
      throw new Error('Income or user not found')
    }

    // calculate 50/30/20
    const totalIncome = userIncome.monthly_income //grabs monthly income column
    const necessities = totalIncome * 0.5 // 50% for necessities
    const entertainment = totalIncome * 0.3 // 30% for entertainment and fun
    const savings = totalIncome * 0.2 // 20% for savings and debt

    // insert or update thier 50 30 20 into the budget table
    await db('budget').where('user_id', userId).update({
      necessities_50: necessities,
      entertainment_30: entertainment,
      savings_20: savings,
    })

    return { necessities, entertainment, savings }
  } catch (error) {
    throw error
  }
}
module.exports = {
  _registerUser,
  _getUserByEmail,
  _budgetUser,
}
