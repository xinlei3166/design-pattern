var Flower = function() {}
var xiaoming = {
  sendFlower: function(target) {
    var flower = new Flower()
    target.receiveFlower(flower)
  }
}
var B = {
  receiveFlower: function(flower) {
    A.listenGoodMood(function() {
      A.receiveFlower(flower)
    })
  }
}
var A = {
  receiveFlower: function(flower) {
    console.log('收到花 ' + flower)
  },
  listenGoodMood: function(fn) {
    setTimeout(function() {
      fn()
    }, 3000)
  }
}

xiaoming.sendFlower(B)
