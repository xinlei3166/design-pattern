var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
        // handlers是一个map，用于存储事件与回调之间的对应关系
        this.handlers = {};
    }
    EventEmitter.prototype.on = function (eventName, cb) {
        if (!this.handlers[eventName]) {
            this.handlers[eventName] = [];
        }
        this.handlers[eventName].push(cb);
    };
    EventEmitter.prototype.emit = function (eventName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.handlers[eventName]) {
            this.handlers[eventName].forEach(function (cb) {
                cb.apply(void 0, args);
            });
        }
    };
    EventEmitter.prototype.off = function (eventName, cb) {
        var index = this.handlers[eventName].findIndex(function (x) { return x === cb; });
        if (index !== -1) {
            this.handlers[eventName].splice(index, 1);
        }
    };
    EventEmitter.prototype.once = function (eventName, cb) {
        var _this = this;
        var wrap = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            cb.apply(void 0, args);
            _this.off(eventName, wrap);
        };
        this.on(eventName, wrap);
    };
    return EventEmitter;
}());
var emitter = new EventEmitter();
emitter.on('show', function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log(args);
});
emitter.emit('show', 'a', 'b', 'c');
console.log(emitter.handlers['show']);
emitter.once('only-show', function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log(args);
});
emitter.emit('only-show', 'only-show');
console.log(emitter.handlers['only-show']);
