interface Command {
  execute: () => void
}

// @ts-ignore
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

// 打开空调
class OpenAcCommand implements Command {
  execute() {
    console.log('打开空调')
  }
}

// 打开电视和音响
class OpenTvCommand implements Command {
  execute() {
    console.log('打开电视')
  }
}

class OpenSoundCommand implements Command {
  execute() {
    console.log('打开音响')
  }
}

const macroCommand1 = new MacroCommand()
macroCommand1.add(new OpenTvCommand())
macroCommand1.add(new OpenSoundCommand())

// 关门、打开电脑和打登录QQ的命令
class CloseDoorCommand implements Command {
  execute() {
    console.log('关门')
  }
}

class OpenPcCommand implements Command {
  execute() {
    console.log('开电脑')
  }
}

class OpenQQCommand implements Command {
  execute() {
    console.log('登录QQ')
  }
}

const macroCommand2 = new MacroCommand()
macroCommand2.add(new CloseDoorCommand())
macroCommand2.add(new OpenPcCommand())
macroCommand2.add(new OpenQQCommand())

// 所有命令组合为超级命令
const macroCommand = new MacroCommand()
macroCommand.add(new OpenAcCommand())
macroCommand.add(macroCommand1)
macroCommand.add(macroCommand2)
