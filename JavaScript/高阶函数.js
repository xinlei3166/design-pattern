// 回调函数
const getInfo = function(id, callback) {
  const obj = { 1: '君惜', 2: '婉儿' }
  callback(obj[id])
}

getInfo(2, function(name) {
  console.log(name)
})

// 函数作为返回值输出
const getSingle = function(fn) {
  let ret
  return function() {
    return ret || (ret = fn.apply(this, arguments))
  }
}

const getName = getSingle(function() {
  return 'name'
})

const name1 = getName()
const name2 = getName()
console.log(name1 === name2)

// 高阶函数实现AOP(面向切面编程)
function func () {
  console.log(2)
}

Function.prototype.before = function(beforefn) {
  var __self = this // 保存原函数的引用
  return function() { // 返回包含了原函数和新函数的"代理"函数
    beforefn.apply(this, arguments)
    return __self.apply(this, arguments)
  }
}
Function.prototype.after = function(afterfn) {
  var __self = this
  return function() {
    var ret = __self.apply(this, arguments)
    afterfn.apply(this, arguments)
    return ret
  }
}
func = func.before(function() {
  console.log(1)
}).after(function() {
  console.log(3)
})
func()

// currying
var currying = function(fn) {
  var args = []
  return function inner () {
    if (arguments.length === 0) {
      return fn.apply(this, args)
    } else {
      [].push.apply(args, arguments)
      return inner
    }
  }
}
var cost = (function() {
  var money = 0
  return function() {
    for (var i = 0, l = arguments.length; i < l; i++) {
      money += arguments[i]
    }
    return money
  }
})()
var cost = currying(cost)
// 转化成 currying 函数
cost(100) // 未真正求值
cost(200) // 未真正求值
cost(300) // 未真正求值
console.log(cost()) // 求值并输出:600

// uncurrying
Function.prototype.uncurrying = function() {
  var self = this
  return function() {
    // var obj = Array.prototype.shift.call(arguments)
    // return self.apply(obj, arguments)
    return Function.prototype.call.apply( self, arguments );
  }
}

var push = Array.prototype.push.uncurrying();
(function() {
  push(arguments, 4)
  console.log(arguments) // 输出:[1, 2, 3, 4]
})(1, 2, 3)
