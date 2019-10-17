exports.up = function (knex, Promise) {
  return knex.schema.hasTable('messages').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('messages', (table) => {
        table.increments('id').primary()
        table.integer('user_id').references('users.id')
        table.string('message')
        table.string('timestamp')
      })
    }
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('messages')
};
