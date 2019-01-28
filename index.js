function produceDrivingRange(drivingRange) {
  return function(pickup, dropoff) {
    let distance = Math.abs(parseInt(pickup, 10) - parseInt(dropoff, 10));
    if (distance < drivingRange) {
      return `within range by ${drivingRange - distance}`
    } else {
      return `${distance - drivingRange} blocks out of range`
    };
  };
};

function produceTipCalculator(tipPercentage) {
  return function(fare) {
    return fare * tipPercentage;
  };
};

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.id = ++driverId;
      this.name = name;
    };
  };
};