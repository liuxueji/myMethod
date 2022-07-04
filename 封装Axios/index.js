function axios({
  method,
  url,
  params,
  data
}) {
  // 返回值。返回的是一个promise对象
  return new Promise((resolve, reject) => {
    // 方法转换为大写
    method = method.toUpperCase()
    // 1.创建Ajax请求
    const xhr = new XMLHttpRequest();
    // 2.连接到服务器。先处理params请求
    let str = ''
    for (let k in params) {
      str += `${k}=${params[k]}&`
    }
    str = str.slice(0, -1)
    // url拼接str
    xhr.open(method, url + '?' + str)
    console.log(url)
    // 3.发送请求
    if (method === 'POST' || method === 'PUT' || method === 'DELETE') {
      // 设置请求头 Comtent-type
      xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8')
      // 设置请求体
      xhr.send(JSON.stringify(data))
    } else {
      xhr.send()
    }
    // 4.接收返回值
    xhr.onreadystatechange = function () {
      // 判断readyState
      if (xhr.readyState === 4) {
        // 判断响应状态码是否等于200
        if (xhr.status === 200) {
          // 成功状态
          resolve({
            status: xhr.status,
            messaget: xhr.statusText,
            body: xhr.response
          })
        } else {
          // 失败状态
          reject(new Error('请求失败，失败状态码为：' + xhr.status))
        }
      }
    }
  })
}