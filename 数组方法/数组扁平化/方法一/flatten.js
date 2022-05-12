function flatten(arr) {
  // 声明新数组
  let result = []
  // 遍历数组
  arr.forEach(item => {
    // 判断。如果是数组用递归，如果不是数组直接拼接
    if (Array.isArray(item)) result = result.concat(flatten(item))
    else result.push(item)
  })
  // 返回数组
  return result
}