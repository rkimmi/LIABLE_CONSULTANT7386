import {combineReducers} from 'redux'

import users from './users'
import errorMessage from './error-message'

export default combineReducers({
    users,
    errorMessage
})
