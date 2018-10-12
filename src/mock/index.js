import Mock from 'mockjs'
import loginAPI from './modules/login'

// 登录相关
Mock.mock(/\/user\/login/, 'post', loginAPI.loginByUsername)
Mock.mock(/\/login\/logout/, 'post', loginAPI.logout)
Mock.mock(/\/user\/info\.*/, 'get', loginAPI.getUserInfo)

export default Mock
