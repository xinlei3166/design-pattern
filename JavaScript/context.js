function show(gender, career) {
  console.log(`我是${this.name}, ${this.age}岁, 性别：${gender}, 职业：${career}.`)
}

const obj1 = { name: '君惜', age: 18 }
const obj2 = { name: '玲玲', age: 17 }
const obj3 = { name: '婉儿', age: 22 }

show.call(obj1, '男', '程序员')
show.apply(obj2, ['女', '设计'])
show.bind(obj3, '女', 'COS-Play')()


Function.prototype.bind = function() {
  var self = this, // 保存原函数
    context = [].shift.call(arguments),
    args = [].slice.call(arguments)
  return function() { // 返回一个新的函数
// 需要绑定的 this 上下文 // 剩余的参数转成数组
    return self.apply(context, [].concat.call(args, [].slice.call(arguments))) // 执行新的函数的时候，会把之前传入的 context 当作新函数体内的 this
// 并且组合两次分别传入的参数，作为新函数的参数
  }
}
var obj = {
  name: 'sven'
}
var func = function(a, b, c, d) {
  console.log(this.name) // 输出:sven
  console.log([a, b, c, d]) // 输出:[ 1, 2, 3, 4 ]
}.bind(obj, 1, 2)

func(3, 4)
