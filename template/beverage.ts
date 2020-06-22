abstract class Beverage {
  init() {
    this.boilWater()
    this.brew()
    this.pourInCup()
    if (this.customerWantsCondiments()) {
      this.addCondiments()
    }
  }

  boilWater() {
    console.log('把水煮沸')
  }

  abstract brew()

  abstract pourInCup()

  abstract addCondiments()

  customerWantsCondiments() { // 钩子
    return true
  }
}

class Coffee extends Beverage {
  brew() {
    console.log('用沸水冲泡咖啡')
  }

  pourInCup() {
    console.log('把咖啡倒进杯子')
  }

  addCondiments() {
    console.log('加糖和牛奶')
  }

  customerWantsCondiments() {
    console.log( '请问需要调料吗？' )
    console.log( '先不要了' )
    return false
  }
}

const coffee = new Coffee()
coffee.init()

class Tea extends Beverage {
  brew() {
    console.log('用沸水浸泡茶叶')
  }

  pourInCup() {
    console.log('把茶倒进杯子')
  }

  addCondiments() {
    console.log('加柠檬')
  }
}

const tea = new Tea()
tea.init()
