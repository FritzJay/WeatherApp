import React from 'react'
import { shallow } from 'enzyme'

import { Header } from './Header'

describe('Header tests', () => {

  it('renders children', () => {
    const header = shallow(<Header>Test</Header>)

    expect(header.contains('Test')).toBeTrue
  })
})