import React from 'react'
import { shallow } from 'enzyme'

import { Input } from './Input'

describe('Input tests', () => {

  it('renders with a default class', () => {
    const input = shallow(<Input />)

    expect(input.hasClass('input-component')).toBe(true)
  })

  it('renders with given classes', () => {
    const input = shallow(<Input className="test" />)

    expect(input.hasClass('input-component')).toBe(true)
    expect(input.hasClass('test')).toBe(true)
  })
})