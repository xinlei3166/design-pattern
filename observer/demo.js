"use strict";
exports.__esModule = true;
var publisher_1 = require("./publisher");
var observer_1 = require("./observer");
// 创建订阅者：前端开发李雷
var liLei = new observer_1.DeveloperObserver();
// 创建订阅者：服务端开发小A（sorry。。。起名字真的太难了）
var A = new observer_1.DeveloperObserver();
// 创建订阅者：测试同学小B
var B = new observer_1.DeveloperObserver();
// 韩梅梅出现了
var hanMeiMei = new publisher_1.PrdPublisher();
// 需求文档出现了
var prd = {
    // 具体的需求内容
    name: 'hello',
    content: 'world'
};
// 韩梅梅开始拉群
hanMeiMei.add(liLei);
hanMeiMei.add(A);
hanMeiMei.add(B);
// 韩梅梅发送了需求文档，并@了所有人
hanMeiMei.setState(prd);
