import request from 'supertest'

const testDb = require('../../../server/db/db')
const server = require('../../../server/server')

jest.mock('../../../server/db/db', () => ({
  getMeetingById: jest.fn(),
  getUsersByMeetingId: jest.fn(),
  saveMeeting: jest.fn()
}))


test('GET /:id/users gets right meeting id', () => {
  let expected = true

  testDb.getUsersByMeetingId.mockImplementation(() => Promise.resolve(true))
  return request(server).get('/api/meetings/2/users')
  .expect(200)
  .then(res => {
    let actual = res.body
    expect(actual).toEqual(expected)
  })
 
})

test('GET /:id/users gets correct array of users', () => {
  let expected = [{firstName: 'tim', lastName: 'Tree'}]

  testDb.getUsersByMeetingId.mockImplementation(() => Promise.resolve(expected))
  return request(server).get('/api/meetings/2/users')
  .expect(200)
  .then(res => {
    let actual = res.body
    expect(actual).toEqual(expected)
  })
})

test('GET /:id/users gets correct meeting id', () => {
  let expected = [{firstName: 'tim', lastName: 'Tree'}]

  testDb.getUsersByMeetingId.mockImplementation((id) => id == 2 ? Promise.resolve(expected) : Promise.reject())
  return request(server).get('/api/meetings/2/users')
  .expect(200)
  .then(res => {
    let actual = res.body
    expect(actual).toEqual(expected)
  })
})

test('GET /:id gets correct meeting by id', () => {
  let expected = [{title: 'test meeting', cost: 300}]

  testDb.getMeetingById.mockImplementation((id) => id == 2 ? Promise.resolve(expected) : Promise.reject())
  return request(server).get('/api/meetings/2')
  .expect(200)
  .then(res => {
    let actual = res.body
    expect(actual).toEqual(expected)
  })
})


