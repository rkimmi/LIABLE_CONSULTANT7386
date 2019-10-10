import React, { useState, useEffect } from 'react'

import UserHome from './UserHome'
import Chatroom from './Chatroom'

const App = () => {
  const [entered, enterChatroom] = useState(false)
  return (
    <div className='app-container'>
      {entered
        ? <Chatroom />
        : <UserHome enterChatroom={enterChatroom} />
      }
    </div>
  )
}

export default App
