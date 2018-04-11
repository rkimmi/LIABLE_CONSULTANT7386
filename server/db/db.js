const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
    getUsers
}

function getUsers () {
    const conn = connection
    return conn('users')
    .join('messages', 'user_id', 'users.id')
    .select()
}
