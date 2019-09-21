function produceDrivingRange(blockRange) {
  return function(a, b) {
    let start = parseInt(a);
    let end = parseInt(b);
    let distance = Math.abs(end - start);
    let difference = blockRange - distance;

    if (difference > 0) {
      return `within range by ${difference}`
    }
    else {
      let oor = Math.abs(difference);
      return `${oor} blocks out of range`
    };
  };
};

function produceTipCalculator(percent) {
  return function(cost) {
    return percent * cost;
  };
};


function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    };
  }
};