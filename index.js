function produceDrivingRange(range) {
  return function(start, end) {
    let s = parseInt(start);
    let e = parseInt(end);
    return (e-s > range) ? `${e-s-range} blocks out of range` : `within range by ${Math.abs(e-s-range)}`;
  }
}

function produceTipCalculator(tip) {
  return function (total) {
    return total * tip;
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
