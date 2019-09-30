function produceDrivingRange(range) {
  return function(start, end) {
    const distance = Math.abs(start.slice(0, start.length - 2).toString() - end.slice(0, end.length - 2).toString());
    const difference = range - distance;
    return difference >= 0 ? `within range by ${difference}` : `${Math.abs(difference)} blocks out of range`;
  }
}

function produceTipCalculator(percent) {
  return function(fare) {
    return percent * fare;
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