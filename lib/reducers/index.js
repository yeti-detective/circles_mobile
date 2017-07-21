import { combineReducers } from 'redux'
import userReducer from './userReducer'

const appReducer = combineReducers({
  user: userReducer
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
  // return appReducer(globalReducer(state, action), action)
}

export default rootReducer
