// 定义发布者类
class Publisher {
  observers: any[]

  constructor() {
    this.observers = []
    console.log('Publisher created')
  }

  // 增加订阅者
  add(observer) {
    console.log('Publisher.add invoked')
    this.observers.push(observer)
  }

  // 移除订阅者
  remove(observer) {
    console.log('Publisher.remove invoked')
    this.observers.forEach((item, i) => {
      if (item === observer) {
        this.observers.splice(i, 1)
      }
    })
  }

  // 通知所有订阅者
  notify() {
    console.log('Publisher.notify invoked')
    this.observers.forEach((observer) => {
      observer.update(this)
    })
  }
}

// 定义一个具体的需求文档（prd）发布类
export class PrdPublisher extends Publisher {
  prdState: null

  constructor() {
    super()
    // 初始化需求文档
    this.prdState = null
    // 韩梅梅还没有拉群，开发群目前为空
    this.observers = []
    console.log('PrdPublisher created')
  }

  // 该方法用于获取当前的prdState
  getState() {
    console.log('PrdPublisher.getState invoked')
    return this.prdState
  }

  // 该方法用于改变prdState的值
  setState(state) {
    console.log('PrdPublisher.setState invoked')
    // prd的值发生改变
    this.prdState = state
    // 需求文档变更，立刻通知所有开发者
    this.notify()
  }
}
