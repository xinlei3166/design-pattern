class Storage3 {
  static instance: Storage3

  constructor() {
    if (!Storage3.instance) {
      Storage3.instance = this
    }
    return Storage3.instance
  }

  getItem(key: string) {
    return localStorage.getItem(key)
  }

  setItem(key: string, value: string) {
    return localStorage.setItem(key, value)
  }
}

const sc1 = new Storage3()
const sc2 = new Storage3()

console.log(sc1 === sc2)
