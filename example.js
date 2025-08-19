import env from './env.js';
import axios from 'axios';

const config = {
  headers: {
    'Authorization': `Bearer ${env.token}`,
    'Content-Type': 'application/json'
  }
}

// demo1
axios.get(env.url.models, config)
  .then(function (resp) {
    console.log(JSON.stringify(resp.data))
  })
  .catch(function (err) {
    console.log(err)
  })
  .finally(function () {
    //
    console.log('finally 代码块总是会执行....')
  })

// demo2
axios.get(env.url.models, {
  ...config,
  // 配置参数
  params: {}
})
  .then(function (resp) {
    console.log(JSON.stringify(resp.data))
  })
  .catch(function (err) {
    console.log(err)
  })

// demo3
async function getModels() {
  try {
    const resp = await axios.get(env.url.models, config)
    console.log(JSON.stringify(resp.data))
  } catch (e) {
    console.error(e)
  }
}

getModels()


