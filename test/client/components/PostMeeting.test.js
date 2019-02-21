import React from 'react'
import { shallow } from 'enzyme'

import {PostMeeting} from '../../../client/components/PostMeeting'

test('h2 displays meeting name', () => {
    // Arrange
    const expected = 'Big important chats'
    // Act
    const wrapper = shallow(<PostMeeting meetings={{meetings: [{0: {id: 2, title: 'Big important chats'}}]}}/>)
    const actual = wrapper.find('h2').text
    // Assert
    expect(actual).toEqual(expected)
})

//tbc