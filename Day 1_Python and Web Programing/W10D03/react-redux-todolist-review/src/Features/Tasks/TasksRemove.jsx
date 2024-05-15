import { REMOVE_TASK } from './tasksReducers'
import { useDispatch} from 'react-redux'
const TasksRemove = (props)=>{
    const dispatch = useDispatch()
  const removeTask = (id)=>{
    dispatch({type:REMOVE_TASK,id})
  }
  return(
    <>
    <button onClick={()=>{ removeTask(props.id)}}>-</button>
    </>
  )
}

export default TasksRemove