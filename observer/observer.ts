// 定义订阅者类
class Observer {
  constructor() {
    console.log('Observer created')
  }

  update(publisher) {
    console.log('Observer.update invoked')
  }
}

export class DeveloperObserver extends Observer {
  prdState: {}

  constructor() {
    super()
    // 需求文档一开始还不存在，prd初始为空对象
    this.prdState = {}
    console.log('DeveloperObserver created')
  }

  // 重写一个具体的update方法
  update(publisher) {
    console.log('DeveloperObserver.update invoked')
    // 更新需求文档
    this.prdState = publisher.getState()
    // 调用工作函数
    this.work()
  }

  // work方法，一个专门搬砖的方法
  work() {
    // 获取需求文档
    const prd = this.prdState
    // 开始基于需求文档提供的信息搬砖。。。
    console.log('develop ...')
  }
}
