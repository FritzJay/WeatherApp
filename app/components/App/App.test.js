import React from 'react'
import { shallow } from 'enzyme'

import { App } from './App'

describe('App tests', () => {

  it('renders successfully', () => {
    const app = shallow(<App />)

    expect(app).toBeTruthy()
  })
})