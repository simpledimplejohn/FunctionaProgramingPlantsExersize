// using classic oop
// methods are not reusuable
// functional side effect of methods--they are changing plant state

class Plant {
  constructor() {
    this.water = 0;
    this.soil = 0;
    this.light = 0;
  }

  hydrate() {
    this.water ++
  }

  feed() {
    this.soil ++
  }

  giveLight() {
    this.light ++
  }
}


// testing without jest
let newPlant = new Plant();

console.log(newPlant.water, "[0]")
newPlant.hydrate()
console.log(newPlant.water, "[1]")
newPlant.hydrate()
newPlant.hydrate()
newPlant.hydrate()
console.log(newPlant.water, "[4]")