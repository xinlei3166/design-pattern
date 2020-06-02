// 例子1
function makeSound(animal) {
  animal.sound()
}

const Duck = function() {
  //
}
Duck.prototype.sound = function() {
  console.log('咯咯咯')
}

const Chicken = function() {
  //
}
Chicken.prototype.sound = function() {
  console.log('嘎嘎嘎')
}

makeSound(new Duck())
makeSound(new Chicken())


// 例子2
const googleMap = {
  show: function() {
    console.log('开始渲染谷歌地图')
  }
}
const baiduMap = {
  show: function() {
    console.log('开始渲染百度地图')
  }
}

const renderMap = function(map) {
  if (map.show instanceof Function) {
    map.show()
  }
}

renderMap(baiduMap)
renderMap(googleMap)
