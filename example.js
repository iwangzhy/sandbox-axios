require('dotenv').config()

const axios = require('axios')

const baseUrl = process.env.API_URL

const url = {
  models: baseUrl + '/v1/models'
}

const token = process.env.API_TOKEN

const config = {
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
}

// demo1
axios.get(url.models, config)
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
axios.get(url.models, {
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
    const resp = await axios.get(url.models, config)
    console.log(JSON.stringify(resp.data))
  } catch (e) {
    console.error(e)
  }
}

getModels()


