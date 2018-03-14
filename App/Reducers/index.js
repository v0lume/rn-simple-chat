import { combineReducers } from 'redux'

import chats from './chats'
import messages from './messages'

export default combineReducers({
    chats,
    messages,
})
