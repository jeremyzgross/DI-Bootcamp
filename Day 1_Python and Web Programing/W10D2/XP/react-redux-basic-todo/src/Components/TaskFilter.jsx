const TaskFilter = (props)=>{
 return (
    <div>
      <label>
        Filter:
        <select >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="not-completed">Not Completed</option>
        </select>
      </label>
    </div>
  );
}
export default TaskFilter