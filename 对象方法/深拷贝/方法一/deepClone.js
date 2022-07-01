  function deepClone(target) {
    // 创建json格式字符串
    let str = JSON.stringify(target)
    // 字符串转为json数据
    let data = JSON.parse(str)
    // 返回数据
    return data
  }