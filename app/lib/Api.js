import axios from 'axios'

export const fetchCurrentWeather = (city) => {
  const url =  `http://api.openweathermap.org/data/2.5/weather?q=${city}&type=accurate&APPID=${process.env.API_KEY}`

  return axios.get(url)

    .then((response) => {

      return {
        data: response.data,
        error: null
      }
    })

    .catch((error) => {
      return {
        data: null,
        error,
      }
    })
}

export const fetch5DayForecast = (city) => {
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&type=accurate&APPID=${process.env.API_KEY}&cnt=5`

  return axios.get(url)

    .then((response) => {
      return response.data
    })

    .catch((error) => {
      return {
        data: null,
        error,
      }
    })
}