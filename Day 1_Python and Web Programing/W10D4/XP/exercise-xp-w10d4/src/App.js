import './App.css'
import Users from './features/users/Users'
import UsersMyErrorBoundary from './Error_Handeling/UsersErrorBoundary'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Exercise XP Users</h2>
        <UsersMyErrorBoundary>
          <Users />
        </UsersMyErrorBoundary>
      </header>
    </div>
  )
}

export default App
