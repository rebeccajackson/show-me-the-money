const connection = require('./connection')

module.exports = {
  getMeetingHistory,
  saveMeeting,
  getUsersByMeetingId,
  getMeetingById,
  getAllUsers
}

function getMeetingHistory(testDb) {
  const db = testDb || connection
  return db('meetings')
    .select('*', 'meetings.id as id').orderBy('meetings.id', 'desc')
    .then(async meetings => {
      return await Promise.all(meetings.map(meeting => {
        return db('meetings_users').where('meetings_users.meeting_id', meeting.id)
          .join('users', 'meetings_users.user_id', 'users.id')
          .select('users.id as id', 'first_name', 'last_name', 'hourly_wage')
          .then(attendees => {
            meeting.attendees = attendees
            return meeting
          })
      }))
    })
}

function getUsersByMeetingId(id, testDb){
    const db = testDb || connection
    return db('meetings_users').where('meetings_users.meeting_id', id)
    .join('users', 'meetings_users.user_id', 'users.id')
    .select('users.id as id', 'first_name', 'last_name', 'hourly_wage')
}

function getMeetingById(meetingId, testDb) {
  const db = testDb || connection
    return db('meetings').where('meetings.id', meetingId).first()
    .then(meeting => {
        return db('meetings_users').where('meetings_users.meeting_id', meeting.id)
        .join('users', 'meetings_users.user_id', 'users.id')
        .select('users.id as id', 'first_name', 'last_name', 'hourly_wage')
        .then(attendees => {
            meeting.attendees = attendees
            return meeting
        })
    })
}

function saveMeeting(meeting, testDb) {
  const db = testDb || connection
  console.log('db save', meeting)
  return db('meetings')
    .insert({
      title: meeting.title,
      owner_id: meeting.owner_id,
      startTime: meeting.startTime,
      endTime: meeting.endTime,
      duration: meeting.duration
    })
    .then(newMeetingId => {
      meeting.attendees.map(attendee => {
        return db('users').insert({ first_name: attendee.firstName, last_name: attendee.lastName, hourly_wage: attendee.hourlyWage })
          .then(user => {
            return db('meetings_users')
              .insert({ meeting_id: newMeetingId, user_id: user })
          })
      })
    })
}

function getAllUsers(testDb) {
  const db = testDb || connection
  return db('users')
    .select('users.first_name as firstName', 'users.last_name as lastName', 'users.hourly_wage as hourlyWage')
 }