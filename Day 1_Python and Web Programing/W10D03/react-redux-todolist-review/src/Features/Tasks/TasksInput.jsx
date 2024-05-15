import { ADD_TASK } from './tasksReducers'
import { useRef } from 'react'
import { useDispatch} from 'react-redux'

const TasksInput = (props) =>{
  const addRef = useRef("")
    const dispatch = useDispatch()

const addTask = ()=>{
    if(addRef.current.value.trim()=== "") return
    dispatch({type:ADD_TASK, payload: addRef.current.value})
    addRef.current.value = ""
  }
  return(
    <>
        <div>
      <input ref={addRef} type="text" placeholder='Add new task...' />
      <button onClick={()=>addTask()}>Add Task</button>
    </div>
    </>
  )
}

export default TasksInput