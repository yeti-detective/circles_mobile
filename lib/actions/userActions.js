import { STORE_USER } from 'circles/lib/constants/UserActionTypes'


export function storeUser (user) {
  return {
    type: STORE_USER,
    user
  }
}
