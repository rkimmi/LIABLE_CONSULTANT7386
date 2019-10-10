import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import request from 'superagent'
import _ from 'lodash'

import usernameData from './username.json'
import { getUsers } from '../actions/users'

function handleSubmit(e, username, value) {
  e.preventDefault()
  request
    .post('/api/v1/chatroom')
    .send({
      username,
      value
    })
    .end()
}

function UserHome() {
  const [value, setValue] = useState('')
  const [username, setUser] = useState('')

  useEffect(function createUser() {
    if (username === '' && value === '') {
      const firstWord = _.sample(usernameData.first)
      const secondWord = _.sample(usernameData.second)
      const numeric = Number(_.random(1000, 10000))
      const user = firstWord + '_' + secondWord + numeric
      setUser(user)
      const val = Number(_.random(1, 10))
      setValue(val)
    }
  })

  return (
    <div>
      <form>
        <input type='hidden' value={username} />
        <button type='submit' onClick={(e) => handleSubmit(e, username, value)}>
          Enter chatroom
            </button>
      </form>
      <h1>{username}</h1>
      <h1>{value}</h1>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(UserHome)