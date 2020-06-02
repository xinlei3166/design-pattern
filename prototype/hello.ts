function F(name) {
  this.name = ''
}

F.prototype.show = function() {
  console.log('show')
}

const f = new F('girl')

f.show()
console.log(f.toString())
console.log(f.__proto__.__proto__)
// console.log(f.__proto__.__proto__.__proto__)
// console.log(F.prototype.__proto__.__proto__)
// console.log(Object.prototype)
