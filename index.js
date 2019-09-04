function produceDrivingRange(drivingRange) {
  return function(startBlock, endBlock) {
    const distance = Math.abs(parseInt(startBlock) - parseInt(endBlock));
    if (drivingRange - distance >= 0) {
      return `within range by ${drivingRange - distance}`;
    } else {
      return `${distance - drivingRange} blocks out of range`;
    }
  }
}

function produceTipCalculator(percent) {
  return function(cost) {
    return percent * cost;
  }
}

function createDriver() {
  let driverId = 0;
  // return the class
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  };
}
