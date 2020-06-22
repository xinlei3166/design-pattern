var MenuBar = /** @class */ (function () {
    function MenuBar() {
    }
    MenuBar.prototype.refresh = function () {
        console.log('刷新菜单目录');
    };
    return MenuBar;
}());
var SubMenu = /** @class */ (function () {
    function SubMenu() {
    }
    SubMenu.prototype.add = function () {
        console.log('增加子菜单');
    };
    SubMenu.prototype.del = function () {
        console.log('删除子菜单');
    };
    return SubMenu;
}());
var RefreshMenuBarCommand = /** @class */ (function () {
    function RefreshMenuBarCommand(receiver) {
        this.receiver = receiver;
    }
    RefreshMenuBarCommand.prototype.execute = function () {
        this.receiver.refresh();
    };
    return RefreshMenuBarCommand;
}());
var AddSubMenuCommand = /** @class */ (function () {
    function AddSubMenuCommand(receiver) {
        this.receiver = receiver;
    }
    AddSubMenuCommand.prototype.execute = function () {
        this.receiver.add();
    };
    return AddSubMenuCommand;
}());
var DelSubMenuCommand = /** @class */ (function () {
    function DelSubMenuCommand(receiver) {
        this.receiver = receiver;
    }
    DelSubMenuCommand.prototype.execute = function () {
        this.receiver.del();
    };
    return DelSubMenuCommand;
}());
// 宏命令
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
/*const macroCommand = new MacroCommand()
const refreshMenuBarCommand = new RefreshMenuBarCommand(new MenuBar())
macroCommand.add(refreshMenuBarCommand)
macroCommand.add(refreshMenuBarCommand)
macroCommand.add(refreshMenuBarCommand)
macroCommand.execute()*/
var setCommand = function (button, command) {
    button.onclick = function () {
        command.execute();
    };
};
