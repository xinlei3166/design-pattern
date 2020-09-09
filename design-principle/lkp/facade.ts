const a1 = function() {
  console.log('a1')
}

const a2 = function() {
  console.log('a2')
}

const b1 = function() {
  console.log('b1')
}

const b2 = function() {
  console.log('b2')
}

const A = function() {
  a1()
  a2()
}

const B = function() {
  b1()
  b2()
}

const facade = function() {
  A()
  B()
}

facade()
