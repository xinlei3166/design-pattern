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
exports.MiFactory = exports.FakeStarFactory = void 0;
var os_1 = require("./os");
var hardware_1 = require("./hardware");
var MobilePhoneFactory = /** @class */ (function () {
    function MobilePhoneFactory() {
    }
    // 提供操作系统的接口
    MobilePhoneFactory.prototype.createOS = function () {
        throw new Error('abstract method');
    };
    // 提供硬件的接口
    MobilePhoneFactory.prototype.createHandWare = function () {
        throw new Error('abstract method');
    };
    return MobilePhoneFactory;
}());
// 具体工厂继承自抽象工厂
var FakeStarFactory = /** @class */ (function (_super) {
    __extends(FakeStarFactory, _super);
    function FakeStarFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FakeStarFactory.prototype.createOS = function () {
        // 提供安卓系统实例
        return new os_1.AndroidOS();
    };
    FakeStarFactory.prototype.createHardWare = function () {
        // 提供高通硬件实例
        return new hardware_1.QualcommHardWare();
    };
    return FakeStarFactory;
}(MobilePhoneFactory));
exports.FakeStarFactory = FakeStarFactory;
// 具体工厂继承自抽象工厂
var MiFactory = /** @class */ (function (_super) {
    __extends(MiFactory, _super);
    function MiFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MiFactory.prototype.createOS = function () {
        // 提供安卓系统实例
        return new os_1.AndroidOS();
    };
    MiFactory.prototype.createHardWare = function () {
        // 提供高通硬件实例
        return new hardware_1.MiWare();
    };
    return MiFactory;
}(MobilePhoneFactory));
exports.MiFactory = MiFactory;
