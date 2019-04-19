function produceDrivingRange(blockRange) {
  return function(start, end) {

    let blocksDesired = Math.abs(parseInt(start) - parseInt(end));
    let blocksTotal = blockRange - blocksDesired;

    if (blocksTotal >= 0) {
        return `within range by ${blocksTotal}`;
    } else {
        return `${Math.abs(blocksTotal)} blocks out of range`;
    }
  };
}


function produceTipCalculator(percent) {
  return function(tip) {
    return tip * percent;
  };
}

function createDriver(){
  let DriverId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++DriverId;
    }
  }
}
