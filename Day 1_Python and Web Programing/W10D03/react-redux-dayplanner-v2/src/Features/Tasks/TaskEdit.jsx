import { EDIT_TASK } from './TasksReducer';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

const TaskEdit = ({ taskToEdit, setTaskToEdit }) => {
  const dispatch = useDispatch();
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit.task);
      setDate(taskToEdit.date);
    }
  }, [taskToEdit]);

  const submitEditTask = () => {
    dispatch({
      type: EDIT_TASK,
      payload: { id: taskToEdit.id, task, date }
    });
    setTaskToEdit(null); // Close the edit form
  };

  return (
    <div>
      <input
        value={task}
        onChange={(event) => setTask(event.target.value)}
        type="text"
        placeholder='Edit task...'
        required
      />
      <input
        value={date}
        onChange={(event) => setDate(event.target.value)}
        type="date"
        required
      />
      <br />
      <button onClick={submitEditTask}>Submit Edits</button>
      <button onClick={() => setTaskToEdit(null)}>Cancel</button>
    </div>
  );
};

export default TaskEdit;
