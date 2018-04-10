exports.up = (knex, Promise) => {
    return knex.schema.hasTable('users').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('users', (table) => {
                table.increments('id').primary()
                table.string('username')
                table.integer('value')
                table.string('icon')
            })
        }
    })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users')
}
