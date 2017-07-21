import { STORE_USER } from 'circles/lib/constants/UserActionTypes'

const initialState = {
  user: {}
}

function userReducer (state = initialState, action) {
  switch (action.type) {
    case STORE_USER:
      const user = {user: action.user}
      return { ...state, user }
    default:
      return state
  }
}

export default userReducer
