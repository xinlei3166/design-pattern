var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function funcDecorator(target, name, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        console.log('我是Func的装饰器逻辑');
        return originalMethod.apply(this, arguments);
    };
    return descriptor;
}
var Button = /** @class */ (function () {
    function Button() {
    }
    Button.prototype.onClick = function () {
        console.log('我是Func的原有逻辑');
    };
    __decorate([
        funcDecorator
    ], Button.prototype, "onClick");
    return Button;
}());
// 验证装饰器是否生效
var button = new Button();
button.onClick();
