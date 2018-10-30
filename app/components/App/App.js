import React from 'react'
import './App.css'

import { Header } from '../Header/Header'

export const App = () => {
  return (
    <div className="app-component" style={{ backgroundImage: "url('app/images/background.svg')"}}>

      <Header>
        <h1>Clever Title</h1>
      </Header>
      
      <div className="city-state-container">
      
        <h1 className="city-state-header">
          Enter a City and State
        </h1>

        <div className="zip-code-container">

          <input
            className="input"
            placeholder="St. George, Utah" />

          <button className="get-weather-btn btn btn-success">
            Get Weather
          </button>

        </div>
      
      </div>

    </div>
  )
}