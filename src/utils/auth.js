import Cookies from 'js-cookie'
import CookieUtil from '@/utils/cookieUtil.js'
import { USER } from '@/common/enum'
// import store from '@/store'

const TokenKey = 'Admin-Token'

export function getToken() {
  // return Cookies.get(TokenKey)
  var authToken = CookieUtil.get(USER.AUTH_TOKEN) ? JSON.parse(CookieUtil.get(USER.AUTH_TOKEN)) : {}
  return authToken.access_token || ''
  // return store.getters.getRedirectUri
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
