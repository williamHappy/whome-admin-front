import Mock from 'mockjs'
import loginAPI from './modules/login'

// 登录相关
Mock.mock(/\/login\/login/, 'post', loginAPI.loginByUsername)
Mock.mock(/\/login\/logout/, 'post', loginAPI.logout)

export default Mock
