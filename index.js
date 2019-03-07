function produceDrivingRange(range) {
  return function(start, end) {
    const distance = parseInt(start, 10) - parseInt(end, 10);
    const rangeDistance = range - Math.abs(distance)
    if (rangeDistance > 0) {
      return `within range by ${rangeDistance}`;
    } else {
      return `${Math.abs(rangeDistance)} blocks out of range`
    }
  }
}

function produceTipCalculator(tipPercentage) {
  return function(fare) {
    return fare * tipPercentage
  }
}

function createDriver() {
  let driverId = 0;

  return class Driver {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  }
}
