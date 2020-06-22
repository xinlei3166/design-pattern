function cloneLoop(x) {
    var root = {};
    // 栈
    var loopList = [
        {
            parent: root,
            key: undefined,
            data: x
        }
    ];
    while (loopList.length) {
        // 深度优先
        var node = loopList.pop();
        var parent_1 = node.parent;
        var key = node.key;
        var data = node.data;
        // 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素
        var res = parent_1;
        if (typeof key !== 'undefined') {
            res = parent_1[key] = {};
        }
        for (var k in data) {
            if (data.hasOwnProperty(k)) {
                if (typeof data[k] === 'object') {
                    // 下一次循环
                    loopList.push({
                        parent: res,
                        key: k,
                        data: data[k]
                    });
                }
                else {
                    res[k] = data[k];
                }
            }
        }
    }
    return root;
}
