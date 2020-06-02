class Storage1 {
  static instance: Storage1

  static getInstance() {
    if (!Storage1.instance) {
      Storage1.instance = new Storage1()
    }
    return Storage1.instance
  }

  getItem(key: string) {
    return localStorage.getItem(key)
  }

  setItem(key: string, value: string) {
    return localStorage.setItem(key, value)
  }
}

const st1 = Storage1.getInstance()
const st2 = Storage1.getInstance()

console.log(st1 === st2)
