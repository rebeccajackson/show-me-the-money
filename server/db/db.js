const connection = require('./connection')

module.exports = {
  getMeetingHistory,
  saveMeeting,
  getUsersByMeetingId,
  getAllUsers  
}

function getMeetingHistory (testDb) {
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

function getUsersByMeetingId(meetingId, testDb){
  const db = testDb || connection
  return db('meetings')
  .join('meetings_users', 'meetings_users.meetings_id', 'meetings.id')
  .where('meetings_users.meetings_id', meetingId)
  .select('users.first_name as firstName', 'users.last_name as lastName', 'users.hourly_wage as hourlyWage').orderBy('name')
}

function saveMeeting(testDb){
  const db = testDb || connection
  return db('meetings')
  // .join('meetings_users')
}

function getAllUsers(testDb){
  const db = testDb || connection
  return db('users')
  .select('users.first_name as firstName', 'users.last_name as lastName', 'users.hourly_wage as hourlyWage')
}