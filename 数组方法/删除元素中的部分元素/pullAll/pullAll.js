function pull(arr, ...args) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (args.includes(arr[i])) {
      result.push(arr[i])
      arr.splice(i, 1)
      i--
    }
  }
  return result
}

function pullAll(arr1, arr2) {
  return pull(arr1, ...arr2)
}