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

export const fetch5DayForecast = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&type=accurate&APPID=${process.env.API_KEY}&units=imperial`

  const response = await fetch(url)
  const data = await response.json()
  data.list = getUniqueDays(data.list)
  return data 
}