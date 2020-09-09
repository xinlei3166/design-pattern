function atomDecorator(target, name, descriptor) {
  console.log(target, name, descriptor)
  let originalMethod = descriptor.value
  descriptor.value = function(...args) {
    console.log( '发射原子弹' )
    return originalMethod.apply(this, args)
  }
  return descriptor
}

class Plane {
  @atomDecorator
  fire() {
    console.log( '发射普通子弹' );
  }
}

const plane = new Plane()
plane.fire()
