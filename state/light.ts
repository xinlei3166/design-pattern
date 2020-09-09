interface ILightState {
  light: ILight,

  buttonWasPressed(): void,
}

interface ILight {
  offLightState?: ILightState,
  weakLightState?: ILightState,
  strongLightState?: ILightState,

  init(): void,

  setState(state: ILightState): void
}

class OffLightState implements ILightState {
  light: ILight

  constructor(light: ILight) {
    this.light = light
  }

  buttonWasPressed() {
    console.log('弱光') // offLightState 对应的行为
    this.light.setState(this.light.weakLightState) // 切换状态到weakLightState
  }
}

class WeakLightState implements ILightState {
  light: ILight

  constructor(light: ILight) {
    this.light = light
  }

  buttonWasPressed() {
    console.log('强光') // weakLightState 对应的行为
    this.light.setState(this.light.strongLightState) // 切换状态到strongLightState
  }
}

class StrongLightState implements ILightState {
  light: ILight

  constructor(light: ILight) {
    this.light = light
  }

  buttonWasPressed() {
    console.log('关灯') // strongLightState 对应的行为
    this.light.setState(this.light.offLightState) // 切换状态到offLightState
  }
}

class Light implements ILight {
  offLightState: ILightState
  weakLightState: ILightState
  strongLightState: ILightState
  private button: HTMLButtonElement
  private currState: ILightState

  constructor() {
    this.offLightState = new OffLightState(this)
    this.weakLightState = new WeakLightState(this)
    this.strongLightState = new StrongLightState(this)
    this.button = null
  }

  init() {
    const button = document.createElement('button'),
      self = this
    this.button = document.body.appendChild(button)
    this.button.innerHTML = '开关'
    this.currState = this.offLightState // 设置当前状态
    this.button.onclick = function() {
      self.currState.buttonWasPressed()
    }
  }

  setState(state) {
    this.currState = state
  };
}

const light = new Light()
light.init()
