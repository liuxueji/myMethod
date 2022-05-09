function drop(arr, size) {
  // 过滤原数组
  return arr.filter((value, index) => {
    // 过滤出原数组中下标值大于过滤个数的值
    return index >= size
  })
  // 简写
  // return arr.filter((value, index) => index >= size)
}