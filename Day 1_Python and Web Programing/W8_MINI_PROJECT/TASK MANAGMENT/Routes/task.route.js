const express = require('express')
const router = express.Router()
const {
  welcome,
  retrieve,
  createTask,
  retrieveById,
  updateTasksById,
} = require('../Controllers/tasks.controller.js')

//Welcome
router.get('/', welcome)

router.get('/tasks', retrieve)

router.post('/tasks', createTask)

router.get('/tasks/:id', retrieveById)

router.put('/tasks/:id', updateTasksById)

module.exports = router
