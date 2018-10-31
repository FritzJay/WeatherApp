import axios from 'axios'

export const fetchCurrentWeather = (city) => {
  const url =  `http://api.openweathermap.org/data/2.5/weather?q=${city}&type=accurate&APPID=${process.env.API_KEY}`

  return axios.get(url)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.warn(error)
      return null
    })
}

export const fetch5DayForecast = (city) => {
  const url = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&type=accurate&APPID=${process.env.API_KEY}&cnt=5&units=imperial`

  return axios.get(url)
    .then((response) => {
      console.log(response)
      return response.data
    })
    .catch((error) => {
      console.warn(error)
      return null
    })
}