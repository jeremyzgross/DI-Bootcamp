import {useSelector} from 'react-redux'
//need to build functionality that wont add a date if it already exist 
const DateFilter = ({selectedDate, setSelectedDate}) => {
  const dates = useSelector((state) => 
    state.dayTasksReducer.tasks
      .map(task => task.date)
      .filter((date, index, self) => self.indexOf(date) === index) 
  )

return (
    <div>
      <select 
        value={selectedDate} 
        onChange={(e) => setSelectedDate(e.target.value)}
      >
        <option value="">All Dates</option>
        {dates.map((date, index) => (
          <option key={index} value={date}>
            {date}
          </option>
        ))}
      </select>
    </div>
  )
}

export default DateFilter