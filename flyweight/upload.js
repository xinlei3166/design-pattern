var Upload = /** @class */ (function () {
    function Upload(uploadType) {
        this.uploadType = uploadType;
    }
    Upload.prototype.init = function () {
        var self = this;
        var dom = document.createElement('div');
        dom.setAttribute('data-fileName', this.fileName);
        dom.setAttribute('data-fileSize', String(this.fileSize));
        dom.innerHTML =
            "<span>\u6587\u4EF6\u540D\u79F0: " + this.fileName + ", \u6587\u4EF6\u5927\u5C0F: " + this.fileSize + "</span>\n      <button class=\"delFile\">\u5220\u9664</button>";
        var delFile = dom.querySelector('.delFile');
        delFile.onclick = function () {
            self.delFile(delFile.parentNode);
        };
        document.body.appendChild(dom);
    };
    Upload.prototype.delFile = function (dom) {
        var fileName = dom.getAttribute('data-fileName');
        var fileSize = parseInt(dom.getAttribute('data-fileSize'));
        if (fileSize < 3000) {
            return dom.parentNode.removeChild(dom);
        }
        if (window.confirm('确定要删除该文件吗? ' + fileName)) {
            return dom.parentNode.removeChild(dom);
        }
    };
    Upload.prototype.setFile = function (file) {
        var fileName = file.fileName, fileSize = file.fileSize;
        this.fileName = fileName;
        this.fileSize = fileSize;
    };
    return Upload;
}());
var UploadFactory = /** @class */ (function () {
    function UploadFactory() {
    }
    UploadFactory.create = function (uploadType) {
        if (this.createdFlyWeightObjs[uploadType]) {
            return this.createdFlyWeightObjs[uploadType];
        }
        return this.createdFlyWeightObjs[uploadType] = new Upload(uploadType);
    };
    UploadFactory.createdFlyWeightObjs = {};
    return UploadFactory;
}());
var startUpload = function (uploadType, files) {
    for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
        var file = files_1[_i];
        var upload = UploadFactory.create(uploadType);
        upload.setFile(file);
        upload.init();
    }
};
startUpload('plugin', [
    {
        fileName: '1.txt',
        fileSize: 1000
    },
    {
        fileName: '2.html',
        fileSize: 3000
    },
    {
        fileName: '3.txt',
        fileSize: 5000
    }
]);
startUpload('flash', [
    {
        fileName: '4.txt',
        fileSize: 1000
    },
    {
        fileName: '5.html',
        fileSize: 3000
    },
    {
        fileName: '6.txt',
        fileSize: 5000
    }
]);
