function makeSound(animal) {
  animal.sound()
}

class Duck {
  sound() {
    console.log( '嘎嘎嘎' )
  }
}

class Chicken {
  sound() {
    console.log( '咯咯咯' )
  }
}

class Dog {
  sound() {
    console.log( '汪汪汪' )
  }
}

makeSound(new Duck())
makeSound(new Chicken())
makeSound(new Dog())
