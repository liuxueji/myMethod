function clone(target) {
  // 判断是否为object
  if (typeof target === 'object' && target !== null) {
    // 创建容器，判断是数组还是对象
    let result = Array.isArray(target) ? [] : {}
    // 遍历target
    for (let key in target) {
      // 判断当前对象身上是否包含该属性
      if (target.hasOwnProperty(key)) {
        // 将属性值设置到 result 结果数据中
        result[key] = target[key]
      }
    }
    // 返回结果
    return result
  }
  // 直接返回
  return target
}