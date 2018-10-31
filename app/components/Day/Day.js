import React from 'react'
import InlineSVG from 'svg-inline-react'

import { getDate } from '../../lib/utils'
import './Day.css'

export const Day = ({ day }) => {
  const icon = day.weather[0].icon
  const englishDate = getDate(day.dt)

  return (
    <div className="day-component">

        <InlineSVG
          src={require(`../../images/icons/${icon}.svg`)}
        />

      <h2>{englishDate}</h2>

    </div>
  )
}