import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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

export const CityState = ({ direction, hideOnSmall }) => {
  const [cityState, setCityState] = useState('')

  return (
    <div
      className={`city-state-component ${direction}${hideOnSmall
        ? ' hidden-on-small'
        : ''
      }`}
    >

      <Input
        placeholder="St. George, Utah"
        onChange={(e) => setCityState(e.target.value)}
        value={cityState} />

      <Link
        to={{
          pathname: '/forecast',
          search: `?city=${cityState}`
      }}>

        <Button className="success">
          Get Weather
        </Button>

      </Link>

    </div>
  )
}