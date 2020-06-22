// 保持引用关系
function cloneForce(x) {
    // =============
    var uniqueList = []; // 用来去重
    // =============
    var root = {};
    // 循环数组
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
        // =============
        // 数据已经存在
        var uniqueData = find(uniqueList, data);
        if (uniqueData) {
            parent_1[key] = uniqueData.target;
            break; // 中断本次循环
        }
        // 数据不存在
        // 保存源数据，在拷贝数据中对应的引用
        uniqueList.push({
            source: data,
            target: res
        });
        // =============
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
function find(arr, item) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].source === item) {
            return arr[i];
        }
    }
    return null;
}
