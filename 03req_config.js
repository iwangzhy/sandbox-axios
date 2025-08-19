import axios, { CancelToken } from 'axios'
import env from './env.js'
import * as http from 'node:http'
import * as https from 'node:https'

axios({
  url: '/user',
  method: 'get',
  baseURL: env.url.baseUrl,
  transformRequest: [function (data, headers) {
    // 对发送的 data 进行任意转换处理

    return data
  }],
  transformResponse: [function (data) {
    // 对接收的 data 进行任意转换处理
    return data
  }],
  // 自定义请求头
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  },
  // 请求参数
  params: {
    ID: 12345
  },
  // params 序列化
  paramsSerializer: {
    encode: function (params) {
      // 将参数序列化为查询字符串
      return Object.keys(params).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`).join('&')
    },
    serialize: function (params) {
      // 将参数序列化为查询字符串
      return Object.keys(params).map(key => `${key}=${params[key]}`).join('&')
    },
    indexes: false
  },
  // post body
  data: {
    firstName: 'Fred'
  },
  // 超时时间
  timeout: 1000,
  // 跨域请求时是否需要使用凭证
  withCredentials: false,
  // 自定义处理请求
  adapter: function (config) {
    //
  },
  auth: {
    username: 'janedoe',
    password: 'janedoe1123'
  },
  // 响应数据类型
  responseType: 'json',
  responseEncoding: 'utf8',
  // `xsrfCookieName` 是 xsrf token 的值，被用作 cookie 的名称
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  // 上传处理进度事件
  onUploadProgress: function (progressEvent) {

  },
  // 下载处理进度事件
  onDownloadProgress: function (progressEvent) {

  },
  // 响应内容最大字节
  maxContentLength: 2000,
  // 请求内容的最大字节
  maxBodyLength: 2000,
  validateStatus: function (status) {
    return status >= 200 && status < 300
  },
  // 最大重定向数
  maxRedirects: 5,
  socketPath: null,
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),
  proxy: {
    protocol: 'https',
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'abc',
      password: 'abc'
    }
  },
  cancelToken: new CancelToken(function (cancel) {

  }),
  decompress: true

})