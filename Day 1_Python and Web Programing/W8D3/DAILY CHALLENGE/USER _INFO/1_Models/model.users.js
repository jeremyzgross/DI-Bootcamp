const bcrypt = require('bcrypt')
const { db } = require('../0_Config/config.user')

const _registerUser = async (userData) => {
  const { username, password, first_name, last_name, email } = userData

  let trx

  try {
    const hashedPassword = await bcrypt.hash(password, 10)

    trx = await db.transaction()

    const [user] = await trx('users').insert(
      {
        username,
        first_name,
        last_name,
        email,
      },
      ['id']
    )

    await trx('hashpwd').insert({
      user_id: user.id,
      password: hashedPassword,
      username: username,
    })
    await trx.commit()
    return `user is registered`
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

const _geAllUsers = async () => {
  try {
    const users = await db('users').select('*')
    return users
  } catch (error) {
    throw new Error(error.message)
  }
}
module.exports = {
  _registerUser,
  _loginUser,
  _geAllUsers,
}
