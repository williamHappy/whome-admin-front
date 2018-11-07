import { setting } from '@/setting.js'
import Cookies from 'js-cookie'

class CookieUtil {
  constructor() {
    this.pcPrefix = setting.gbs.lockr_prefix
    this.secretKey = setting.gbs.secret_key
    this.domain = setting.gbs.domain
    this.expireTime = 7200
  }

  set(cookieParam) {
    var { key, value, expires, path, success } = cookieParam
    CookieUtil.checkKey(key)
    key = this.pcPrefix + key
    Cookies.set(key, value, { expires: expires || this.expireTime, path: path || '/', domain: this.domain })
    success && success()
  }

  get(key) {
    CookieUtil.checkKey(key)
    return Cookies.get(this.pcPrefix + key)
  }

  delete(cookieParam) {
    var { key, path, success } = cookieParam
    CookieUtil.checkKey(key)
    Cookies.remove(this.pcPrefix + key, { path: path || '/', domain: this.domain })
    success && success()
  }

  geteAll () {
    return Cookies.get()
  }

  static checkKey(key) {
    if (!key) {
      throw new Error('没有找到key。')
    }
    if (typeof key === 'object') {
      throw new Error('key不能是一个对象。')
    }
  }
}

export default new CookieUtil()
