import './App.css'
import DisplayTasks from './Features/DisplayTasks'
import AddTask from './Features/AddTask'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Daily Challenge Redux Productivity Tracker</h1>
        <AddTask />
        <DisplayTasks />
      </header>
    </div>
  )
}

export default App
