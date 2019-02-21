
exports.up = function(knex, Promise) {
    return knex.schema.createTable('meetings_users', table => {
        table.integer('meeting_id')
        table.integer('user_id')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('meetings_users')
};
