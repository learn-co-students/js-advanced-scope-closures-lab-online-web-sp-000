function produceDrivingRange(blockRange) {
  return function(firstBlock, secondBlock) {
    const first = parseInt(firstBlock);
    const second = parseInt(secondBlock);
    let result = 0;

    first >= second ? result = first - second : result = second - first;

    if (result <= blockRange) {
      return `within range by ${blockRange - result}`;
    } else {
      return `${result - blockRange} blocks out of range`;
    }
  }
}

function produceTipCalculator(tipRate) {
  return function(tripFare) {
    return tripFare * tipRate;
  }
}

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
