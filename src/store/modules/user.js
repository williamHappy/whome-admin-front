import { login, logout, getInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import CookieUtil from '@/utils/cookieUtil.js'
import { USER } from '@/common/enum'

const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    roles: [],
    redirectUri: '',
    authToken: {
      access_token: '',
      expires_in: '',
      timestamp: ''
    }
  },

  getters: {
    getRedirectUri: (state) => {
      if (!state.redirectUri) {
        state.redirectUri = CookieUtil.get(USER.REDIRECT_URI) ? CookieUtil.get(USER.REDIRECT_URI) : 'http://login.paascloud.net'
      }
      return state.redirectUri
    }
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },

    // 更新token
    UPDATE_AUTH_TOKEN: (state, authToken) => {
      state.authToken = authToken
      console.log(authToken)
      const expires = 2 / 24
      CookieUtil.set({
        key: USER.AUTH_TOKEN,
        value: authToken,
        expires: expires
      })
    },
    // 更新redirectUri
    UPDATE_REDIRECT_URI: (state, redirectUri) => {
      state.redirectUri = redirectUri
      if (redirectUri.indexOf('paascloud.net') > 0) {
        CookieUtil.set({
          key: USER.REDIRECT_URI,
          value: redirectUri
        })
      }
    }
  },

  actions: {
    // @Deprecated 登录(登陆单独拿出来处理，现在只做更新token的处理)
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(response => {
          const data = response.data
          setToken(data.token)
          commit('SET_TOKEN', data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 更新token
    UpdateAuthToken({ commit }, authToken) {
      commit('UPDATE_AUTH_TOKEN', authToken)
    },

    // 更新URl
    UpdateRedirectRri({ commit }, redirectUri) {
      commit('update_redirect_uri', redirectUri)
    },

    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token).then(response => {
          const data = response.data
          if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
            commit('SET_ROLES', data.roles)
          } else {
            reject('getInfo: roles must be a non-null array !')
          }
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
