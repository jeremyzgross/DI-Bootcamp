import React, { useState, useEffect } from 'react'

const FormComponent = () => {
  const [response, setResponse] = useState('')

  useEffect(() => {}, [response])

  const handleSubmit = async (event) => {
    event.preventDefault()
    let data = event.target.elements.userInput.value
    try {
      const responseData = await sendFormToServer(data)
      setResponse(responseData)
    } catch (error) {
      console.error('Error in sending form data:', error)
    }
  }

  const sendFormToServer = async (formData) => {
    const url = 'http://localhost:3001/api/world'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        post: formData,
      }),
    }
    try {
      const response = await fetch(url, options)
      const data = await response.json()
      return data
    } catch (error) {
      throw new Error('Failed to post')
    }
  }

  return (
    <>
      <p style={{ fontWeight: 'bold' }}>Post to Server:</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="userInput" />
        <input type="submit" />
      </form>
      <p>Response should be here:{response}</p>
    </>
  )
}

export default FormComponent
