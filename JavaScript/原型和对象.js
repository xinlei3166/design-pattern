function Plane() {
  this.blood = 100
  this.attackLevel = 1
  this.defenseLevel = 1
}

let plane = new Plane()
plane.blood = 500
plane.attackLevel = 10
plane.defenseLevel = 7

let clonePlane = Object.create(plane)
console.log(clonePlane)
console.log(clonePlane.__proto__)
