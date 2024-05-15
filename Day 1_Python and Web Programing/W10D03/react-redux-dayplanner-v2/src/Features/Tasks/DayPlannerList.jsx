// import {useState, useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import DayTasksInput from './DayTasksInput'
import DateFilter from './DateFilter'

const DayPlannerList = (props) =>{
  const tasks = useSelector((state)=>
  state.dayTasksReducer.tasks)
  console.log(tasks);

  return(
    <>
    <DateFilter/>
    <DayTasksInput/>
    <div>
      {tasks.map(item =>{
        return(
          <div key={item.id}>
            {item.task} {item.date}
          </div>
        )
      })}
    </div>
    </>
  )
}
export default DayPlannerList