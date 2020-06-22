// 先实现一个基础的StorageBase类，把getItem和setItem方法放在它的原型链上
function StorageBase() { }
StorageBase.prototype.getItem = function (key) {
    return localStorage.getItem(key);
};
StorageBase.prototype.setItem = function (key, value) {
    return localStorage.setItem(key, value);
};
// 以闭包的形式创建一个引用自由变量的构造函数
var Storage2 = (function () {
    var instance = null;
    return function () {
        // 判断自由变量是否为null
        if (!instance) {
            // 如果为null则new出唯一实例
            instance = new StorageBase();
        }
        return instance;
    };
})();
// 这里其实不用 new Storage 的形式调用，直接 Storage() 也会有一样的效果
var storage1 = Storage2();
var storage2 = Storage2();
storage1.setItem('name', '李雷');
// 李雷
storage1.getItem('name');
// 也是李雷
storage2.getItem('name');
// 返回true
console.log(storage1 === storage2);
