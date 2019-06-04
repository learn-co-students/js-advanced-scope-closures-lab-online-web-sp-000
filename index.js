function produceDrivingRange(range) {
  return function(a, b) {
     numA = a.match(/\d+/)[0];
     numB = b.match(/\d+/)[0];
     numC = numA - numB;

     if (Math.abs(numC) <= range) {
       newRange = range - Math.abs(numC);
       return `within range by ${newRange}`;
     }
     else {
       newRange = Math.abs(numC) - range;
       return  `${newRange} blocks out of range`;
     }
  }
}

function produceTipCalculator(tip) {
  return function(fare) {
    return fare * tip;
  }
}

function createDriver() {
  let driverId = 0;
  return class Driver {
    constructor(name){
      this.name = name;
      this.id = ++driverId;
    }
  };
}
