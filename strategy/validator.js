var strategys = {
  isNonEmpty: function(value, errorMsg) {
    if (value === '') {
      return errorMsg
    }
  },
  minLength: function(value, length, errorMsg) {
    if (value.length < length) {
      return errorMsg
    }
  },
  isMobile: function(value, errorMsg) { // 手机号码格式
    if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
      return errorMsg
    }
  }
}

var Validator = function() {
  this.cache = []
}

Validator.prototype.add = function(dom, rules) {
  var self = this
  for (var i = 0, rule; rule = rules[i++];) {
    (function(rule) {
      var ary = rule.strategy.split(':')
      var errorMsg = rule.errorMsg
      self.cache.push(function() {
        var strategy = ary.shift()
        ary.unshift(dom.value)
        ary.push(errorMsg)
        return strategys[strategy].apply(dom, ary)
      })
    })(rule)
  }
}

Validator.prototype.start = function() {
  for (var i = 0, validatorFunc; validatorFunc = this.cache[i++];) {
    var msg = validatorFunc()
    if (msg) { return msg }
  }
}

