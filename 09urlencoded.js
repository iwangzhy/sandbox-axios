import axios from 'axios'
import * as qs from 'node/querystring'
import * as querystring from 'node:querystring'
import * as url from 'node:url'
import fs from 'fs'

const data = {
  'bar': 123
}

/* 请求体编码 */

const params = new URLSearchParams()
params.append('param1', 'value1')
params.append('param2', 'value2')
axios.post('/foo', params)

/* qs */

axios.post('/foo', qs.stringify(data))

/* es6 方式*/

axios({
  method: 'post',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data: qs.stringify(data),
  url: '/foo'
})

/* node.js */

/* querystring */
axios.post('bar', querystring.stringify(data))

/* url.module*/
axios.post('foo', new url.URLSearchParams(data).toString())

/* form data*/

const form = new FormData()
form.append('my_field', 'my_value')
form.append('my_buffer', new Buffer(10))
form.append('my_file', fs.createReadStream('/foo/bar.jpg'))
axios.post('foo', form, {
  headers: form.getHeaders()
})

/* 使用拦截器 */
axios.interceptors.request.use(config => {
  if (config.data instanceof FormData) {
    Object.assign(config.headers, config.data.getHeaders())
  }
  return config
})

/*
  自动化序列化，当 context-type 是 application/x-www-form-urlencoded 时，axios 会自动的将普通对象序列化为 urlencoded 格式
*/

axios.post('foo', {
  x: 1,
  arr: [1, 2, 3],
  arr2: [1, [2], 3],
  users: [{ name: 'Peter', surname: 'Griffin' }, { name: 'Thomas', surname: 'Anderson' }],
}, {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

// 服务器接收到数据
const d = {
  x: '1',
  'arr[]': ['1', '2', '3'],
  'arr2[0]': '1',
  'arr2[1][0]': '2',
  'arr2[2]': '3',
  'arr3[]': ['1', '2', '3'],
  'users[0][name]': 'Peter',
  'users[0][surname]': 'griffin',
  'users[1][name]': 'Thomas',
  'users[1][surname]': 'Anderson'
}