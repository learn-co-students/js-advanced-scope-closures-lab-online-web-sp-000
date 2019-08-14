function produceDrivingRange(range) {
  return function (start, end) {
    const diff = end.split("t")[0] - start.split("t")[0]
    const abs = Math.abs(diff - range)
    if (diff > range) {
      return `${abs} blocks out of range`
    } else {
      return `within range by ${abs}`
    }
  }
}

function produceTipCalculator(tip) {
  return function (amount) {
    return tip * amount
  }
}

function createDriver() {
  driverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }

  }
}
