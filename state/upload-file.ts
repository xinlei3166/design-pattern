(window as any).upload = function(state) {
  console.log(state) // 可能为sign、uploading、done、error
}

const plugin = (function() {
  const plugin = document.createElement('embed') as any
  plugin.style.display = 'none'
  plugin.type = 'application/txftn-webkit'
  plugin.sign = function() {
    console.log('开始文件扫描')
  }
  plugin.pause = function() {
    console.log('暂停文件上传')
  }
  plugin.uploading = function() {
    console.log('开始文件上传')
  }
  plugin.del = function() {
    console.log('删除文件上传')
  }
  plugin.done = function() {
    console.log('文件上传完成')
  }
  document.body.appendChild(plugin)
  return plugin
})()

interface IUploadFile {
  init(): void,

  bindEvent(): void,

  sign(): void,

  uploading(): void,

  pause(): void,

  done(): void,

  error(): void,

  del(): void
}

interface IState {
  uploadObj: IUploadFile,

  clickHandler1(): void,

  clickHandler2(): void
}

class UploadFile implements IUploadFile {
  plugin: any = plugin
  fileName: string
  button1: HTMLButtonElement = null
  button2: HTMLButtonElement = null
  signState: IState // 设置初始状态为waiting
  uploadingState: IState
  pauseState: IState
  doneState: IState
  errorState: IState
  currState: IState
  private dom: HTMLDivElement

  constructor(fileName: string) {
    this.fileName = fileName
    this.signState = new SignState(this) // 设置初始状态为waiting
    this.uploadingState = new UploadingState(this)
    this.pauseState = new PauseState(this)
    this.doneState = new DoneState(this)
    this.errorState = new ErrorState(this)
    this.currState = this.signState
  }

  init() {
    this.dom = document.createElement('div')
    this.dom.innerHTML = `
    <span>文件名称: ${this.fileName}</span>
    <button data-action="button1">扫描中</button>
    <button data-action="button2">删除</button>`
    document.body.appendChild(this.dom)
    this.button1 = this.dom.querySelector('[data-action="button1"]') // 第一个按钮
    this.button2 = this.dom.querySelector('[data-action="button2"]') // 第二个按钮
    this.bindEvent()
  }

  bindEvent() {
    const self = this
    this.button1.onclick = function() {
      self.currState.clickHandler1()
    }
    this.button2.onclick = function() {
      self.currState.clickHandler2()
    }
  };

  sign() {
    this.plugin.sign()
    this.currState = this.signState
  };

  uploading() {
    this.button1.innerHTML = '正在上传，点击暂停'
    this.plugin.uploading()
    this.currState = this.uploadingState
  };

  pause() {
    this.button1.innerHTML = '已暂停，点击继续上传'
    this.plugin.pause()
    this.currState = this.pauseState
  };

  done() {
    this.button1.innerHTML = '上传完成'
    this.plugin.done()
    this.currState = this.doneState
  };

  error() {
    this.button1.innerHTML = '上传失败'
    this.currState = this.errorState
  }

  del() {
    this.plugin.del()
    this.dom.parentNode.removeChild(this.dom)
  }
}

abstract class State implements IState {
  uploadObj: IUploadFile

  protected constructor(uploadObj: IUploadFile) {
    this.uploadObj = uploadObj
  }

  abstract clickHandler1()

  abstract clickHandler2()
}

class SignState extends State {
  constructor(uploadObj: IUploadFile) {
    super(uploadObj)
  }

  clickHandler1() {
    console.log('扫描中，点击无效...')
  }

  clickHandler2() {
    console.log('文件正在上传中，不能删除')
  }
}

class UploadingState extends State {
  constructor(uploadObj: IUploadFile) {
    super(uploadObj)
  }

  clickHandler1() {
    this.uploadObj.pause()
  }

  clickHandler2() {
    console.log('文件正在上传中，不能删除')
  }
}

class PauseState extends State {
  constructor(uploadObj: IUploadFile) {
    super(uploadObj)
  }

  clickHandler1() {
    this.uploadObj.uploading()
  }

  clickHandler2() {
    this.uploadObj.del()
  }
}

class DoneState extends State {
  constructor(uploadObj: IUploadFile) {
    super(uploadObj)
  }

  clickHandler1() {
    console.log('文件已完成上传, 点击无效')
  }

  clickHandler2() {
    this.uploadObj.del()
  }
}

class ErrorState extends State {
  constructor(uploadObj: IUploadFile) {
    super(uploadObj)
  }

  clickHandler1() {
    console.log('文件上传失败, 点击无效')
  }

  clickHandler2() {
    this.uploadObj.del()
  }
}


const uploadObj = new UploadFile('JavaScript 设计模式与开发实践')
uploadObj.init();
(window as any).upload = function(state) {
  uploadObj[state]()
};
(window as any).upload('sign')

setTimeout(function() {
  (window as any).upload('uploading') // 1 秒后开始上传
}, 1000)

setTimeout(function() {
  (window as any).upload('done') // 5 秒后上传完成
}, 5000)
