import { TodoList } from './todo.js'

let newTaskList = new TodoList()
newTaskList.addTask('take out dog')
newTaskList.addTask('laundry')
newTaskList.completeTasks('take out dog')

console.log(newTaskList.listAllTasks())
