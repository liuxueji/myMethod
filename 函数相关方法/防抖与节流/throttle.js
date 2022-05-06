function throttle(callback, wait) {
  // 定义开始时间
  let start = 0
  // 返回结果是一个函数
  return function (e) {
    // 获取当前的时间戳
    let now = new Date()
    // 判断当前时间与开始时间的间隔是否大于设定时间间隔
    if (now - start >= wait) {
      // 执行回调函数（传入事件）
      // callback(e) 需要通过call修改this指向
      callback.call(this, e)//这里的this指向window，e是回调传入的参数
      // 修改开始时间
      start = now
    }
  }
}