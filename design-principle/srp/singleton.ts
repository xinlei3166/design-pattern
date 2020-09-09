const getSingle = function(fn) { // 获取单例
  let result
  return function() {
    return result || (result = fn.apply(this, arguments))
  }
}

const createLoginLayer = function() { // 创建登录浮窗
  const div = document.createElement('div')
  div.innerHTML = '我是登录浮窗'
  document.body.appendChild(div)
  return div
}

const createSingleLoginLayer = getSingle(createLoginLayer)
const loginLayer1 = createSingleLoginLayer()
const loginLayer2 = createSingleLoginLayer()
console.log(loginLayer1 === loginLayer2)
