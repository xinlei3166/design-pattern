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
exports.AppleOS = exports.AndroidOS = void 0;
// 定义操作系统这类产品的抽象产品类
var OS = /** @class */ (function () {
    function OS() {
    }
    OS.prototype.controlHardWare = function () {
        throw new Error('抽象产品方法不允许直接调用，你需要将我重写！');
    };
    return OS;
}());
// 定义具体操作系统的具体产品类
var AndroidOS = /** @class */ (function (_super) {
    __extends(AndroidOS, _super);
    function AndroidOS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AndroidOS.prototype.controlHardWare = function () {
        console.log('我会用安卓的方式去操作硬件');
    };
    return AndroidOS;
}(OS));
exports.AndroidOS = AndroidOS;
var AppleOS = /** @class */ (function (_super) {
    __extends(AppleOS, _super);
    function AppleOS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppleOS.prototype.controlHardWare = function () {
        console.log('我会用🍎的方式去操作硬件');
    };
    return AppleOS;
}(OS));
exports.AppleOS = AppleOS;
