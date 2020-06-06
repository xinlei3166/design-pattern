var Type = {}
for (var i = 0, type; type = ['String', 'Array', 'Number'][i++];) {
  (function(type) {
    Type['is' + type] = function(obj) {
      return Object.prototype.toString.call(obj) === '[object ' + type + ']'
    }
  })(type)
}

console.log(Type.isArray([])) // 输出:true
console.log(Type.isString('str')) // 输出:true

// 封装变量
var mult = (function() {
  var cache = {}
  var calculate = function() { // 封闭 calculate 函数
    var a = 1
    for (var i = 0, l = arguments.length; i < l; i++) {
      a = a * arguments[i]
    }
    return a
  }
  return function() {
    var args = Array.prototype.join.call(arguments, ',')
    if (args in cache) {
      return cache[args]
    }
    return cache[args] = calculate.apply(null, arguments)
  }
})()

console.log(mult(1, 2, 3))

// 延续局部变量的寿命
var report = (function() {
  var imgs = []
  return function(src) {
    var img = new Image()
    imgs.push(img)
    img.src = src
  }
})()

// 闭包和面向对象
var extent = function() {
  var value = 0
  return {
    call: function() {
      value++
      console.log(value)
    }
  }
}
var extent = extent()
extent.call()
extent.call()
extent.call()

var Extent = function() {
  this.value = 0
}
Extent.prototype.call = function() {
  this.value++
  console.log(this.value)
}
var extent = new Extent()
extent.call()
extent.call()
extent.call()

// 命令模式
var Tv = {
  open: function() {
    console.log('打开电视机')
  },
  close: function() {
    console.log('关上电视机')
  }
}
var createCommand = function(receiver) {
  var execute = function() {
    return receiver.open()
  }
  var undo = function() {
    return receiver.close()
  }
  return { execute, undo }
}
var setCommand = function(command) {
  document.getElementById('execute').onclick = function() {
    command.execute() // 输出:打开电视机
  }
  document.getElementById('undo').onclick = function() {
    command.undo() // 输出:关闭电视机
  }
}
setCommand(createCommand(Tv))
