import React, { useState } from 'react'
import './CityState.css'

import { Input } from '../Input/Input'
import { Button } from '../Button/Button'
import { fetchCurrentWeather, fetch5DayForecast } from '../../lib/Api'

export const CityState = ({ direction, hideOnSmall }) => {
  const [cityState, setCityState] = useState('')

  return (
    <div className={`city-state-component ${direction}${hideOnSmall
      ? ' hidden-on-small'
      : ''
    }`}>

      <Input
        placeholder="St. George, Utah"
        onChange={(e) => setCityState(e.target.value)}
        value={cityState}/>

      <Button
        className="success"
        onClick={() => fetchCurrentWeather('utah')}
      >
        Get Weather
      </Button>

    </div>
  )
}