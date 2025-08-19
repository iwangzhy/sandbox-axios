import axios from 'axios'
import fs from 'fs'

// 直接传递配置，创建请求
axios({
  method : 'post',
  url:'/user/12345',
  data : {
    firstName : 'fred',
    lastName : 'Flintstone'
  }
});

// get 请求获取图片
axios({
  method: 'get',
  url:'https://bit.ly/2mTM3nY',
  responseEncoding: 'stream'
}).then(function (resp){
  // nodejs 存储图片
  resp.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
})

// GET 请求
axios('/user/12345')


