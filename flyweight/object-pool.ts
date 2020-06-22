const objectPoolFactory = function(createObjFn: Function) {
  const objectPool = []
  return {
    create: function() {
      const obj = objectPool.length === 0 ?
        createObjFn.apply(this, arguments) : objectPool.shift()
      return obj
    },
    recover: function(obj) {
      objectPool.push(obj)
    }
  }
}
