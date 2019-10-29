const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUsers,
  addUser,
  getMsgs,
  sendMsg
}

function getUsers() { // rename, gets everything
  const conn = connection
  return conn('users')
    .join('messages', 'user_id', 'users.id')
    .select()
}

function addUser(userData) {
  const conn = connection
  return conn('users')
    .insert({
      username: userData.username,
      value: userData.value,
      // icon: req.body.icon
    }, ['*'])
}

function getMsgs() {
  const conn = connection
  return conn('messages')
    .join('users', 'users.id', 'messages.user_id')
    .select()
}

function sendMsg(req) {
  const conn = connection
  return conn('messages')
    .insert({
      user_id: req.id,
      message: req.message,
      timestamp: Date.now().toString()
    })
    // , ['id', 'timestamp', 'message']
    // ^ .insert(data, [returning]) not returning
    .returning(['timestamp', 'message', 'id'])
  // returning not compatible with sqlite3
}