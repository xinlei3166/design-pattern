var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var Event1 = /** @class */ (function () {
    function Event1() {
        this.namespaceCache = {};
        return this.getInstance();
    }
    Event1.prototype.getInstance = function () {
        if (!Event1.instance) {
            Event1.instance = this;
        }
        return Event1.instance;
    };
    Event1.prototype.create = function (namespace) {
        if (namespace === void 0) { namespace = 'default'; }
        return new Namespace(this, namespace);
    };
    Event1.prototype.emit = function (key) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var event = this.create();
        event.emit.apply(event, __spreadArrays([key], args));
    };
    Event1.prototype.on = function (key, cb) {
        var event = this.create();
        event.on(key, cb);
    };
    Event1.prototype.once = function (key, cb) {
        var event = this.create();
        event.once(key, cb);
    };
    Event1.prototype.off = function (key, cb) {
        var event = this.create();
        event.off(key, cb);
    };
    return Event1;
}());
var Namespace = /** @class */ (function () {
    function Namespace(event, namespace) {
        this.subscribe = {};
        this.offlineStack = [];
        this.event = event;
        this.namespace = namespace;
        return this.getInstance();
    }
    Namespace.prototype.getInstance = function () {
        return this.event.namespaceCache[this.namespace] ? this.event.namespaceCache[this.namespace] : (this.event.namespaceCache[this.namespace] = this);
    };
    Namespace.prototype.each = function (cbs) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        for (var i = 0, l = cbs.length; i < l; i++) {
            var cb = cbs[i];
            cb.apply(void 0, args);
        }
    };
    Namespace.prototype.emit = function (key) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this._emit.apply(this, __spreadArrays([key], args));
    };
    Namespace.prototype._emit = function (key) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var self = this;
        var cb = function () {
            var cbs = self.subscribe[key];
            if (!cbs || !cbs.length) {
                return;
            }
            return self.each.apply(self, __spreadArrays([cbs], args));
        };
        if (this.offlineStack) {
            return this.offlineStack.push(cb);
        }
        return cb();
    };
    Namespace.prototype.on = function (key, cb) {
        this._on(key, cb);
        if (this.offlineStack === null) {
            return;
        }
        this.each(this.offlineStack);
        this.offlineStack = null;
    };
    Namespace.prototype._on = function (key, cb) {
        if (!this.subscribe[key]) {
            this.subscribe[key] = [];
        }
        this.subscribe[key].push(cb);
    };
    Namespace.prototype.once = function (key, cb) {
        var _this = this;
        var wrap = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            cb.apply(void 0, args);
            _this.off(key, wrap);
        };
        this.on(key, wrap);
    };
    Namespace.prototype.off = function (key, cb) {
        this._off(key, cb);
    };
    Namespace.prototype._off = function (key, cb) {
        if (this.subscribe[key]) {
            if (cb) {
                for (var i = this.subscribe[key].length; i >= 0; i--) {
                    if (this.subscribe[key][i] === cb) {
                        this.subscribe[key].splice(i, 1);
                    }
                }
            }
            else {
                this.subscribe[key] = [];
            }
        }
    };
    return Namespace;
}());
/************** 先发布后订阅 ********************/
var event1 = new Event1();
event1.emit('click', 1, 2);
event1.on('click', function (a, b) {
    console.log(a, b); // 输出：1, 2
});
/************** 使用命名空间 ********************/
var namespace1 = event1.create('namespace1');
var namespace2 = event1.create('namespace2');
namespace1.on('click', function (a) {
    console.log(a); // 输出：1
});
namespace1.emit('click', 1);
namespace2.once('click', function (a) {
    console.log(a); // 输出：2
});
namespace2.emit('click', 12222);
namespace2.off('click');
namespace2.emit('click', 1222);
