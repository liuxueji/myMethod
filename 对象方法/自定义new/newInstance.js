function newInstance(Fn, ...args) {
  // 创建对象
  let obj = {}
  // 修改this指向，并执行
  let result = Fn.call(obj, ...args)
  // 修改新对象的原型
  obj.__proto__ = Fn.prototype
  // 返回新对象
  return result instanceof Object ? result : obj
}