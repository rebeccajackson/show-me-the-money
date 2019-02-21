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
  console.log('db', meetingId)
  return db('meetings_users')
  .where('meetings_users.meeting_id', meetingId)
  .join('users', 'meetings_users.user_id', 'users.id')
  .select('users.first_name as firstName', 'users.last_name as lastName', 'users.hourly_wage as hourlyWage').orderBy('lastName')
}

function saveMeeting(testDb){
  const db = testDb || connection
  return db('meetings')
  .join('meetings_users')
}

function getAllUsers(testDb){
  const db = testDb || connection
  return db('users')
  .select('users.first_name as firstName', 'users.last_name as lastName', 'users.hourly_wage as hourlyWage')
}