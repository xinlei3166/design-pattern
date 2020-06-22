// 定义生成器函数，入参是任意集合
function iteratorGenerator(list) {
    var idx = 0;
    var len = list.length;
    return {
        next: function () {
            var done = idx >= len;
            var value = !done ? list[idx++] : undefined;
            return { done: done, value: value };
        }
    };
}
var iterator = iteratorGenerator(['1号选手', '2号选手', '3号选手']);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
