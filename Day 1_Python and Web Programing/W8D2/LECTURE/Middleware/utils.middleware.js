//a middleware function gets 3 params: req, res, and a callback(next)
const logger = (req, res, next) => {
  console.log('urls=>', req.url)
  console.log('params=>', req.url)
  console.log('method=>', req.url)
  next()
}
//useing the middleware
// app.use(logger)
//END OF FUNCTION

//new middleware

const auth = (req, res, next) => {
  const { admin } = req.query
  if (admin === 'john') {
    next()
  } else {
    res.send('not authorized')
  }
}

module.exports = { logger, auth }
