import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'

import { Header } from '../Header/Header'
import { CityState } from '../CityState/CityState'
import { Forecast } from '../Forecast/Forecast'

const TitlePage = (props) => {
  return (
    <div
      className="city-state-container"
      style={{ backgroundImage: "url('app/images/background.svg')"}}
    >

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
  return (
    <div className="app-component">

      <Header>

        <h1>Clever Title</h1>

        <CityState
          direction="horizontal"
          hideOnSmall
        />

      </Header>

      <Switch>
        
        <Route exact path="/" component={TitlePage} />

        <Route path="/forecast" component={Forecast} />

        <Route render={() => <p>404 - Page not found</p>} />

      </Switch>

    </div>
  )
}