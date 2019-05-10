function produceDrivingRange(blockRange){
  return function(range1, range2) {
    let distance = parseInt(range2) - parseInt(range1);
    let absDis = Math.abs(distance);
   if(blockRange - absDis > 0){
    return `within range by ${blockRange - absDis}`;
   }
    return `${Math.abs(blockRange - absDis)} blocks out of range`;
 };
    // return eightBlockRange(st1, st2){
    //
    // };
    //
}

function produceTipCalculator(tip){
  return function(num) {
    return num * tip;
 };
  //   return `${Math.abs(blockRange - absDis)} blocks out of range`;
  // };
}

function createDriver(){
    let driverId = 0;

  return class {
    constructor(name){
       this.id = ++driverId;
       this.name = name;
    }
  }
}
