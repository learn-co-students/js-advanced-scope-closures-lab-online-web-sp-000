function produceDrivingRange(blockRange) {
  return function(start, end) {
    let startBlock = parseInt(start);
    let endBlock = parseInt(end);
    let distance = Math.abs(endBlock - startBlock);
    if (distance > blockRange) {
      return `${distance - blockRange} blocks out of range`;
    } else {
      return `within range by ${distance}`;
    }
  }
}

function produceTipCalculator(tipPercent) {
  return function(fare) {
    return fare * tipPercent;
  };
}

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.id = ++driverId;
      this.name = name;
    }
  }
}