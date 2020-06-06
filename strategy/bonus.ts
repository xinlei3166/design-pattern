interface Strategy {
  calculate(salary: number): number
}

class PerformanceS implements Strategy {
  calculate(salary: number) {
    return salary * 4
  }
}

class PerformanceA implements Strategy {
  calculate(salary: number) {
    return salary * 3
  }
}

class PerformanceB implements Strategy {
  calculate(salary: number) {
    return salary * 2
  }
}

class Bonus {
  private strategy: Strategy
  private salary: number

  setSalary(salary: number) {
    this.salary = salary
  }

  setStrategy(strategy: Strategy) {
    this.strategy = strategy
  }

  getBonus() {
    return this.strategy.calculate(this.salary)
  }
}

const bonus = new Bonus()

bonus.setSalary(10000)
bonus.setStrategy(new PerformanceS()) // 设置策略对象
console.log(bonus.getBonus()) // 输出:40000

bonus.setStrategy(new PerformanceA()) // 设置策略对象
console.log(bonus.getBonus())
