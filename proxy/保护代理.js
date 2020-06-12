var Flower = function(hasCar = false) {
  this.hasCar = hasCar
}
var xiaoming = {
  sendFlower: function(target) {
    var flower = new Flower()
    target.receiveFlower(flower)
  }
}
var B = {
  receiveFlower: function(flower) {
    if (flower.hasCar) {
      A.receiveFlower(flower)
    } else {
      console.log('一边去')
    }
  }
}
var A = {
  receiveFlower: function(flower) {
    console.log('收到花 ' + flower)
  }
}

xiaoming.sendFlower(B)
