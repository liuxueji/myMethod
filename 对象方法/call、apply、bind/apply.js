function apply(Fn, obj, args) {
  // 判断是否指向全局
  if (obj === undefined || obj === null) {
    obj = globalThis
  }
  // 创建临时方法
  obj.temp = Fn
  // 调用临时方法
  let result = obj.temp(...args)
  // 删除临时方法
  delete obj.temp
  // 返回执行结果
  return result
}