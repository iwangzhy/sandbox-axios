import axios from 'axios'

// 一个 POST 请求
axios.post('/user', {
  firstName: 'Fred',
  lastName: 'Flintstone'
})
  .then(function (resp) {
    console.log(resp)
  })
  .catch(function (err) {
    console.log(err)
  })

// 多个并发请求

function getUserAccount() {
  return axios.get('/user/12345')
}

function getUserPermission() {
  return axios.get('/user/12345/permissions')
}

const [acct, perm] = await Promise.all([getUserAccount(), getUserPermission()])

// OR

Promise.all([getUserAccount(), getUserPermission()])
  .then(function ([acct, resp]) {
    // ...
  })

// 将 HTML Form 转为 JSON 请求
await axios.post('/user', document.querySelector('#my-form'), {
  headers: {
    'Content-Type': 'application/json'
  }
})

// multipart/form-data
const { data } = await axios.post('https://httpbin.org/post', {
  firstName: 'fred',
  lastName: 'flintstone',
  orders: [1, 2, 3],
  photo: document.querySelector('#fileInput').files
}, {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
})


// application/x-www-form-urlencoded
const { data } = await axios.post('https://httpbin.org/post', {
  firstName: 'fred',
  lastName: 'flintstone',
  orders: [1, 2, 3]
}, {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})



