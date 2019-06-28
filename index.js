function produceDrivingRange(range) {
  return function(start, end){
    const startNum = parseInt(start.replace('th',''));
    const endNum = parseInt(end.replace('th',''));
    const distance = Math.abs(startNum - endNum);

    if (distance > range) {
      return `${distance - range} blocks out of range`;
    } else {
      return `within range by ${range - distance}`;
    }
  };
};

function produceTipCalculator(tip) {
  return function(fare) {
    return fare * tip;
  };
};

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name){
      this.name = name;
      this.id = ++driverId;
    }
  };
};
