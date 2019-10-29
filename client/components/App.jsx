import React, { useState, useEffect } from 'react'

import UserHome from './UserHome'
import Chatroom from './Chatroom'

const App = () => {
  const [entered, enterChatroom] = useState(false)
  const [user, enterUser] = useState({ username: '', value: '', id: 0 })

  useEffect(function checkUser() {
    let localUser = JSON.parse(localStorage.getItem('user'))
    if (localUser && user.id !== localUser.id) {
      enterChatroom(true)
      console.log(localUser.id)
      enterUser(localUser)
    }
  })

  return (
    <div className='app-container'>
      {entered
        ? <Chatroom user={user} />
        : <UserHome enterChatroom={enterChatroom} enterUser={enterUser} />
      }
    </div>
  )
}

export default App
