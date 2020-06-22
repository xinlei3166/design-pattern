"use strict";
exports.__esModule = true;
var mobile_1 = require("./mobile");
// 这是我的手机
var myPhone = new mobile_1.FakeStarFactory();
// 让它拥有操作系统
var myOS = myPhone.createOS();
// 让它拥有硬件
var myHardWare = myPhone.createHardWare();
// 启动操作系统(输出‘我会用安卓的方式去操作硬件’)
myOS.controlHardWare();
// 唤醒硬件(输出‘我会用高通的方式去运转’)
myHardWare.operateByOrder();
// 这是我的手机
var miPhone = new mobile_1.MiFactory();
// 让它拥有操作系统
var miOS = miPhone.createOS();
// 让它拥有硬件
var miHardWare = miPhone.createHardWare();
// 启动操作系统(输出‘我会用安卓的方式去操作硬件’)
miOS.controlHardWare();
// 唤醒硬件(输出‘我会用高通的方式去运转’)
miHardWare.operateByOrder();
