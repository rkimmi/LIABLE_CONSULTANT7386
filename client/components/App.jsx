import React, { useState, useEffect } from 'react'

import UserHome from './UserHome'
import Chatroom from './Chatroom'

const App = () => {
  const [entered, enterChatroom] = useState(false)
  const [user, enterUser] = useState({ username: '', value: '', id: 0 })
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
