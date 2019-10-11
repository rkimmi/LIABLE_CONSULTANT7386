import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import request from 'superagent'
import _ from 'lodash'

const Chatroom = (props) => {
  const [message, setMsg] = useState('')
  const handleSubmit = (() => {
    request
      .post('/api/v1/messages')
      .send({
        message,
        id: props.user.id
      })
      .then(res => {
        console.log(res)
      })
    // send user id
  })

  return (
    <div className="chatroom-container">
      welcome to the chatroom
      <div>{props.user.username}</div>
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