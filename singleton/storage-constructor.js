var Storage3 = /** @class */ (function () {
    function Storage3() {
        if (!Storage3.instance) {
            Storage3.instance = this;
        }
        return Storage3.instance;
    }
    Storage3.prototype.getItem = function (key) {
        return localStorage.getItem(key);
    };
    Storage3.prototype.setItem = function (key, value) {
        return localStorage.setItem(key, value);
    };
    return Storage3;
}());
var sc1 = new Storage3();
var sc2 = new Storage3();
console.log(sc1 === sc2);
