import axios from 'axios'

// 请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么

  return config
}, function (error) {
  // 请求错误做些什么

  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(function (resp) {
  // 对响应数据进行处理，
  // 只有 2XX 的状态码才会触发该函数

  return resp
}, function (error) {
  // 响应错误，做点什么
  // 非 2XX 的请求会触发这个函数

  return Promise.reject(error)
})

const myInterceptor = axios.interceptors.request.use(function () {/**/})
// 移除拦截器
axios.interceptors.request.eject(myInterceptor)

// 给 axios 实例添加拦截器
const instance = axios.create()
instance.interceptors.request.use(function () {/**/})