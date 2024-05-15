import { useState } from 'react';
import { useSelector } from 'react-redux';
import DayTasksInput from './DayTasksInput';
import DateFilter from './DateFilter';
import TasksRemove from './TaskRemove';
import TaskEdit from './TaskEdit';

const DayPlannerList = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [taskToEdit, setTaskToEdit] = useState(null);
  const tasks = useSelector((state) => state.dayTasksReducer.tasks);

  const filteredTasks = selectedDate 
    ? tasks.filter((task) => task.date === selectedDate)
    : tasks;

  return (
    <>
      <DateFilter selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <DayTasksInput />
      <div>
        {filteredTasks.map((item) => (
          <div key={item.id}>
            {item.task} {item.date}
            <TasksRemove id={item.id} />
            <button onClick={() => setTaskToEdit(item)}>Edit</button>
          </div>
        ))}
      </div>
      {taskToEdit && <TaskEdit taskToEdit={taskToEdit} setTaskToEdit={setTaskToEdit} />}
    </>
  );
};

export default DayPlannerList;
