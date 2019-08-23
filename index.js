function produceDrivingRange(blockRange) {
  return function(start, end) {
    let tripBlocks = Math.abs(end.slice(0, 2) - start.slice(0, 2));
    let leftoverRange = blockRange - tripBlocks;
    if (leftoverRange < 0) {
      return `${Math.abs(leftoverRange)} blocks out of range`
    } else {
      return `within range by ${leftoverRange}`
    }
  }
}

function produceTipCalculator(percentage) {
  return function(fare) {
    return fare * percentage
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
