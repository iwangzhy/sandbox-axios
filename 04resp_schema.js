import axios from 'axios'

const resp = {
  // 响应的数据
  data: {},
  // HTTP 状态码
  status: 200,
  statusText: 'OK',
  // 响应头
  headers: {},
  // axios 请求的配置信息
  config: {},
  // 请求
  request: {}
}

axios.get('/user/12345')
.then(function (resp){
  console.log(resp.data)
  console.log(resp.status)
  console.log(resp.statusText)
  console.log(resp.headers)
  console.log(resp.config)
})