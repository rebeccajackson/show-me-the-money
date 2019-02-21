
exports.up = function(knex, Promise) {
    return knex.schema.createTable('meetings', table => {
        table.increments('id').primary
        table.string('title')
        table.integer('owner_id')
        table.integer('startTime')
        table.integer('endTime')
        table.integer('duration')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('meetings')
};
