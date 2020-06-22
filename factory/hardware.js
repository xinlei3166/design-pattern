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
exports.MiWare = exports.QualcommHardWare = void 0;
// 定义手机硬件这类产品的抽象产品类
var HardWare = /** @class */ (function () {
    function HardWare() {
    }
    // 手机硬件的共性方法，这里提取了“根据命令运转”这个共性
    HardWare.prototype.operateByOrder = function () {
        throw new Error('抽象产品方法不允许直接调用，你需要将我重写！');
    };
    return HardWare;
}());
// 定义具体硬件的具体产品类
var QualcommHardWare = /** @class */ (function (_super) {
    __extends(QualcommHardWare, _super);
    function QualcommHardWare() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QualcommHardWare.prototype.operateByOrder = function () {
        console.log('我会用高通的方式去运转');
    };
    return QualcommHardWare;
}(HardWare));
exports.QualcommHardWare = QualcommHardWare;
var MiWare = /** @class */ (function (_super) {
    __extends(MiWare, _super);
    function MiWare() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MiWare.prototype.operateByOrder = function () {
        console.log('我会用小米的方式去运转');
    };
    return MiWare;
}(HardWare));
exports.MiWare = MiWare;
