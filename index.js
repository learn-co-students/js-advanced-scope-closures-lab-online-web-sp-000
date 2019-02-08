function produceDrivingRange(blockRange) {
  return function(startingBlock, endingBlock) {
    const startingBlockInt = parseInt(startingBlock)
    const endingBlockInt = parseInt(endingBlock)
    const blockDifference = Math.abs((endingBlockInt - startingBlockInt) - blockRange)
    if (endingBlockInt - startingBlockInt < blockRange) {
      return `within range by ${blockDifference}`;
    }
    else {
      return `${blockDifference} blocks out of range`;
    }
  }
}

function produceTipCalculator(percentage) {
  return function(fare) {
     return percentage * fare;
  }
}

let driverId = 0

function createDriver() {
  return class Driver {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  }
}
