import axios from 'axios'

axios.get('https://baidu1.com')
  .catch(function (error) {
    if (error.response) {
      // 非 2xx 的响应
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)
    } else if (error.requset) {
      // 已发送请求，未收到响应
      console.log(error.requset)
    } else {
      // 发送请求时出了问题
      console.log(`Error`, error.message)
    }
    // 请求 config
    console.log(error.config)
    // error.toJSON()
    console.log(error.toJSON())
  })

axios.get('/user/12345', {
  // 自定义抛出错误的 HTTP code
  validateStatus: function (status) {
    return status < 500
  }
})

