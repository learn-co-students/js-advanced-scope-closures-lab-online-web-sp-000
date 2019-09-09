function produceDrivingRange(blockRange) {
  return function(starting, ending) {
    let start = parseInt(starting, 10);
    let end = parseInt(ending, 10);

    if (blockRange > (end - start)) {
      return `within range by ${blockRange - (end - start)}`;
    } else {
      return `${(end - start) - blockRange} blocks out of range`;
    }
  }
}

function produceTipCalculator(percentage) {
  return function(fare) {
    return fare * percentage;
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
