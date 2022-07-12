function difference(arr1, arr2) {
  // 判断arr1是否为空。
  if (arr1.length === 0) return []
  // 判断arr2是否为空
  if (arr2.length === 0) return arr1.slice()
  // 过滤arr1，返回arr1每一项不包含在arr2中的元素
  const result = arr1.filter(item => !arr2.includes(item))
  // 返回结果
  return result
}