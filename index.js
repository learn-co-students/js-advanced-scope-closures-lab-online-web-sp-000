function produceDrivingRange(blockRange) {
  return function(street1, street2) {
    let value = Number(street2.slice(0,2)) - Number(street1.slice(0,2))
    if (value <= blockRange) {
      return `within range by ${blockRange - value}`
    }
    else {
      return `${value - blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator(percent) {
  return function(fare) {
    return fare * percent
  }
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  };
}
