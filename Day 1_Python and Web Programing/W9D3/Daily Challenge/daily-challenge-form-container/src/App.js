import React, { useState } from 'react'
import './App.css'
import Form from './Components/Form'
import Summary from './Components/Summary'

function App() {
  const [formData, setFormData] = useState(null)

  const handleFormDataChange = (data) => {
    setFormData(data)
  }

  const [summary, setSummary] = useState()

  return (
    <div className="App">
      <header className="App-header">
        <Form onFormDataChange={handleFormDataChange} />
        {/* {formData ? <Summary /> : <Summary formData={formData} />} */}
        {formData && <Summary formData={formData} />}
      </header>
    </div>
  )
}

export default App
