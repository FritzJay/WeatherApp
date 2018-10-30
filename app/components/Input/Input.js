import React from 'react'
import './Input.css'

export const Input = (props) => {
  const className = props.className
    ? `input-component ${props.className}`
    : 'input-component'

  return (
    <input {...props} className={className} />
  )
}