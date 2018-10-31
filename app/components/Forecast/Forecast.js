import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import queryString from 'query-string'
import { fetch5DayForecast } from '../../lib/Api'
import { getDate } from '../../lib/utils'
import './Forecast.css'

const Loading = () => {
  const [text, setText] = useState('Loading')

  useEffect(
    () => {
      const interval = window.setInterval(() => {
        if (text !== '...Loading...') {
          setText('.' + text + '.')
        } else {
          setText('Loading')
        }
      }, 300)

      return () => {
        window.clearInterval(interval)
      }
    }
  )

  return <h1>{text}</h1>
}

const Day = ({ date, iconId, description, city }) => {
  const englishDate = getDate(date)
  const urlFriendlyCity = city.toLowerCase().replace(' ', '-')

  return (
    <div className="day-component">

      <Link to={`/detail/${urlFriendlyCity}`}>

        <img
          src={`app/images/icons/${iconId}.svg`}
          alt={description}
        />

      </Link>

      <h2>{englishDate}</h2>

    </div>
  )
}

export const Forecast = ({ location }) => {
  const city = queryString.parse(location.search).city

  const [forecast, setForecast] = useState()
  
  useEffect(() => {    
    fetch5DayForecast(city)
    .then((data) => {
      if (data !== null) {
        setForecast(data)
      }
    })
  }, [location])
  
  if (forecast === undefined) {
    return (
      <div className="forecast-component">
        <Loading />
      </div>
    )
  }

  return (
    <div className="forecast-component">

      <h1>{forecast.city.name}, {forecast.city.country}</h1>

      <div className="days-container">

        {forecast.list.map((day) => (
          <Day
            key={day.dt}
            date={day.dt}
            iconId={day.weather[0].icon}
            description={day.weather[0].description}
            city={forecast.city.name}
          />
        ))}

      </div>

    </div>
  )
}
