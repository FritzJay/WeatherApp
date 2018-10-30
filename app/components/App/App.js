import React from 'react'
import './App.css'

import { Header } from '../Header/Header'
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'

export const App = () => {
  return (
    <div className="app-component" style={{ backgroundImage: "url('app/images/background.svg')"}}>

      <Header>

        <h1>Clever Title</h1>

        <div className="zip-code-container horizontal hidden-on-small">

          <Input placeholder="St. George, Utah" />

          <Button className="success">
            Get Weather
          </Button>

        </div>

      </Header>
      
      <div className="city-state-container">
      
        <h1 className="city-state-header">
          Enter a City and State
        </h1>

        <div className="zip-code-container vertical">

          <Input placeholder="St. George, Utah" />

          <Button className="success">
            Get Weather
          </Button>

        </div>
      
      </div>

    </div>
  )
}