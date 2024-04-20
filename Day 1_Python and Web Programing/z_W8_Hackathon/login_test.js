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
      .leftJoin('income', 'users.id', 'income.user_id')
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

    return user
  } catch (error) {
    throw new Error(error.message)
  }
}
