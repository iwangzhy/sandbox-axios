import axios from 'axios'

/**
 * 使用 multipart/form-data 类型发起 POST 请求
 */

/* FormData API */
const form = new FormData()
form.append('my_field', 'my value')
form.append('my_buffer', new Blob([1, 2, 3]))
form.append('my_file', fileInput.files[0])

axios.post('https://example.com', form)

// axios 会自动序列化，等效于上面的代码
axios.postForm('https://httpbin.org/post', {
  my_field: 'my value',
  my_buffer: new Blob([1, 2, 3]),
  my_file: fileInput.files // FileList will be unwrapped as separate fields
})

/*
  自动序列化，v0.27.0 开始，当请求头中的 Content-Type 是 multipart/form-data 时，
  Axios 支持自动地将普通对象序列化成一个 FormData 对象。
*/

axios.post('url', {
  user: {
    name: 'w'
  },
  file: fs.createReadStream('/foo/bar.jpg')
}, {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
}).then((data) => {
  console.log(data)
})

/**
 * axios FormData 序列化器支持的一些特殊的结果
 *  `{}` 通过 JSON.stringify 序列化数据
 *  `[]` 将 array-like 的对象使用相同的键值来展开为单独字段
 */