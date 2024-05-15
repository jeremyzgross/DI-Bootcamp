
const DisplayTasks = ({ tasksByDay }) => {
  return (
    <div className='all-tasks'>
      {/* Iterate over the keys of tasksByDay object */}
      {Object.keys(tasksByDay).map(day => (
        <div key={day}>
          <h2>{day}</h2>
          {/* Access tasks for each day using tasksByDay[day] */}
          {tasksByDay[day].map(task => (
            <div key={task.id}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};


export default DisplayTasks