var SingleDog = /** @class */ (function () {
    function SingleDog() {
    }
    SingleDog.getInstance = function () {
        // 判断是否已经new过1个实例
        if (!SingleDog.instance) {
            // 若这个唯一的实例不存在，那么先创建它
            SingleDog.instance = new SingleDog();
        }
        // 如果这个唯一的实例已经存在，则直接返回
        return SingleDog.instance;
    };
    SingleDog.prototype.show = function () {
        console.log('我是一个单例对象');
    };
    return SingleDog;
}());
SingleDog.getInstance = (function () {
    // 定义自由变量instance，模拟私有变量
    var instance = null;
    return function () {
        // 判断自由变量是否为null
        if (!instance) {
            // 如果为null则new出唯一实例
            instance = new SingleDog();
        }
        return instance;
    };
})();
var s1 = SingleDog.getInstance();
var s2 = SingleDog.getInstance();
console.log(s1 === s2);
