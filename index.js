function produceDrivingRange(number) {
  return function distanceBlocks(arg1, arg2) {
    let n = Math.abs(parseInt(arg1) - parseInt(arg2));
    if (n > number) {
      return `${n - number} blocks out of range`
    }
    else {
      return `within range by ${number - n}`
    }
  }
}

function produceTipCalculator(percent) {
  return function tipAmount(fare) {
    return percent * fare
  }
}

function createDriver() {
  let driverId = 0;
  return class Driver {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
