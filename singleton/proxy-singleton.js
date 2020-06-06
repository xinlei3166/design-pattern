function CreateDiv(html) {
  this.html = html
  this.init()
}

CreateDiv.prototype.init = function() {
  const div = document.createElement('div')
  div.innerHTML = this.html
  document.body.append(div)
}

const ProxySingleton = (function() {
  let instance
  return function(html) {
    if (!instance) {
      instance = new CreateDiv(html)
    }
    return instance
  }
})()

const a = new ProxySingleton('a')
const b = new ProxySingleton('b')
console.log(a === b)
