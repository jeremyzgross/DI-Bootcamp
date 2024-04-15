const express = require('express')

//get data from config

const { books } = require('../Config/data_example')

const getAllBooks = (req, res) => {
  res.json(books)
}

const addNewBooks = (req, res) => {
  console.log(req.body)
  books.push(req.body)
  res.json(books)
}

const updateBooks = (req, res) => {
  const { id } = req.params
  const { name, details } = req.body
  const index = books.findIndex((item) => item.id == id)
  books[index] = {
    ...books[index],
    name,
    details,
  }
  res.json(books)
}

const deleteBooks = (req, res) => {
  const { id } = req.params
  const index = books.findIndex((item) => item.id == id)
  books.splice(index, 1)
  res.json(books)
}
module.exports = {
  getAllBooks,
  addNewBooks,
  updateBooks,
  deleteBooks,
}
