import { AndroidOS, AppleOS } from "./os"
import { QualcommHardWare, MiWare } from "./hardware"

class MobilePhoneFactory {
  // 提供操作系统的接口
  createOS() {
    throw new Error('abstract method')
  }
  // 提供硬件的接口
  createHandWare() {
    throw new Error('abstract method')
  }
}

// 具体工厂继承自抽象工厂
export class FakeStarFactory extends MobilePhoneFactory {
  createOS() {
    // 提供安卓系统实例
    return new AndroidOS()
  }
  createHardWare() {
    // 提供高通硬件实例
    return new QualcommHardWare()
  }
}

// 具体工厂继承自抽象工厂
export class MiFactory extends MobilePhoneFactory {
  createOS() {
    // 提供安卓系统实例
    return new AndroidOS()
  }
  createHardWare() {
    // 提供高通硬件实例
    return new MiWare()
  }
}
