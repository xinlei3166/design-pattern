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
var Beverage = /** @class */ (function () {
    function Beverage() {
    }
    Beverage.prototype.init = function () {
        this.boilWater();
        this.brew();
        this.pourInCup();
        if (this.customerWantsCondiments()) {
            this.addCondiments();
        }
    };
    Beverage.prototype.boilWater = function () {
        console.log('把水煮沸');
    };
    Beverage.prototype.customerWantsCondiments = function () {
        return true;
    };
    return Beverage;
}());
var Coffee = /** @class */ (function (_super) {
    __extends(Coffee, _super);
    function Coffee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Coffee.prototype.brew = function () {
        console.log('用沸水冲泡咖啡');
    };
    Coffee.prototype.pourInCup = function () {
        console.log('把咖啡倒进杯子');
    };
    Coffee.prototype.addCondiments = function () {
        console.log('加糖和牛奶');
    };
    Coffee.prototype.customerWantsCondiments = function () {
        console.log('请问需要调料吗？');
        console.log('先不要了');
        return false;
    };
    return Coffee;
}(Beverage));
var coffee = new Coffee();
coffee.init();
var Tea = /** @class */ (function (_super) {
    __extends(Tea, _super);
    function Tea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tea.prototype.brew = function () {
        console.log('用沸水浸泡茶叶');
    };
    Tea.prototype.pourInCup = function () {
        console.log('把茶倒进杯子');
    };
    Tea.prototype.addCondiments = function () {
        console.log('加柠檬');
    };
    return Tea;
}(Beverage));
var tea = new Tea();
tea.init();
