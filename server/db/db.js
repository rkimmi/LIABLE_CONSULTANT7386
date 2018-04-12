const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
    getUsers,
    addUser
}

function getUsers () { // rename, gets everything
    const conn = connection
    return conn('users')
    .join('messages', 'user_id', 'users.id')
    .select()
}

function addUser (userData) {
    const conn = connection
    return conn('users')
    .insert({
        username: userData.username
        // value: req.body.value,
        // icon: req.body.icon
  })
}

