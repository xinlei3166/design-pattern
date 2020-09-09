var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
window.upload = function (state) {
    console.log(state); // 可能为sign、uploading、done、error
};
var plugin = (function () {
    var plugin = document.createElement('embed');
    plugin.style.display = 'none';
    plugin.type = 'application/txftn-webkit';
    plugin.sign = function () {
        console.log('开始文件扫描');
    };
    plugin.pause = function () {
        console.log('暂停文件上传');
    };
    plugin.uploading = function () {
        console.log('开始文件上传');
    };
    plugin.del = function () {
        console.log('删除文件上传');
    };
    plugin.done = function () {
        console.log('文件上传完成');
    };
    document.body.appendChild(plugin);
    return plugin;
})();
var UploadFile = /** @class */ (function () {
    function UploadFile(fileName) {
        this.plugin = plugin;
        this.button1 = null;
        this.button2 = null;
        this.fileName = fileName;
        this.signState = new SignState(this); // 设置初始状态为waiting
        this.uploadingState = new UploadingState(this);
        this.pauseState = new PauseState(this);
        this.doneState = new DoneState(this);
        this.errorState = new ErrorState(this);
        this.currState = this.signState;
    }
    UploadFile.prototype.init = function () {
        this.dom = document.createElement('div');
        this.dom.innerHTML = "\n    <span>\u6587\u4EF6\u540D\u79F0: " + this.fileName + "</span>\n    <button data-action=\"button1\">\u626B\u63CF\u4E2D</button>\n    <button data-action=\"button2\">\u5220\u9664</button>";
        document.body.appendChild(this.dom);
        this.button1 = this.dom.querySelector('[data-action="button1"]'); // 第一个按钮
        this.button2 = this.dom.querySelector('[data-action="button2"]'); // 第二个按钮
        this.bindEvent();
    };
    UploadFile.prototype.bindEvent = function () {
        var self = this;
        this.button1.onclick = function () {
            self.currState.clickHandler1();
        };
        this.button2.onclick = function () {
            self.currState.clickHandler2();
        };
    };
    ;
    UploadFile.prototype.sign = function () {
        this.plugin.sign();
        this.currState = this.signState;
    };
    ;
    UploadFile.prototype.uploading = function () {
        this.button1.innerHTML = '正在上传，点击暂停';
        this.plugin.uploading();
        this.currState = this.uploadingState;
    };
    ;
    UploadFile.prototype.pause = function () {
        this.button1.innerHTML = '已暂停，点击继续上传';
        this.plugin.pause();
        this.currState = this.pauseState;
    };
    ;
    UploadFile.prototype.done = function () {
        this.button1.innerHTML = '上传完成';
        this.plugin.done();
        this.currState = this.doneState;
    };
    ;
    UploadFile.prototype.error = function () {
        this.button1.innerHTML = '上传失败';
        this.currState = this.errorState;
    };
    UploadFile.prototype.del = function () {
        this.plugin.del();
        this.dom.parentNode.removeChild(this.dom);
    };
    return UploadFile;
}());
var State = /** @class */ (function () {
    function State(uploadObj) {
        this.uploadObj = uploadObj;
    }
    return State;
}());
var SignState = /** @class */ (function (_super) {
    __extends(SignState, _super);
    function SignState(uploadObj) {
        return _super.call(this, uploadObj) || this;
    }
    SignState.prototype.clickHandler1 = function () {
        console.log('扫描中，点击无效...');
    };
    SignState.prototype.clickHandler2 = function () {
        console.log('文件正在上传中，不能删除');
    };
    return SignState;
}(State));
var UploadingState = /** @class */ (function (_super) {
    __extends(UploadingState, _super);
    function UploadingState(uploadObj) {
        return _super.call(this, uploadObj) || this;
    }
    UploadingState.prototype.clickHandler1 = function () {
        this.uploadObj.pause();
    };
    UploadingState.prototype.clickHandler2 = function () {
        console.log('文件正在上传中，不能删除');
    };
    return UploadingState;
}(State));
var PauseState = /** @class */ (function (_super) {
    __extends(PauseState, _super);
    function PauseState(uploadObj) {
        return _super.call(this, uploadObj) || this;
    }
    PauseState.prototype.clickHandler1 = function () {
        this.uploadObj.uploading();
    };
    PauseState.prototype.clickHandler2 = function () {
        this.uploadObj.del();
    };
    return PauseState;
}(State));
var DoneState = /** @class */ (function (_super) {
    __extends(DoneState, _super);
    function DoneState(uploadObj) {
        return _super.call(this, uploadObj) || this;
    }
    DoneState.prototype.clickHandler1 = function () {
        console.log('文件已完成上传, 点击无效');
    };
    DoneState.prototype.clickHandler2 = function () {
        this.uploadObj.del();
    };
    return DoneState;
}(State));
var ErrorState = /** @class */ (function (_super) {
    __extends(ErrorState, _super);
    function ErrorState(uploadObj) {
        return _super.call(this, uploadObj) || this;
    }
    ErrorState.prototype.clickHandler1 = function () {
        console.log('文件上传失败, 点击无效');
    };
    ErrorState.prototype.clickHandler2 = function () {
        this.uploadObj.del();
    };
    return ErrorState;
}(State));
var uploadObj = new UploadFile('JavaScript 设计模式与开发实践');
uploadObj.init();
window.upload = function (state) {
    uploadObj[state]();
};
window.upload('sign');
setTimeout(function () {
    window.upload('uploading'); // 1 秒后开始上传
}, 1000);
setTimeout(function () {
    window.upload('done'); // 5 秒后上传完成
}, 5000);
