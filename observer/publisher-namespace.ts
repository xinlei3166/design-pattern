interface IEventBase {
  emit: (key: string, ...args) => void,
  on: (key: string, cb: Function) => void,
  one: (key: string, cb: Function) => void,
  remove: (key: string, cb?: Function) => void
}

interface IEvent extends IEventBase {
  namespaceCache: object
  create: (namespace: string) => void
}

class Event1 implements IEvent {
  namespaceCache: object = {}
  private static instance: Event1

  constructor() {
    return this.getInstance()
  }

  getInstance() {
    if (!Event1.instance) {
      Event1.instance = this
    }
    return Event1.instance
  }

  create(namespace: string = 'default') {
    return new Namespace(this, namespace)
  }

  emit(key: string, ...args) {
    const event = this.create()
    event.emit(key, ...args)
  }

  on(key: string, cb: Function) {
    const event = this.create()
    event.on(key, cb)
  }

  one(key: string, cb: Function) {
    const event = this.create()
    event.one(key, cb)
  }

  remove(key: string, cb?: Function) {
    const event = this.create()
    event.remove(key, cb)
  }
}

class Namespace implements IEventBase {
  private event: IEvent
  private readonly namespace: string
  private subscribe: object = {}
  private offlineStack: Function[] = []

  constructor(event: IEvent, namespace: string) {
    this.event = event
    this.namespace = namespace
    return this.getInstance()
  }

  getInstance() {
    return this.event.namespaceCache[this.namespace] ? this.event.namespaceCache[this.namespace] : (this.event.namespaceCache[this.namespace] = this)
  }

  each(cbs: any[], ...args) {
    for (let i = 0, l = cbs.length; i < l; i++) {
      let cb = cbs[i]
      cb(...args)
    }
  }

  emit(key: string, ...args) {
    this._emit(key, ...args)
  }

  _emit(key: string, ...args) {
    const self = this
    const cb = function() {
      const stack = self.subscribe[key]
      if (!stack || !stack.length) {
        return
      }
      return self.each(stack, ...args)
    }
    if (this.offlineStack) {
      return this.offlineStack.push(cb)
    }
    return cb()
  }

  on(key: string, cb: Function) {
    this._on(key, cb)
    if (this.offlineStack === null) {
      return
    }
    this.each(this.offlineStack)
    this.offlineStack = null
  }

  _on(key: string, cb: Function) {
    if (!this.subscribe[key]) {
      this.subscribe[key] = []
    }
    this.subscribe[key].push(cb)
  }

  one(key: string, cb: Function) {
    this.on(key, cb)
    this.remove(key)
  }

  remove(key: string, cb?: Function) {
    this._remove(key, cb)
  }

  _remove(key: string, cb?: Function) {
    if (this.subscribe[key]) {
      if (cb) {
        for (let i = this.subscribe[key].length; i >= 0; i--) {
          if (this.subscribe[key][i] === cb) {
            this.subscribe[key].splice(i, 1)
          }
        }
      } else {
        this.subscribe[key] = []
      }
    }
  }
}

/************** 先发布后订阅 ********************/
const event1 = new Event1()
event1.emit('click', 1, 2)
event1.on('click', function(a, b) {
  console.log(a, b) // 输出：1
})

/************** 使用命名空间 ********************/
const namespace1 = event1.create('namespace1')
const namespace2 = event1.create('namespace2')

namespace1.on('click', function(a) {
  console.log(a) // 输出：1
})
namespace1.emit('click', 1)

namespace2.emit('click', 2)
namespace2.one('click', function(a) {
  console.log(a) // 输出：2
})
namespace2.remove('click')
namespace2.emit('click', 22)
