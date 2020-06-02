function deepClone(obj) {
  if (typeof obj !== 'object' ||  obj === null) {
    return obj
  }
  let copy = {}
  if (obj.constructor === Array) {
    copy = []
  }
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepClone(obj[key])
    }
  }
  return copy
}

let a = { a: 1, b: [1,2]}
let b = deepClone(a)
b.b.splice(1, 1)
console.log(a)
console.log(b)
