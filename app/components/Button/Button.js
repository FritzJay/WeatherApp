import React from 'react'
import './Button.css'

export const Button = (props) => {
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