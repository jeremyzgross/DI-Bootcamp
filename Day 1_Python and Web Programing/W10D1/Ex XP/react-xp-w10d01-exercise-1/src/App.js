import './App.css'
import { React, createContext } from 'react'
import { ThemeProvider, useTheme } from './Components/ThemeContext'

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current Theme: {theme}</p>
    </div>
  )
}
function App() {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  )
}

function Content() {
  const { theme } = useTheme()

  return (
    <div className={`App ${theme}`}>
      <h1>Theme Switcher Example</h1>
      <ThemeSwitcher />
      {/* Other components here */}
    </div>
  )
}

export default App
