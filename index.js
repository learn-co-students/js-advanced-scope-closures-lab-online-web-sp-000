function produceDrivingRange(blockRange) {
  return (start, end) => {
    const startInt = parseInt(start.slice(0,2));
    const endInt = parseInt(end.slice(0,2));
    const range = Math.abs(startInt - endInt);
    const diff = Math.abs(range - blockRange);

    if (range < blockRange) {
      return `within range by ${diff}`; 
    }
    else {
      return `${diff} blocks out of range`;
    }
  }
}

function produceTipCalculator(tipPercentage) {
  return (cost) => {
    return cost * tipPercentage;
  }
}

function createDriver() {
  let DriverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++DriverId;
    }
  }
}