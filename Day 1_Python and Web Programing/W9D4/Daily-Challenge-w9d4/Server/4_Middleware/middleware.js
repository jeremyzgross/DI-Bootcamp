const logger = (req, res, next) => {
  console.log('Request url =>', req.url)
  console.log('Request Params =>', req.params)
  console.log('Request query =>', req.query)
  console.log('Request Body =>', req.body)
  next()
}

module.exports = logger
