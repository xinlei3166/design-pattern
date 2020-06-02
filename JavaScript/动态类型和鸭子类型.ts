const duck = {
  duckSinging: function() {
    console.log('嘎嘎嘎')
  }
}

const chicken = {
  duckSinging: function() {
    console.log('嘎嘎嘎')
  }
}

let choir = []

function joinChoir(animal) {
  if (animal && typeof animal.duckSinging === 'function') {
    choir.push(animal)
    console.log('欢迎加入合唱团')
    console.log('合唱团已有成员：' + choir.length)
  }
}

joinChoir(duck)
joinChoir(chicken)
