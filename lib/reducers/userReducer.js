import { STORE_USER } from 'circles/lib/constants/UserActionTypes'

const initialState = {
  balance: 0
}

function userReducer (state = initialState, action) {
  switch (action.type) {
    case STORE_USER:
      console.log('##########################')
      console.log(action.userCredentials)
      const user = action.userCredentials
      return { ...state, ...user }
    default:
      return state
  }
}

export default userReducer
