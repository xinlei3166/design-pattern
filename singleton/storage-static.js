var Storage1 = /** @class */ (function () {
    function Storage1() {
    }
    Storage1.getInstance = function () {
        if (!Storage1.instance) {
            Storage1.instance = new Storage1();
        }
        return Storage1.instance;
    };
    Storage1.prototype.getItem = function (key) {
        return localStorage.getItem(key);
    };
    Storage1.prototype.setItem = function (key, value) {
        return localStorage.setItem(key, value);
    };
    return Storage1;
}());
var st1 = Storage1.getInstance();
var st2 = Storage1.getInstance();
console.log(st1 === st2);
