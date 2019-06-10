function produceDrivingRange(blockRange) {
  return function(start, end) {
    let distanceBlocks = Math.abs(parseInt(end) - parseInt(start));
    if (distanceBlocks > blockRange) {
      return `${distanceBlocks - blockRange} blocks out of range`;
    } else {
      return `within range by ${distanceBlocks}`;
    }
  }
}

function produceTipCalculator(percent) {
  return function(fare) {
    return fare * percent;
  };
}

function createDriver() {
  let driverId = 0;

 return class {
   constructor(name) {
     this.id = ++driverId;
     this.name = name;
   }
 }
}
