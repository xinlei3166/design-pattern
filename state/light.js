var OffLightState = /** @class */ (function () {
    function OffLightState(light) {
        this.light = light;
    }
    OffLightState.prototype.buttonWasPressed = function () {
        console.log('弱光'); // offLightState 对应的行为
        this.light.setState(this.light.weakLightState); // 切换状态到weakLightState
    };
    return OffLightState;
}());
var WeakLightState = /** @class */ (function () {
    function WeakLightState(light) {
        this.light = light;
    }
    WeakLightState.prototype.buttonWasPressed = function () {
        console.log('强光'); // weakLightState 对应的行为
        this.light.setState(this.light.strongLightState); // 切换状态到strongLightState
    };
    return WeakLightState;
}());
var StrongLightState = /** @class */ (function () {
    function StrongLightState(light) {
        this.light = light;
    }
    StrongLightState.prototype.buttonWasPressed = function () {
        console.log('关灯'); // strongLightState 对应的行为
        this.light.setState(this.light.offLightState); // 切换状态到offLightState
    };
    return StrongLightState;
}());
var Light = /** @class */ (function () {
    function Light() {
        this.offLightState = new OffLightState(this);
        this.weakLightState = new WeakLightState(this);
        this.strongLightState = new StrongLightState(this);
        this.button = null;
    }
    Light.prototype.init = function () {
        var button = document.createElement('button'), self = this;
        this.button = document.body.appendChild(button);
        this.button.innerHTML = '开关';
        this.currState = this.offLightState; // 设置当前状态
        this.button.onclick = function () {
            self.currState.buttonWasPressed();
        };
    };
    Light.prototype.setState = function (state) {
        this.currState = state;
    };
    ;
    return Light;
}());
var light = new Light();
light.init();
