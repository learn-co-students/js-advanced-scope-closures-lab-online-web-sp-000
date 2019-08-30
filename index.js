function produceDrivingRange (blockRange ) {
  return function(a,b){
    let aInteger = parseInt(a);
    let bInteger = parseInt(b);
    let distance = Math.abs(bInteger - aInteger);
    let diff = blockRange - distance;
    let diffReturn = Math.abs(diff);

    if (diff > 0) {
      return `within range by ${diff}`
    }
    else {
      return `${diffReturn} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage) {
  return function(amount) {
    return amount * percentage
  }
}

function createDriver() {
  let driverId = 0
  return class {
    constructor(name) {
      this.id = ++driverId
      this.name = name
    }
  }
}
