const express = require('express')

const welcome = (req, res) => {
  let welcomeMessage = 'welcome to my route!'
  res.json({ message: welcomeMessage })
}

const about = (req, res) => {
  let aboutMessage = 'this is an about page!'
  res.json({ message: aboutMessage })
}
module.exports = { welcome, about }
