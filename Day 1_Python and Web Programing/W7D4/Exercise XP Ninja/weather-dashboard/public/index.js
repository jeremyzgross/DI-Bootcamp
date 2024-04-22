// Function to fetch weather data from the Express server
const fetchData = async (zipCode, countryCode) => {
  try {
    // Make a GET request to your Express API endpoint with dynamic parameters
    const response = await fetch(
      `/weather?zipCode=${zipCode}&countryCode=${countryCode}`
    )
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()

    // Use the data received from the server
    return data
  } catch (error) {
    console.error('Fetch error:', error)
  }
}

// Function to display weather data on the webpage
const displayWeatherData = async () => {
  try {
    const zipCode = prompt('Enter zipcode:')
    const countryCode = prompt('Enter country code:').toUpperCase()
    console.log(zipCode)
    console.log(countryCode)

    const weatherData = await fetchData(zipCode, countryCode)
    console.log(weatherData)
    const weatherDiv = document.getElementById('weatherData')
    weatherDiv.innerHTML = `
      <p>Temperature: ${weatherData.temperature}</p>
      <p>City: ${weatherData.city}</p>
    `
  } catch (error) {
    console.error('Error displaying weather data:', error)
  }
}

// Call the displayWeatherData function when the page loads
window.onload = displayWeatherData
