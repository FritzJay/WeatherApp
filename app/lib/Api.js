import axios from 'axios'

const getUniqueDays = (list) => {
  const uniqueDays = []
  
  return list.filter((item) => {
    const date = new Date(item.dt * 1000)
    const day = date.getDay()
    const hour = date.getHours()

    const isDayTime = hour > 9 && hour < 14
    const isNewDay = !uniqueDays.includes(day)

    if (isDayTime && isNewDay) {
      uniqueDays.push(day)
      return true
    }

    return false
  })
}

export const fetchCurrentWeather = (city) => {
  const url =  `http://api.openweathermap.org/data/2.5/weather?q=${city}&type=accurate&APPID=${process.env.API_KEY}&units=imperial`

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
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&type=accurate&APPID=${process.env.API_KEY}&units=imperial`

  return axios.get(url)
    .then((response) => {            
      response.data.list = getUniqueDays(response.data.list)

      console.log(response.data.list)

      return response.data
    })
    .catch((error) => {
      console.warn(error)
      return null
    })
}