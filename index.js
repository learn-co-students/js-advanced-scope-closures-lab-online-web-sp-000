function produceDrivingRange(blockRange) {
  return function(begin, destination) {
    const distance = Math.abs(parseInt(destination) - parseInt(begin));
    const blockRangeMinusDistance = Math.abs(blockRange - distance);
    if(distance <= blockRange) {
      return `within range by ${blockRangeMinusDistance}`;
    } else {
      return `${blockRangeMinusDistance} blocks out of range`;
    }
  }
}

function produceTipCalculator(tipPercent) {
  return function(total) {
    return total * tipPercent;
  }
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
