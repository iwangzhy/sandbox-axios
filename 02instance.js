import axios from 'axios'
import env from './env.js'

// 创建一个实例
const instance = axios.create({
  baseURL: env.url.baseUrl,
  timeout: 1000,
  headers: {
    'Authorization': `Bearer ${env.token}`,
    'Content-Type': 'application/json'
  }
})

// 通过实例调用，会将此时传入的配置与创建实例的 config 进行合并。
instance({
  url: '/v1/models',
  method: 'get'
}).then(function (resp) {
  console.log(JSON.stringify(resp.data))
})

// 处理认证失败
instance.interceptors.response.use(undefined, async (err) => {
  if (err.response?.status === 401) {
    await refreshToken()
    return instance(err.config) // 重新发送原始请求
  }
  throw err
})

async function refreshToken() {
  await axios.get('/refreshToken')
}


