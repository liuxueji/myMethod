function debounce(callback, time) {
  // 定义定时器变量
  let timer = null
  // 返回一个函数
  return function (e) {
    // 判断是否存在定时器
    if (timer !== null) clearTimeout(timer) // 表示之前存在定时器但还没结束，那么就重新计时
    // 启动定时器
    timer = setTimeout(() => {
      // 执行回调
      callback.call(this, e)
      // 重置定时器变量
      timer = null
    }, time)
  }
}