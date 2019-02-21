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
  
}

// function getMonthVeges(monthId, db = connection){
//   return db('veg_months')
//   .where('veg_months.month_id', monthId)
//   .join('veg', 'veg.id', 'veg_months.veg_id')
//   .select().orderBy('name')
// }