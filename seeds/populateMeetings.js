
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('meetings').del()
    .then(function () {
      // Inserts seed entries
      return knex('meetings').insert([
        {id: 1, title: 'Fiddy cent club', owner_id: 1, startTime: 1550710530719, endTime: 1550711330719, duration: 800000, cost: 79},
        {id: 2, title: 'Big important chats', owner_id: 1, startTime: 1550711483447, endTime: 1550711963447, duration: 480000, cost: 71.37},
        {id: 3, title: 'Spensive meat', owner_id: 1, startTime: 1550668444000, endTime: 1550669999000, duration: 1555000, cost: 138.55}
      ]);
    });
};
