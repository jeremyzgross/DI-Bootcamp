/*Create a directory named todoApp.

Inside the todoApp directory, create two files: todo.js and app.js.

In todo.js, define an ES6 module that exports a TodoList class.

The TodoList class should have methods to add tasks, mark tasks as complete, and list all tasks.

Export the TodoList class.

In app.js, import the TodoList class from the todo.js module.

Create an instance of the TodoList class.

Add a few tasks, mark some as complete, and list all tasks.

Run app.js and verify that the todo list operations are working correctly. */

export class TodoList {
  constructor() {
    this.tasks = []
  }
  addTask(taskDescription) {
    const task = {
      description: taskDescription,
      completed: false,
    }
    this.tasks.push(task)
  }
  completeTasks(taskDescription) {
    // Find the task by its description
    const task = this.tasks.find((task) => task.description === taskDescription)
    // If task is found, mark it as completed
    if (task) {
      task.completed = true
    } else {
      console.log('task not found')
    }

    return task
  }
  listAllTasks() {
    return this.tasks
  }
}


//test case
// let newTaskList = new TodoList()
// newTaskList.addTask('take out dog')
// newTaskList.addTask('laundry')
// newTaskList.completeTasks('take out dog')

// console.log(newTaskList.listAllTasks())

