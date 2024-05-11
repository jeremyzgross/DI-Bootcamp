const hello = async (req, res, next) => {
  try {
    res.json('Hello From Express')
  } catch (error) {
    console.log(error)
  }
}

const world = async (req, res, next)=>{
  try {
    const formSent = req.body
    const string = (`I received your POST request ${formSent.post}`)
    res.json(string)
  } catch (error) {
    console.error('Error registering user', error)
    next(error)
  }
}

module.exports = { hello, world }
