const express = require('express')

const ejs = require('ejs')

const app = express()

//set template engine

app.set('view engine', 'ejs')

app.listen(process.env.PORT || 3001, () => {
  console.log(`run on ${process.env.PORT || 3001}`)
})

app.get('/demo', (req, res) => {
  let user = {
    firtName: 'John',
    lastName: 'Doe',
  }
  let login = false
  let students = {
    stu1:'marry',
    stu2: 'kelly',
    stu3: 'laura'
  }

  res.render('index', {
    user,
    login,
  })
})
