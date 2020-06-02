import { FakeStarFactory, MiFactory } from './mobile'

// 这是我的手机
const myPhone = new FakeStarFactory()
// 让它拥有操作系统
const myOS = myPhone.createOS()
// 让它拥有硬件
const myHardWare = myPhone.createHardWare()
// 启动操作系统(输出‘我会用安卓的方式去操作硬件’)
myOS.controlHardWare()
// 唤醒硬件(输出‘我会用高通的方式去运转’)
myHardWare.operateByOrder()

// 这是我的手机
const miPhone = new MiFactory()
// 让它拥有操作系统
const miOS = miPhone.createOS()
// 让它拥有硬件
const miHardWare = miPhone.createHardWare()
// 启动操作系统(输出‘我会用安卓的方式去操作硬件’)
miOS.controlHardWare()
// 唤醒硬件(输出‘我会用高通的方式去运转’)
miHardWare.operateByOrder()
