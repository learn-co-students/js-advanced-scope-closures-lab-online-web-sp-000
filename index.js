function produceDrivingRange(blockRange) {
    return function(num1, num2) {
      let realNum1 = Number(num1.slice(0, -2));
      let realNum2 = Number(num2.slice(0, -2));
      let range =  Math.abs(realNum2 - realNum1)
      if (blockRange >= range) {
        return `within range by ${blockRange - range}`
      }
      else {
        return `${range - blockRange} blocks out of range`
    }
  }
}


function produceTipCalculator(percentage) {
  return function(rate) {
    return rate * percentage
  }
}

function createDriver() {
  let driverId = 0;
  return class Driver {
    constructor(name) {
      this.id = ++driverId
      this.name = name
    }
  }
}
