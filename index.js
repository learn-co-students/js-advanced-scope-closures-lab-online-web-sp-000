
function produceDrivingRange(blockRange) {
  return function(beg, end) {
    let totalDistance = Math.abs(parseInt(end) - parseInt(beg));
    let withinRange = blockRange - totalDistance;
    if (withinRange > 0) {
      return `within range by ${withinRange}`;
    }
    else {
      return `${Math.abs(withinRange)} blocks out of range`;
    };
  };
}

function produceTipCalculator(pct) {
  return function(fare) {
    return pct*fare;
  }
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.id += driverId;
      this.name = name;
    }
  }
}
