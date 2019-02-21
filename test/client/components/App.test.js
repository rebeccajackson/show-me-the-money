import React from 'react'
import { shallow } from 'enzyme'

import {App} from '../../../client/components/App'

test('Title renders on App', () => {
  // Arrange
  const expected = '$how Me The Money'

  // Act
  const wrapper = shallow(<App auth={{isAuthenticated: false}}/>)
  const actual = wrapper.find('h1').text()

  // Assert
  expect(actual).toEqual(expected)
})


test('App renders login page when user is not logged in', () => {
  const expected = 6

  const wrapper = shallow(<App auth={{isAuthenticated: false}} />)
  const actual = wrapper.find('Route').length

  expect(actual).toEqual(expected)
})

test('App doesnt render login page when user is logged in', () => {
  const expected = 5

  const wrapper = shallow(<App auth={{isAuthenticated: true}} />)
  const actual = wrapper.find('Route').length

  expect(actual).toEqual(expected)
})