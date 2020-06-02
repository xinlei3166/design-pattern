class EventEmitter {
  handlers: {}
  constructor() {
    // handlers是一个map，用于存储事件与回调之间的对应关系
    this.handlers = {}
  }

  on(eventName, cb) {
    if (!this.handlers[eventName]) {
      this.handlers[eventName] = []
    }
    this.handlers[eventName].push(cb)
  }

  emit(eventName, ...args) {
    if (this.handlers[eventName]) {
      this.handlers[eventName].forEach(cb => {
        cb(...args)
      })
    }
  }

  off(eventName, cb) {
    const index = this.handlers[eventName].findIndex(x => x === cb)
    if (index !== -1) {
      this.handlers[eventName].splice(index, 1)
    }
  }

  once(eventName, cb) {
    const wrap = (...args) => {
      cb(...args)
      this.off(eventName, wrap)
    }
    this.on(eventName, wrap)
  }
}

const emitter = new EventEmitter()
emitter.on('show', (...args) => {
  console.log(args)
})
emitter.emit('show',  'a', 'b', 'c')
console.log(emitter.handlers['show'])
emitter.once('only-show', (...args) => {
  console.log(args)
})
emitter.emit('only-show',  'only-show')
console.log(emitter.handlers['only-show'])
