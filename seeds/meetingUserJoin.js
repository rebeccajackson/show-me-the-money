
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('meetings_users').del()
    .then(function () {
      // Inserts seed entries
      return knex('meetings_users').insert([
        {meeting_id: 1, user_id: 1},
        {meeting_id: 1, user_id: 2},
        {meeting_id: 1, user_id: 3},
        {meeting_id: 1, user_id: 4},

        {meeting_id: 2, user_id: 1},
        {meeting_id: 2, user_id: 5},
        {meeting_id: 2, user_id: 6},
        {meeting_id: 2, user_id: 7},
        {meeting_id: 2, user_id: 8},

        {meeting_id: 3, user_id: 1},
        {meeting_id: 3, user_id: 9},
        {meeting_id: 3, user_id: 10},
        {meeting_id: 3, user_id: 11},
        {meeting_id: 3, user_id: 12}
      ]);
    });
};
