import Cookies from 'js-cookie'
// import store from '@/store'

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
  // return store.getters.getRedirectUri
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
