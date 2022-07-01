function clone(target) {
  // 类型判断
  if (typeof target === 'object' && target !== null) {
    // 判断是否为数组
    if (Array.isArray(target)) {
      // 如果是，装入数组中返回
      return [...target]
    } else {
      // 如果不是，那么就是对象，装入对象中返回
      return {
        ...target
      }
    }
  } else {
    // 普通类型的直接返回
    return target
  }

}