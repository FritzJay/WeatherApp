import React from 'react'
import { shallow } from 'enzyme'

import { Button } from './Button'

describe('Button tests', () => {

  it('renders with a default class', () => {
    const button = shallow(<Button />)

    expect(button.hasClass('button-component')).toBe(true)
  })
})

it('renders with given classes', () => {
  const button = shallow(<Button className="test" />)

  expect(button.hasClass('button-component')).toBe(true)
  expect(button.hasClass('test')).toBe(true)
})