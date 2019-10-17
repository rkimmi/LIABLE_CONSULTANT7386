const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')


const users = require('./routes/users')
const messages = require('./routes/messages')

const server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/users', users)
// server.use('/api/v1/messages', messages)


module.exports = server
