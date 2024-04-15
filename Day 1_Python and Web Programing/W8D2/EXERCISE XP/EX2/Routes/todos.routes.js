const express = require('express')
const app = express()

const {
  getAllTodos,
  addNewTodos,
  updateTodo,
  deleteTodo,
} = require('../Controllers/todos.controller')
const router = express.Router()

router.get('/todos', getAllTodos)

router.post('/todos', addNewTodos)

router.put('/todos/:id', updateTodo)

router.delete('/todos/:id', deleteTodo)

module.exports = router
