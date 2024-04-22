const { apiKey } = require('../0_Config/config')

const _getWeather = async (zipCode, countryCode) => {
  let longandlatUrl = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},${countryCode}&appid=${apiKey}`
  let longandlatOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(),
  }
  try {
    const resolve = await fetch(longandlatUrl, longandlatOptions)
    const latandlon = await resolve.json()
    const latidude = latandlon.lat //40.6747
    const longitude = latandlon.lon //-74.2239
    const city = latandlon.name //Elizabeth
    //using info in second endpoint call
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latidude}&lon=${longitude}&appid=${apiKey}`
    let weatherOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(),
    }
    try {
      const weatherResolve = await fetch(weatherUrl, weatherOptions)
      const weather = await weatherResolve.json()
      // console.log('Weather json=>', weather)
      const temperature = weather.main.temp
      return { temperature, city }
    } catch (error) {
      console.log('Weather Error =>', error)
    }
  } catch (error) {
    console.log('Zipcode Error =>', error)
  }
}

module.exports = {
  _getWeather,
}
