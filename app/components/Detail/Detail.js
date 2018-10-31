import React from 'react'
import { Day } from '../Day/Day'
import './Detail.css'

export const Detail = ({ city, day }) => {
  const description = day.weather[0].description

  return (
    <div className="detail-component">

      <Day
        day={day}
      />

      <h2>{city}</h2>

      <h2>{description}</h2>

      <h2>{`min temp: ${Math.round(day.main.temp_min)}`}</h2>

      <h2>{`max temp: ${Math.round(day.main.temp_max)}`}</h2>
      
      <h2>{`humidity: ${day.main.humidity}`}</h2>

    </div>
  )
}
