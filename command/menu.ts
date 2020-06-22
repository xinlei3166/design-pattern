type Receiver = any

class MenuBar {
  refresh() {
    console.log('刷新菜单目录')
  }
}

class SubMenu {
  add() {
    console.log('增加子菜单')
  }

  del() {
    console.log('删除子菜单')
  }
}

interface Command {
  execute: () => void
}

class RefreshMenuBarCommand implements Command {
  private receiver: Receiver

  constructor(receiver: Receiver) {
    this.receiver = receiver
  }

  execute() {
    this.receiver.refresh()
  }
}

class AddSubMenuCommand implements Command {
  private receiver: Receiver

  constructor(receiver: Receiver) {
    this.receiver = receiver
  }

  execute() {
    this.receiver.add()
  }
}

class DelSubMenuCommand implements Command {
  private receiver: Receiver

  constructor(receiver: Receiver) {
    this.receiver = receiver
  }

  execute() {
    this.receiver.del()
  }
}

// 宏命令
class MacroCommand implements Command {
  commandsList: Command[] = []

  add(command: Command) {
    this.commandsList.push(command)
  }

  execute() {
    for (const command of this.commandsList) {
      command.execute()
    }
  }
}

/*const macroCommand = new MacroCommand()
const refreshMenuBarCommand = new RefreshMenuBarCommand(new MenuBar())
macroCommand.add(refreshMenuBarCommand)
macroCommand.add(refreshMenuBarCommand)
macroCommand.add(refreshMenuBarCommand)
macroCommand.execute()*/

const setCommand = function(button, command) {
  button.onclick = function() {
    command.execute()
  }
}

