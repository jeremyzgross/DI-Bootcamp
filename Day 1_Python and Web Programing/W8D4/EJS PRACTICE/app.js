const express = require('express')

const app = express()

//register view engine
app.set('view engine', 'ejs')

app.listen(3000, () => {
  console.log('run on 3000!!')
})

app.get('/', (req, res) => {
  const blogsArray = [
    { title: 'Yoshi finds eggs', snippet: 'lorem ipsum' },
    { title: 'Mario finds princess', snippet: 'lorem ipsum' },
    {
      title: 'How to defeat bowser while he finds eggs',
      snippet: 'lorem ipsum',
    },
  ]
  res.render('index', { title: 'Home', blogs: blogs })
})
app.get('/about', (req, res) => {
  res.render('about', { title: 'About' })
})

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create' })
})

//404
app.use((req, res) => {
  res.status(404).render('404', { title: '404 Error' })
})
