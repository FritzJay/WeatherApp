import React from 'react'
import './App.css'

import { Header } from '../Header/Header'
import { CityState } from '../CityState/CityState'

export const App = () => {
  return (
    <div className="app-component" style={{ backgroundImage: "url('app/images/background.svg')"}}>

      <Header>

        <h1>Clever Title</h1>

        <CityState direction="horizontal" hideOnSmall />

      </Header>
      
      <div className="city-state-container">
      
        <h1 className="city-state-header">
          Enter a City and State
        </h1>

        <CityState direction="vertical" />
      
      </div>

    </div>
  )
}