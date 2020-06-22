var PerformanceS = /** @class */ (function () {
    function PerformanceS() {
    }
    PerformanceS.prototype.calculate = function (salary) {
        return salary * 4;
    };
    return PerformanceS;
}());
var PerformanceA = /** @class */ (function () {
    function PerformanceA() {
    }
    PerformanceA.prototype.calculate = function (salary) {
        return salary * 3;
    };
    return PerformanceA;
}());
var PerformanceB = /** @class */ (function () {
    function PerformanceB() {
    }
    PerformanceB.prototype.calculate = function (salary) {
        return salary * 2;
    };
    return PerformanceB;
}());
var Bonus = /** @class */ (function () {
    function Bonus() {
    }
    Bonus.prototype.setSalary = function (salary) {
        this.salary = salary;
    };
    Bonus.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    Bonus.prototype.getBonus = function () {
        return this.strategy.calculate(this.salary);
    };
    return Bonus;
}());
var bonus = new Bonus();
bonus.setSalary(10000);
bonus.setStrategy(new PerformanceS()); // 设置策略对象
console.log(bonus.getBonus()); // 输出:40000
bonus.setStrategy(new PerformanceA()); // 设置策略对象
console.log(bonus.getBonus());
