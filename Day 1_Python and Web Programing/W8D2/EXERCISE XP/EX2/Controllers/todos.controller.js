const express = require('express')

//get data from config

const { todos } = require('../Config/data_example')

const getAllTodos = (req, res) => {
  res.json(todos)
}

const addNewTodos = (req, res) => {
  console.log(req.body)
  todos.push(req.body)
  res.json(todos)
}

const updateTodo = (req, res) => {
  const { id } = req.params
  const { name, details } = req.body
  const index = todos.findIndex((item) => item.id == id)
  todos[index] = {
    ...todos[index],
    name,
    details,
  }
  res.json(todos)
}

const deleteTodo = (req, res) => {
  const { id } = req.params
  const index = todos.findIndex((item) => item.id == id)
  todos.splice(index, 1)
  res.json(todos)
}
module.exports = {
  getAllTodos,
  addNewTodos,
  updateTodo,
  deleteTodo,
}
