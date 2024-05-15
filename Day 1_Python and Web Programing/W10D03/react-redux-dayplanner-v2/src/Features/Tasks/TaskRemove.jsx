import { REMOVE_TASK } from './TasksReducer'
import { useDispatch} from 'react-redux'
const TasksRemove = (props)=>{
    const dispatch = useDispatch()
  const removeTask = (id)=>{
    dispatch({type:REMOVE_TASK,id})
  }
  return(
    <>
    <button onClick={()=>{ removeTask(props.id)}}>Delete</button>
    </>
  )
}

export default TasksRemove