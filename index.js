function produceDrivingRange(blockRange) {
  return function (pointA, pointB) {
    pointA = pointA.match(/\d+/);
    pointB = pointB.match(/\d+/);
    const distance = Math.abs(pointA - pointB);
    if (distance <= blockRange) {
      return `within range by ${blockRange - distance}`;
    } else {
      return `${distance - blockRange} blocks out of range`;
    }
  }
}

function produceTipCalculator(percentTip) {
  return function (fare) {
    return percentTip * fare;
  }
}

function createDriver() {
  let driverId = 0;
  return class Driver {
    constructor(name) {
      this.id = ++driverId;
      this.name = name;
    }
  }
}
