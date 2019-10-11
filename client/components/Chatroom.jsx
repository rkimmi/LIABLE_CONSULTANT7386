import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import request from 'superagent'
import _ from 'lodash'

const Chatroom = (props) => {

  return (
    <div className="chatroom-container">
      welcome to the chatroom
      <div>{props.user.username}</div>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    // users: state.users
  }
}

export default connect(mapStateToProps)(Chatroom)