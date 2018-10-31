import React from 'react'
import { getDate } from '../../lib/utils'
import './Day.css'

export const Day = ({ day }) => {
  const icon = day.weather[0].icon
  const description = day.weather[0].description
  const englishDate = getDate(day.dt)

  return (
    <div className="day-component">

        <img
          src={`app/images/icons/${icon}.svg`}
          alt={description}
        />

      <h2>{englishDate}</h2>

    </div>
  )
}