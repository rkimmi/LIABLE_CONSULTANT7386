import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import request from 'superagent'
import _ from 'lodash'

import openSocket from 'socket.io-client'
const socket = openSocket('http://localhost:3000')
// const socket = io()

// socket.on('chat message', msg => getMessages(null, msg))
// function getMessages() {
//   console.log('hey')
//   return request
//     .get('/api/v1/messages')
//     .then(res => {
//       console.log(res)
//     }).catch(err => {
//       console.log(err)
//     })
// }
const Chatroom = (props) => {

  const [message, setMsg] = useState('')
  const [chatHistory, setHistory] = useState([])

  //       switch (res.statusCode) {
  //         case 200:
  //           getMessages()
  //           socket.emit('chat message', { for: 'everyone' })
  //           break;
  //         case 400:
  //         // handle error, check status code
  //       }

  const handleSubmit = (() => {
    socket.emit('chat message', { message, id: props.user.id }, handleReceive)
  })

  const handleReceive = ((info) => {
    setHistory(chatHistory.concat(message), () => console.log(chatHistory))
  })


  return (
    <div className="chatroom-container">
      welcome to the chatroom
        <div>{props.user.username}</div>
      <div>{chatHistory}</div>
      <input type="text" onChange={(e) => setMsg(e.target.value)}></input>
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    // users: state.users
  }
}

export default connect(mapStateToProps)(Chatroom)