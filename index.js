const produceDrivingRange = int => {
  return function(start, end) {
    let range = Math.abs(parseInt(start) - parseInt(end));
    return range > int
      ? `${range - int} blocks out of range`
      : `within range by ${range}`;
  };
};

const produceTipCalculator = percentage => {
  return function(bill) {
    return bill * percentage;
  };
};

const createDriver = () => {
  let driverId = 0;
  return class {
    constructor(name) {
      this.id = ++driverId;
      console.log(this.id);
      this.name = name;
    }
  };
};
