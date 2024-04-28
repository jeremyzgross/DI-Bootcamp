const auth = (req, res, next) => {
  const { userType } = req.query
  if (userType === 'Admin') {
    next()
  } else {
    const error = 'You do not have the right credintials'
    // console.error(error)
    next(error)
  }
}

const logger = (req, res, next) => {
  console.log('Request url =>', req.url)
  console.log('Request Params =>', req.params)
  console.log('Request query =>', req.query)
  console.log('Request Body =>', req.body)
  next()
}
module.exports = {
  auth,
  logger,
}
