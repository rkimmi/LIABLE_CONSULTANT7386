import request from 'superagent'

export const RECEIVE_USERS = 'RECEIVE_USERS'

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export function getUsers () {
  return (dispatch) => {
    request
      .get('/api/v1/chatroom/')
      .then(res => {
        dispatch(receiveUsers(res.body.users))
      })
      // .catch(() => {
      //   dispatch(showError('An unexpected error in getting information'))
      // })
  }
}