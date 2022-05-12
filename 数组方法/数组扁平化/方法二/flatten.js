function flatten(arr) {
  // 声明数组，将原数组值赋值给新数组
  let result = [...arr]
  // 循环，通过some判断数组内是否有数组
  while (result.some(item => Array.isArray(item))) {
    // 如果result有子数组，那就将result展开放入空数组中并赋值给result
    result = [].concat(...result)
  }
  // 返回结果
  return result
}