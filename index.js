function produceDrivingRange(range) {
  return function(startString, endString) {
    const startPoint = parseInt(startString, 10);
    const endPoint = parseInt(endString, 10);
    if (Math.abs(endPoint - startPoint) <= range) {
      return `within range by ${range - Math.abs(endPoint - startPoint)}`;
    } else {
      return `${Math.abs(endPoint - startPoint) - range} blocks out of range`;
    }
  };
}

function produceTipCalculator(percentage){
  return function(fare){
    return fare * percentage;
  };
}

function createDriver(){
  let driverID = 0;
  return class Driver {
    constructor(name){
      this.id = ++driverID;
      this.name = name;
    }
  };
}