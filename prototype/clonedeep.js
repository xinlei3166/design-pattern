function deepClone(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    var copy = {};
    if (obj.constructor === Array) {
        copy = [];
    }
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepClone(obj[key]);
        }
    }
    return copy;
}
var a = { a: 1, b: [1, 2] };
var b = deepClone(a);
b.b.splice(1, 1);
console.log(a);
console.log(b);
