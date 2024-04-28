const bcrypt = require('bcrypt')
const { db } = require('../0_Config/config.quotes')

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

const _addQuote = async (user_id, user_quote) => {
  try {
    if (!user_quote) {
      throw new Error('user_quote is required')
    }
    const existingQuote = await db('quotes')
      .where({ user_id, user_quote })
      .first()

    if (existingQuote) {
      throw new Error('Quote already exists for this user')
    }
    const userQuote = await db('quotes').insert({
      user_id,
      user_quote,
    })
    return user_quote
  } catch (error) {
    console.error('Error registering quote to user:', error)
    throw new Error('Internal Server Error')
  }
}

const _getRandomQuote = async () => {
  try {
    const users = await db('users').select('id') //get's all id numbers into an array of objects
    const userIds = users.map((user) => user.id) //from the array of objects get an array of numbers
    const randomuserId = Math.floor(Math.random() * userIds.length + 1) //extracts the user id number from array and becomes random integer
    const quote = await db('quotes')
      .select('quotes.user_quote')
      .where('quotes.user_id', randomuserId)

    const userFirstAndLast = await db('users') //gets first and last associated with random number
      .select('first_name', 'last_name')
      .where('users.id', randomuserId)

    const firstName = userFirstAndLast.map((first) => first.first_name) //extracts first name from object
    const lastName = userFirstAndLast.map((last) => last.last_name) //extracts last name from object
    const randomQuote = quote.map((quote) => quote.user_quote) //extracts the quote

    const response = {
      firstName,
      lastName,
      randomQuote,
    }

    return response
  } catch (error) {
    console.error('There was an error getting users:', error)
    throw new Error('Internal Server Error')
  }
}

const _loginUser = async (userLogin) => {
  const { username, password } = userLogin
  try {
    const user = await db('users')
      .select('users.username', 'hashpwd.password', 'users.first_name')
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

    return `You are logged in ${user.first_name}`
    // return user
  } catch (error) {
    throw new Error(error.message)
  }
}

const _getAllQuotes = async () => {
  try {
    const allQuotes = await db('quotes').select('*')
    return allQuotes
  } catch (error) {
    throw new Error(error.message)
  }
}

module.exports = {
  _registerUser,
  _addQuote,
  _getRandomQuote,
  _loginUser,
  _getAllQuotes,
}
