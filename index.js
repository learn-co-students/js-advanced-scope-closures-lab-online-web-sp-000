function produceDrivingRange(num) {
  return (start, end) => {
    const dist = Math.abs(start.slice(0, 2) - end.slice(0, 2));
    return dist > num ? `${dist - num} blocks out of range` : `within range by ${num - dist}`;
  }
}

function produceTipCalculator(num) {
  return fare => fare * num;
}

function createDriver() {
  let driverId = 0;
  return class Driver {
    constructor (name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
