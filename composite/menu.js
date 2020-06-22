// @ts-ignore
var MacroCommand = /** @class */ (function () {
    function MacroCommand() {
        this.commandsList = [];
    }
    MacroCommand.prototype.add = function (command) {
        this.commandsList.push(command);
    };
    MacroCommand.prototype.execute = function () {
        for (var _i = 0, _a = this.commandsList; _i < _a.length; _i++) {
            var command = _a[_i];
            command.execute();
        }
    };
    return MacroCommand;
}());
// 打开空调
var OpenAcCommand = /** @class */ (function () {
    function OpenAcCommand() {
    }
    OpenAcCommand.prototype.execute = function () {
        console.log('打开空调');
    };
    return OpenAcCommand;
}());
// 打开电视和音响
var OpenTvCommand = /** @class */ (function () {
    function OpenTvCommand() {
    }
    OpenTvCommand.prototype.execute = function () {
        console.log('打开电视');
    };
    return OpenTvCommand;
}());
var OpenSoundCommand = /** @class */ (function () {
    function OpenSoundCommand() {
    }
    OpenSoundCommand.prototype.execute = function () {
        console.log('打开音响');
    };
    return OpenSoundCommand;
}());
var macroCommand1 = new MacroCommand();
macroCommand1.add(new OpenTvCommand());
macroCommand1.add(new OpenSoundCommand());
// 关门、打开电脑和打登录QQ的命令
var CloseDoorCommand = /** @class */ (function () {
    function CloseDoorCommand() {
    }
    CloseDoorCommand.prototype.execute = function () {
        console.log('关门');
    };
    return CloseDoorCommand;
}());
var OpenPcCommand = /** @class */ (function () {
    function OpenPcCommand() {
    }
    OpenPcCommand.prototype.execute = function () {
        console.log('开电脑');
    };
    return OpenPcCommand;
}());
var OpenQQCommand = /** @class */ (function () {
    function OpenQQCommand() {
    }
    OpenQQCommand.prototype.execute = function () {
        console.log('登录QQ');
    };
    return OpenQQCommand;
}());
var macroCommand2 = new MacroCommand();
macroCommand2.add(new CloseDoorCommand());
macroCommand2.add(new OpenPcCommand());
macroCommand2.add(new OpenQQCommand());
// 所有命令组合为超级命令
var macroCommand = new MacroCommand();
macroCommand.add(new OpenAcCommand());
macroCommand.add(macroCommand1);
macroCommand.add(macroCommand2);
