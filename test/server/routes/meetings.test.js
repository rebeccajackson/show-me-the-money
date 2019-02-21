// import request from 'supertest'
// const testDb = require('../../../server/db/db')

// jest.mock('../../../server/db/db', () => ({
//   getMeetingById: jest.fn(),
//   getUsersByMeetingId: jest.fn(),
// }))

// test('/:id/users gets right meeting id', () => {
//   let expected = 2

//   // Mock userExists to return true
//   testDb.getUsersByMeetingId(2)

//   return request(server).get('/api/meetings/2/users')
//   .expect(400)
//   .then(res => {
//     let actual = res.body.message

//     expect(actual).toEqual(expected)
//   })
// })