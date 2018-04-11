const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
    getUsers
}

function getUsers () {
    const conn = testConn || connection
    return conn('users')
    .join('messages', 'user_id', 'user.id')
    .select()
}
