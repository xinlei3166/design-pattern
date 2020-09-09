function arrayMap(arr, callback) {
  let ret = []
  arr.forEach(function(n, i) {
    ret.push(callback(i, arr[i]))
  })
  return ret
}

const arrayMap1 = arrayMap([1, 2, 3], function(i, n) {
  return n * 2
})

const arrayMap2 = arrayMap([1, 2, 3], function(i, n) {
  return n * 3
})

console.log(arrayMap1)
console.log(arrayMap2)
