import React, { useState } from 'react'
import './CityState.css'

const Button = (props) => {
  const className = props.className
    ? `button-component ${props.className}`
    : 'button-component'

  return (
    <button
      {...props}
      className={className}>
      
      {props.children
        ? props.children
        : null}

    </button>
  )
}

export const Input = (props) => {
  const className = props.className
    ? `input-component ${props.className}`
    : 'input-component'

  return (
    <input {...props} className={className} />
  )
}

export const CityState = ({ history, direction, hideOnSmall }) => {
  const [cityState, setCityState] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  return (
    <div
      className={`city-state-component ${direction}${hideOnSmall ? ' hidden-on-small' : ''}`}
    >

      {errorMessage !== '' && hideOnSmall === false && <h2 className="error">{errorMessage}</h2>}

      <Input
        placeholder="St. George, Utah"
        onChange={(e) => setCityState(e.target.value)}
        value={cityState} />

      <Button
        className="success"
        onClick={() => {
          if (cityState === '') {
            setErrorMessage('Enter a location')
          } else {
            history.push(`/forecast?city=${cityState}`)
          }
        }}
      >
        Get Weather
      </Button>

    </div>
  )
}