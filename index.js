function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    const regex = /\d/g;
    let num1 = parseInt(startBlock.match(regex).join(''));
    let num2 = parseInt(endBlock.match(regex).join(''));
    if(Math.abs(num1 - num2) < blockRange) {
      return `within range by ${Math.abs(num1 - num2)}`;
    } else {
      return `${Math.abs(blockRange - Math.abs(num1 - num2))} blocks out of range`;
    }
  }
}

function produceTipCalculator(percent) {
  return function(bill) {
    return percent * bill;
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
