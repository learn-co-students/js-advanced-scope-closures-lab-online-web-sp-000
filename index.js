function produceDrivingRange( blockRange ) {
  return function ( startingBlock, endingBlock ) {
    let distanceToTravel = Math.abs( parseInt(endingBlock) - parseInt(startingBlock));
    let difference = blockRange - distanceToTravel;

    if ( difference > 0 ) {
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator( percentage ) {
  return function( rideFare ) {
    return rideFare * percentage;
  }
}

function createDriver() {
  let driverId = 0;
  //return class
  return class {
    constructor(name) {
      this.id = driverId++;
      this.name = name;
    }
  }
}
