function pull(arr, ...args) {
  // 定义空数组，用于存放被删除元素
  let result = []
  // 循环原数组
  for (let i = 0; i < arr.length; i++) {
    // 判断。原数组中每一项是否存在arrgs中
    if (args.includes(arr[i])) {
      // 存入
      result.push(arr[i])
      // 删除。使用splice，能修改原数组arr
      arr.splice(i, 1)
      // 自减
      i--
    }
  }
  // 返回被删除数组
  return result
}