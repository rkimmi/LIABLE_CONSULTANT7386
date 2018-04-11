import {RECEIVE_USERS} from '../actions/users'

const initialState = null

const users = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users
    default:
      return state
  }
}

export default users