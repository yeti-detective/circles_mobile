import { STORE_USER } from 'circles/lib/constants/UserActionTypes'

export function storeUser (userCredentials) {
  return {
    type: STORE_USER,
    userCredentials
  }
}
