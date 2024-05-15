import {useSelector} from 'react-redux'

const DateFilter = (props) =>{
  const dates = useSelector((state)=>
  state.dayTasksReducer.tasks)
  return (
    <div>
      <select>
        {dates.map((item) => (
          <option key={item.id} value={item.date}>
            {item.date}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DateFilter