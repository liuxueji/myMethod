function myInstanceOf(obj, Fn) {
  // 获取函数显示原型
  let prototype = Fn.prototype
  // 获取obj隐式原型
  let proto = obj.__proto__
  // 遍历原型链
  while (proto) {
    // 判断是否找到
    if (proto === prototype) return true
    // 没有找到，就找上一层
    proto = proto.__proto__
  }
  // 不在原型链上
  return false
}