import Axios from '@/utils/axios'

export function login(username, password) {
  return Axios({
    url: '/user/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo(token) {
  return Axios({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return Axios({
    url: '/logout',
    method: 'post'
  })
}
