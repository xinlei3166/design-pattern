const validators = {
  required: function (value, errorMsg) {
    const errors = [null, undefined, '']
    if (errors.includes(value)) {
      return errorMsg
    }
  },
  minLength: function (value, length, errorMsg) { // minLength:6
    if (value.length < length) {
      return errorMsg
    }
  },
  maxLength: function (value, length, errorMsg) { // maxLength:12
    if (value.length > length) {
      return errorMsg
    }
  },
  mobile: function (value, errorMsg) { // 手机号码格式
    if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
      return errorMsg
    }
  }
}

const Validator = function () {
  this.cache = []
}

Validator.prototype.add = function (value, rules) {
  let self = this
  for (let rule of rules) {
    (function (rule) {
      let errorMsg = rule.errorMsg
      if (typeof rule.rule === 'function') {
        self.cache.push(function () {
          if (rule.rule(value, errorMsg)) {
            return errorMsg
          }
        })
      } else {
        let ary = rule.rule.split(':')
        self.cache.push(function () {
          let rule = ary.shift()
          ary.unshift(value)
          ary.push(errorMsg)
          return validators[rule].apply(null, ary)
        })
      }
    })(rule)
  }
}

Validator.prototype.start = function () {
  for (let validate of this.cache) {
    let errorMsg = validate()
    if (errorMsg) { return errorMsg }
  }
}

const v = new Validator()
const obj = { a: '1', b: 'a'}
v.add(obj.a, [{ rule: 'required', errorMsg: 'a不能为空'}])
v.add(obj.b, [{ rule: (value, errorMsg) => {
  return typeof value !== 'number'
}, errorMsg: 'b不是数字'}])
console.log(v.start())
