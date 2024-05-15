import { ADD_TASK } from './TasksReducer'
import { useRef } from 'react'
import { useDispatch} from 'react-redux'


const DayTasksInput = (props)=>{
 const taskRef = useRef("");
  const dateRef = useRef("");
  const dispatch = useDispatch("")

  const addTask = ()=>{
    const task = taskRef.current.value;
    const date = dateRef.current.value;
    dispatch({type: ADD_TASK, payload: {task, date}});
     taskRef.current.value = "";
     dateRef.current.value = ""
  }
  return(
    <>
    <div>

        <input ref={taskRef}type="text" placeholder='Add new task...' required />
        <input ref={dateRef} type="date" required />
        <br />
        <button onClick={()=>addTask()}>Submit Task</button>

    </div>
    </>
  )
}

export default DayTasksInput