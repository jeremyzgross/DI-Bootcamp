import {useState, useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { ADD_TASK, COMPLETE_TASK, REMOVE_TASK } from './tasksReducers'
import './taskstyle.css'
import TasksTitle from './TasksTitle'
import TasksInput from './TasksInput'
import TasksRemove from './TasksRemove'
const TaskList =(props)=>{
    const [filter, setFilter] = useState('all')
  // const addRef = useRef("")
  const dispatch = useDispatch()
  const tasks = useSelector((state)=>
    state.tasksReducer.tasks)
  console.log(tasks);
  // const addTask = ()=>{
  //   if(addRef.current.value.trim()=== "") return
  //   dispatch({type:ADD_TASK, payload: addRef.current.value})
  //   addRef.current.value = ""
  // }

  const taskCompleted = (id) =>{
    dispatch({type: COMPLETE_TASK, payload: id})
  }

  // const removeTask = (id)=>{
  //   dispatch({type:REMOVE_TASK,id})
  // }

  const filtertasks = tasks.filter(task=>{
    if (filter === 'completed') return task.completed
    else if (filter === 'active') return !task.completed
    return task
  })
  return(
    <>
    {/* <h2>Task List</h2> */}
<TasksTitle/>
    {/* <div>
      <input ref={addRef} type="text" placeholder='Add new task...' />
      <button onClick={()=>addTask()}>Add Task</button>
    </div> */}
    <TasksInput/>
    <div>
      <div>
        <button onClick={()=>{setFilter('all')}}>All</button>
        <button onClick={()=>{setFilter('completed')}}>Completed</button>
        <button onClick={()=>{setFilter('active')}}>Active</button>
      </div>
      {
        filtertasks.map(item=>{
          return(
            <div key={item.id}>
              <span className={item.completed ? "completed": ""}
                            onClick={()=> taskCompleted(item.id)}
              >
  
                {item.task} 
              </span>
                  <TasksRemove id={item.id}/>
              {/* <button onClick={()=>{ removeTask(item.id)}}>-</button> */}
            </div>
          )
        })
      }
    </div>
    </>
  )
}

export default TaskList