import axios from 'axios'

/* 取消请求 v0.22.0 之后支持*/
const controller = new AbortController()

axios.get('/foo/bar', {
  signal: controller.signal
}).then(function (resp) {
  // ...
})
// 取消请求
controller.abort()

/*CancelToken, v0.22.0 被弃用*/

/* CancelToken.source 工厂方法创建一个 cancel token*/
const CancelToken = axios.CancelToken
const source = CancelToken.source()

axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.log('request canceld', thrown.message)
  } else {
    // 处理错误
  }
})

axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})
// 取消请求
source.cancel('operation canceled by the user.')

/*
 传递一个 executor 函数到 CancelToken 的构造函数来创建一个 cancel token
*/
let cancel
axios.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    cancel = c
  })
})
// 取消请求
cancel()

/*
* 可以使用同一个 cancel token 或 signal 取消多个请求
*/

const controller1 = new AbortController()
const cancelToken1 = axios.CancelToken
const source1 = cancelToken1.source()

axios.get('/user/12345', {
  cancelToken: source1.token,
  signal: controller1.signal
}).catch(function (err) {
  if (axios.isCancel(err)) {
    console.log('request canceled', err.message)
  } else {
    // 处理错误
  }
})

axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})

source1.cancel('operation canceled by the user.')
controller1.abort() // 不支持 message 参数