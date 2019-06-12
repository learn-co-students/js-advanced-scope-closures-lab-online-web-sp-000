function produceDrivingRange(range) {
  return function(start, end) {

    let tripDistance = (parseInt(end) - parseInt(start));
    let difference = (range - tripDistance);
    if (tripDistance <= range) {
      return `within range by ${tripDistance}`;
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  };
};

function produceTipCalculator() {
  return function(tip) {
    return tip * .1
  }
};

function createDriver() {

  let driverId = 0;

  return class {

    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
