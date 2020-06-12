function isLength(value) {
  return typeof value === 'number' && value > -1 && value % 1 === 0
}

function isArrayLike(value) {
  return value != null && typeof value != 'function' && isLength(value.length)
}

function each(obj, callback) {
  var value, i = 0, length = obj.length, isArray = isArrayLike(obj)

  if (isArray) {
    for (; i < length; i++) {
      value = callback.call(obj[i], i, obj[i])
      if (value === false) {
        break
      }
    }
  } else {
    for (i in obj) {
      value = callback.call(obj[i], i, obj[i])
      if (value === false) {
        break
      }
    }
  }

  return obj
}

each([1, 2, 3], function(i, v) {
  console.log(i, v)
})

each({ 'a': 1, 'b': 2 }, function(i, v) {
  console.log(i, v)
})

function reverseEach(ary, callback) {
  for (var l = ary.length - 1; l >= 0; l--) {
    callback(l, ary[l])
  }
}

reverseEach([1,2,3], function(i, v) {
  console.log(i, v)
})

