import React from 'react'
import { useSelector } from 'react-redux'
import { selectTasks } from './tasksSlice'

const DisplayTasks = () => {
const tasks = useSelector(selectTasks) || [] // Use an empty array as default value if tasks are undefined
  console.log('Tasks:', tasks) // Log the tasks from the state

  return (
    <div>
      <h2>Task List</h2>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map(task => (
            <li key={task.id}>{task.task} - {task.category}</li>
          ))}
        </ul>
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  )
}


export default DisplayTasks
