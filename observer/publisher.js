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
exports.PrdPublisher = void 0;
// 定义发布者类
var Publisher = /** @class */ (function () {
    function Publisher() {
        this.observers = [];
        console.log('Publisher created');
    }
    // 增加订阅者
    Publisher.prototype.add = function (observer) {
        console.log('Publisher.add invoked');
        this.observers.push(observer);
    };
    // 移除订阅者
    Publisher.prototype.remove = function (observer) {
        var _this = this;
        console.log('Publisher.remove invoked');
        this.observers.forEach(function (item, i) {
            if (item === observer) {
                _this.observers.splice(i, 1);
            }
        });
    };
    // 通知所有订阅者
    Publisher.prototype.notify = function () {
        var _this = this;
        console.log('Publisher.notify invoked');
        this.observers.forEach(function (observer) {
            observer.update(_this);
        });
    };
    return Publisher;
}());
// 定义一个具体的需求文档（prd）发布类
var PrdPublisher = /** @class */ (function (_super) {
    __extends(PrdPublisher, _super);
    function PrdPublisher() {
        var _this = _super.call(this) || this;
        // 初始化需求文档
        _this.prdState = null;
        // 韩梅梅还没有拉群，开发群目前为空
        _this.observers = [];
        console.log('PrdPublisher created');
        return _this;
    }
    // 该方法用于获取当前的prdState
    PrdPublisher.prototype.getState = function () {
        console.log('PrdPublisher.getState invoked');
        return this.prdState;
    };
    // 该方法用于改变prdState的值
    PrdPublisher.prototype.setState = function (state) {
        console.log('PrdPublisher.setState invoked');
        // prd的值发生改变
        this.prdState = state;
        // 需求文档变更，立刻通知所有开发者
        this.notify();
    };
    return PrdPublisher;
}(Publisher));
exports.PrdPublisher = PrdPublisher;
