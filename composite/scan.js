var Folder = /** @class */ (function () {
    function Folder(name) {
        this.parent = null;
        this.files = [];
        this.name = name;
    }
    Folder.prototype.add = function (file) {
        file.parent = this;
        this.files.push(file);
    };
    Folder.prototype.remove = function () {
        if (!this.parent) { // 根节点或者树外的游离节点
            return;
        }
        for (var files = this.parent.files, l = files.length - 1; l >= 0; l--) {
            var file = files[l];
            if (file === this) {
                files.splice(l, 1);
            }
        }
    };
    Folder.prototype.scan = function () {
        console.log('开始扫描文件夹: ' + this.name);
        for (var _i = 0, _a = this.files; _i < _a.length; _i++) {
            var file = _a[_i];
            file.scan();
        }
    };
    return Folder;
}());
// @ts-ignore
var File1 = /** @class */ (function () {
    function File1(name) {
        this.parent = null;
        this.name = name;
    }
    File1.prototype.add = function (file) {
        throw new Error('文件下面不能再添加文件');
    };
    File1.prototype.remove = function () {
        if (!this.parent) { // 根节点或者树外的游离节点
            return;
        }
        for (var files = this.parent.files, l = files.length - 1; l >= 0; l--) {
            var file = files[l];
            if (file === this) {
                files.splice(l, 1);
            }
        }
    };
    File1.prototype.scan = function () {
        console.log('开始扫描文件: ' + this.name);
    };
    return File1;
}());
var folder = new Folder('学习资料');
var folder1 = new Folder('JavaScript');
var folder2 = new Folder('jQuery');
var file1 = new File1('JavaScript 设计模式与开发实践');
var file2 = new File1('精通jQuery');
var file3 = new File1('重构与模式');
folder1.add(file1);
folder2.add(file2);
folder.add(folder1);
folder.add(folder2);
folder.add(file3);
var folder3 = new Folder('Nodejs');
var file4 = new File1('深入浅出Node.js');
folder3.add(file4);
var file5 = new File1('JavaScript 语言精髓与编程实践');
folder.add(folder3);
folder.add(file5);
folder1.remove();
folder.scan();
