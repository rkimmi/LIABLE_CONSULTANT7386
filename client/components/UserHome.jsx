import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import request from 'superagent'
import _ from 'lodash'

import usrData from './username.json'
// import { getUsers } from '../actions/users'

const UserHome = (props) => {
  const [value, setValue] = useState('')
  const [username, setUser] = useState('')

  useEffect(function createUser() {
    if (username === '' && value === '') {
      const adj = _.sample(usrData.first)
      const noun = _.sample(usrData.second)
      const num = Number(_.random(1000, 10000))
      const name = adj + '_' + noun + num
      setUser(name)
      const val = Number(_.random(1, 10))
      setValue(val)
    }
  })

  const handleSubmit = (() => {
    request
      .post('/api/v1/users')
      .send({
        username,
        value
      })
      .then(res => {
        let body = res.body.data[0]
        let newUser = { username: body.username, value: body.value, id: body.id }
        props.enterChatroom(true)
        props.enterUser(newUser)
        localStorage.setItem('user', JSON.stringify(newUser))
      })
  })

  return (
    <div>
      <input type='hidden' value={username} />
      <button type='submit' onClick={handleSubmit}>
        Enter chatroom
      </button>
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