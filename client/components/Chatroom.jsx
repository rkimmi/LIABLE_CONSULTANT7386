import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import request from 'superagent'
import _ from 'lodash'

function Chatroom() {
  useEffect(() => {

  })

  return (
    <div className="chatroom-container">
      welcome to the chatroom
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    // users: state.users
  }
}

export default connect(mapStateToProps)(Chatroom)