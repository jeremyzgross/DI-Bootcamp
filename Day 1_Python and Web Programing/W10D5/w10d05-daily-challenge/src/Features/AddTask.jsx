import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { add } from './tasksSlice'

const AddTask = () => {
  const categoryOptions = [
    'health', 'productivity', 'recreation'
  ]

  const dispatch = useDispatch()
  const taskRef = useRef()
  const categoryRef = useRef()

  const addTaskHandler = () => {
    const task = taskRef.current.value
    const category = categoryRef.current.value

    if (task.trim()) {
      dispatch(add({ task, category }))
      console.log('Dispatched:', { task, category }) // Log the dispatched values
      taskRef.current.value = '' // Clear the input field after adding the task
    }
  }

  return (
    <>
      <h2>Add Task here. Select Category</h2>
      <div className="form-container">
        <input ref={taskRef} type="text" placeholder="Task here..." required />
        <select ref={categoryRef}>
          {categoryOptions.map((category) =>
            <option key={category} value={category}>{category}</option>
          )}
        </select>
        <button onClick={addTaskHandler}>Submit</button>
      </div>
    </>
  )
}

export default AddTask
