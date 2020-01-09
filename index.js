function produceDrivingRange( blockRange ) {
  return function (begin, end){
    let start = parseInt( begin );
    let ending = parseInt( end );
    let distanceToTravel = Math.abs(ending - start);
    let difference = blockRange - distanceToTravel;

    if (difference > 0) {
      return `within range by ${difference}`
    } else {
        return `${Math.abs(difference)} blocks out of range`
      }
    }
}
function produceTipCalculator(tipPercentage) {
  return function (fare) {
     return fare * tipPercentage
  }
}

function createDriver(){
  let driverId = 0
  return class {
    constructor (name) {
      this.id = ++driverId
      this.name = name
    }
  }
}
