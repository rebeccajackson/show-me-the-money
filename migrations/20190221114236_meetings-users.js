
exports.up = function(knex, Promise) {
    return knex.schema.createTable('meetings-users', table => {
        table.integer('meeting_id')
        table.integer('user_id')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('meetings-users')
};
