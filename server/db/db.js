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
  .join('meetings-users', 'meetings-users.meeting_id', 'meeting')
  .join('users', 'users.id', 'meetings-users.user_id')
  select().orderBy('meetings.id', 'desc')
}

function getUsersByMeetingId(meetingId, testDb){
  const db = testDb || connection
  return db('meetings')
  .join('meetings-users', 'meetings-users.meetings_id', 'meetings.id')
  .where('meetings-users.meetings_id', meetingId)
  .select('users.first_name as firstName', 'users.last_name as lastName', 'users.hourly_wage as hourlyWage').orderBy('name')
}

function saveMeeting(testDb){
  const db = testDb || connection
  return('meetings')
  .join('meetings-users', )
}

function getAllUsers(testDb){
  const db = testDb || connection
  return('users')
  .select('users.first_name as firstName', 'users.last_name as lastName', 'users.hourly_wage as hourlyWage').orderBy('name')
}