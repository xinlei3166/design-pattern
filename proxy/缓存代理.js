var mult = function() {
  console.log('开始计算乘积')
  var a = 1
  for ( var i = 0, l = arguments.length; i < l; i++) {
     a = a * arguments[i]
  }
  return a
}

var plus = function() {
  console.log('开始计算加和')
  var a = 1
  for ( var i = 0, l = arguments.length; i < l; i++) {
    a = a + arguments[i]
  }
  return a
}

var proxyMult = (function() {
  var cache = {}
  return function() {
    var args = Array.prototype.join.call(arguments, ',')
    return cache[args] || (cache[args] = mult.apply(this, arguments))
  }
})()

var createProxyFactory = function(fn) {
  var cache = {}
  return function() {
    var args = Array.prototype.join.call(arguments, ',')
    return cache[args] || (cache[args] = fn.apply(this, arguments))
  }
}

console.log(proxyMult(3,4,5))
console.log(proxyMult(3,4,5))

var proxyPlus = createProxyFactory(plus)
console.log(proxyPlus(3,4,5))
console.log(proxyPlus(3,4,5))

