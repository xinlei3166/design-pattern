"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.DeveloperObserver = void 0;
// 定义订阅者类
var Observer = /** @class */ (function () {
    function Observer() {
        console.log('Observer created');
    }
    Observer.prototype.update = function (publisher) {
        console.log('Observer.update invoked');
    };
    return Observer;
}());
var DeveloperObserver = /** @class */ (function (_super) {
    __extends(DeveloperObserver, _super);
    function DeveloperObserver() {
        var _this = _super.call(this) || this;
        // 需求文档一开始还不存在，prd初始为空对象
        _this.prdState = {};
        console.log('DeveloperObserver created');
        return _this;
    }
    // 重写一个具体的update方法
    DeveloperObserver.prototype.update = function (publisher) {
        console.log('DeveloperObserver.update invoked');
        // 更新需求文档
        this.prdState = publisher.getState();
        // 调用工作函数
        this.work();
    };
    // work方法，一个专门搬砖的方法
    DeveloperObserver.prototype.work = function () {
        // 获取需求文档
        var prd = this.prdState;
        // 开始基于需求文档提供的信息搬砖。。。
        console.log('develop ...');
    };
    return DeveloperObserver;
}(Observer));
exports.DeveloperObserver = DeveloperObserver;
