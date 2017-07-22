import { STORE_USER } from 'circles/lib/constants/UserActionTypes'

const initialState = {
}

function userReducer (state = initialState, action) {
  switch (action.type) {
    case STORE_USER:
      const user = action.userCredentials
      return { ...state, ...user }
    default:
      return state
  }
}

export default userReducer
