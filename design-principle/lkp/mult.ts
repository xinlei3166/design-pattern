const mult = (function() {
  const cache = {}
  return function(...args) {
    const argStr = Array.prototype.join.call(args, ',')
    if (cache[argStr]) {
      return cache[argStr]
    }
    let a = 1
    for (let arg of args) {
      a = a * arg
    }
    console.log('计算')
    return cache[argStr] = a
  }
}())

console.log(mult(1,2))
