//model

const bcrypt = require('bcrypt')

const { db } = require('../Config/users.config.js')

//testing everything is connected
const _getConnection = async () => {
  try {
    return db.raw(`select * from users`)
  } catch (error) {
    console.error('Error fetching posts:', error)
    throw error
  }
}

//convert to transaction syntax
// const _registerUser = async () => {
//   return db('users').insert({
//     first_name,
//     last_name,
//     username,
//     email,
//     password,
//   })
// }

const _registerUser = async (userData) => {
  const { first_name, last_name, username, email, password } = userData

  try {
    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10) // 10 is the salt rounds

    // Start a transaction
    let trx = await db.transaction()

    // return db.transaction(async (trx) => {
    // Insert user data into the users table
    const [id] = await trx('users')
      .insert(
        {
          first_name,
          last_name,
          username,
          email,
        },
        ['id']
      )
      .transacting(trx)

    // Insert hashed password into the hashpwd table, referencing the user's ID
    await trx('hashpwd')
      .insert(
        {
          user_id: id.id,
          password: hashedPassword,
        },
        ['id']
      )
      .transacting(trx)

    // If everything is successful, commit the transaction
    await trx.commit()

    // return 'User registered successfully with transaction'
    return id
    // })
  } catch (error) {
    // If any error occurs, rollback the transaction
    await db.rollback()
    console.error('Error registering user:', error)
    throw new Error('Internal Server Error')
  }
}

const _loginUser = async (userLogin) => {
  const { username, password } = userLogin
  try {
    const user = await db('users')
      .select('users.id as user_id', 'hashpwd.password')
      .join('hashpwd', 'users.id', '=', 'hashpwd.user_id')
      .where('users.username', username)
      .first()
    //knex returns first user and not array

    if (!user) {
      // If no user found with the provided username, return null or throw an error
      throw new Error('User not found')
    }

    // Compare the provided password with the hashed password stored in the database
    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
      // If passwords don't match, return null or throw an error
      throw new Error('Incorrect password')
    }

    // If user exists and password is correct, return the user data
    return `Welcome back ${username}. You are logged in`
  } catch (error) {
    console.error(error)
    throw new Error('Internal Server Error')
  }
}

module.exports = {
  _getConnection,
  _registerUser,
  _loginUser,
}
