const fs = require('fs')
const path = require('path')
const tasksFilePath = path.resolve(__dirname, '../tasks.json')

//welcome
const welcome = (req, res) => {
  const welcomeMsg = 'Welcome To Task Management'
  res.json(welcomeMsg)
}

// get all tasks
const retrieve = (req, res) => {
  fs.readFile(tasksFilePath, (err, data) => {
    if (err) {
      console.error(err)
      res.status(500).send('Error reading tasks file')
      return
    }
    const tasks = JSON.parse(data)

    // Send tasks as JSON response
    res.json(tasks)
  })
}

//get tasks by id

const retrieveById = (req, res) => {
  const { id } = req.params
  fs.readFile(tasksFilePath, (err, data) => {
    if (err) {
      console.error(err)
      return res.status(500).send('Error reading tasks file')
    }
    const tasks = JSON.parse(data)
    const task = tasks.find((item) => item.id == id)

    if (!task) {
      return res.sendStatus(404)
    }
    res.status(200).json(task)
  })
}

//post create a new tasks
//we have to first retreive the existing json task add to it and then add it back all together
const createTask = (req, res) => {
  // Read existing tasks
  fs.readFile(tasksFilePath, (err, data) => {
    if (err) {
      console.error('Error reading tasks file:', err)
      res.status(500).send('Error reading tasks file')
      return
    }

    // Parse existing tasks
    const tasks = JSON.parse(data)
    // Add new task
    const newTask = req.body
    tasks.push(newTask)
    // Write updated tasks back to file
    fs.writeFile(tasksFilePath, JSON.stringify(tasks, null, 2), (error) => {
      if (error) {
        console.error('Error writing tasks file:', error)
        res.status(500).send('Error writing tasks file')
        return
      }
      res.status(201).send('New task has been added successfully')
    })
  })
}

const updateTasksById = (req, res) => {
  const { id } = req.params
  const updatedTaskData = req.body

  fs.readFile(tasksFilePath, (err, data) => {
    if (err) {
      console.error(err)
      return res.status(500).send('Error reading tasks file')
    }

    const tasks = JSON.parse(data)
    const taskIndex = tasks.findIndex((item) => item.id == id)

    if (taskIndex === -1) {
      return res.sendStatus(404)
    }

    // Update the task object with the updated data
    tasks[taskIndex] = { ...tasks[taskIndex], ...updatedTaskData }

    // Write the updated tasks back to the file
    fs.writeFile(tasksFilePath, JSON.stringify(tasks, null, 2), (error) => {
      if (error) {
        console.error('Error writing tasks file:', error)
        return res.status(500).send('Error writing tasks file')
      }
      res.status(201).send('Task has been updated')
    })
  })
}

module.exports = {
  welcome,
  retrieve,
  createTask,
  retrieveById,
  updateTasksById,
}
