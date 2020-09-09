const each = function(obj, callback) {
  let value, isArray = Array.isArray(obj)
  if (isArray) { // 迭代类数组
    for (let i = 0; i < obj.length; i++) {
      callback.call(obj[i], i, obj[i])
    }
  } else {
    for (const key in obj) { // 迭代object 对象
      value = callback.call(obj[key], key, obj[key])
    }
  }
  return obj
}

const appendDiv = function(data) {
  each(data, function(i, n) {
    const div = document.createElement('div')
    div.innerHTML = n
    document.body.appendChild(div)
  })
}

appendDiv([1, 2, 3, 4, 5, 6])
appendDiv({a:1,b:2,c:3,d:4} )
