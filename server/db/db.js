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
  .join('meetings_users', 'meetings_users.meeting_id', 'meetings.id')
  .join('users', 'users.id', 'meetings_users.user_id')
  .select().orderBy('meetings.id', 'desc')
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