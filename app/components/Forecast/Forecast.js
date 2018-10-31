import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import queryString from 'query-string'
import { fetch5DayForecast } from '../../lib/Api'
import { Day } from '../Day/Day'
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

export const Forecast = ({ location, onSelect }) => {
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

  const cityName = `${forecast.city.name}, ${forecast.city.country}`
  const urlFriendlyCity = cityName
                            .toLowerCase()
                            .replace(' ', '-')
                            .replace(',', '')


  return (
    <div className="forecast-component">

      <h1>{cityName}</h1>

      <div className="days-container">

        {forecast.list.map((day) => (
          <Link
            key={day.dt}
            to={`/detail/${urlFriendlyCity}`}
            onClick={() => onSelect({
              city: cityName,
              day,
            })}
          >

            <Day
              city={cityName}
              day={day}
            />

          </Link>
        ))}

      </div>

    </div>
  )
}
