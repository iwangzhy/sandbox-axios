import axios from 'axios'
import env from './env.js'

// 默认配置，将作用于每个请求

// 全局默认配置
axios.defaults.baseURL = env.url.baseUrl
axios.defaults.headers.common['Authorization'] = `Bearer ${env.token}`
axios.defaults.headers.post['Content-Type'] = 'application/json'

// 自定义实例默认配置
const instance = axios.create({
  baseURL: 'https://api.github.com'
})

instance.defaults.headers.common['Authorization'] = `Bearer ${env.token}`

// 配置的优先级，后者优先级高于前者
// lib/defaults.js
// 实例的 defaults 属性
// 请求的 config 参数

const API = axios.create()
API.defaults.timeout = 2500
API.get('/longRequest', {
  timeout: 5000
})