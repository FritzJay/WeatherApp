import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import InlineSVG from 'svg-inline-react'

import { CityState } from '../CityState/CityState'
import { Forecast } from '../Forecast/Forecast'
import { Detail } from '../Detail/Detail'
import './App.css'

export const Header = ({ children }) => {
  return (
    <div className="header-component">
      {children
        ? children
        : null}
    </div>
  )
}

const TitlePage = (props) => {
  return (
    <div
      className="city-state-container"
    >

      <InlineSVG
        className="background"
        src={require('../../images/background.svg')}
      />

      <h1 className="city-state-header">
        Enter a City and State
      </h1>

      <CityState
        {...props}
        direction="vertical"
      />

    </div>
  )
}

export const App = () => {
  const [ detail, setDetail ] = useState()

  return (
    <div className="app-component">

      <Header>

        <h1>Weather</h1>

        <CityState
          direction="horizontal"
          hideOnSmall
        />

      </Header>

      <Switch>
        
        <Route exact path="/" component={TitlePage} />

        <Route path="/forecast" render={(props) => (
          <Forecast
            {...props}
            onSelect={(selectedDay) => setDetail(selectedDay)}
          />
         )} />
        )} />

        <Route path="/detail/" render={(props) => (
          <Detail
            {...props}
            city={detail.city}
            day={detail.day}
          />
        )} />

        <Route render={() => <p>404 - Page not found</p>} />

      </Switch>

    </div>
  )
}