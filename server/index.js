const server = require('./server')
const http = require('http').createServer(server);

const port = process.env.PORT || 3000
const io = require('socket.io')(http)

const db = require('./db/db.js')


io.on('connection', function (socket) {
  socket.on('disconnect', function () {
    console.log('user disconnected')
  })
  socket.on('chat message', handleSendMessage)
})


function handleSendMessage(req, cb) {
  db.sendMsg(req)
    .then((id) => {
      cb(id)
      return id
      // res.status(202).end()
    })
    .catch((err) => {
      // res.status(400).send({
      //   errorType: 'DATABASE_ERROR'
      // })
    })
}


http.listen(port, function () {
  console.log('Listening on port', port)
})

module.exports = http
