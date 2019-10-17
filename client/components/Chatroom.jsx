import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import { withStyles } from '@material-ui/core/styles'

import openSocket from 'socket.io-client'
const socket = openSocket('http://localhost:3000')

const styles = theme => ({
  sendBtn: {
    backgroundColor: '#F06292',
    color: 'white',
    border: '0px solid',
    '&:hover': {
      backgroundColor: '#F06292'
    },
    marginLeft: '25px'
  }
})

const Chatroom = (props) => {
  const [message, setMsg] = useState('')
  const [chatHistory, setHistory] = useState([])

  const { classes } = props
  const handleSubmit = (() => {
    socket.emit('chat message', { message, id: props.user.id }, handleReceive)
  })

  const handleReceive = ((res) => {
    const messageData = {
      message,
      // change to received ids + username?
      userId: props.user.id,
      username: props.user.username,
      timestamp: res[0].timestamp
    }
    setMsg('')
    let newHistory = getArrObjCopy(chatHistory)
    newHistory.push(messageData)
    setHistory(newHistory)
  })

  const getArrObjCopy = ((array) => {
    let newArray = []
    array.forEach(item => {
      let object = Object.assign({}, item)
      newArray.push(object)
    })
    return newArray
  })


  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <div className="chatroom-container">
      welcome to the chatroom
      <div>{props.user.username}</div>
      <div className="chatroom-outer">
        <div className="chatroom-inner">
          {chatHistory.map(chat => {
            return (
              <div key={chat.timestamp} className="chat-item">
                <div className="user">{chat.username}</div>
                <div className="message">{chat.message}</div>
              </div>
            )
          })}
        </div>
        <div className="chatbox">
          <Input
            onChange={(e) => setMsg(e.target.value)}
            required={true}
            className="input"
            onKeyPress={handleKeyPress}
            value={message}
          />
          <Button variant="contained" className={classes.sendBtn} onClick={handleSubmit}>
            Send
          </Button>
        </div>
      </div>
    </div>
  )
}


export default withStyles(styles)(Chatroom)