function produceDrivingRange(range){
  return function whithinRange(street1, street2){
    let dist = street2.slice(0,2)-street1.slice(0,2)
    if (dist > range) {
      return `${dist-range} blocks out of range`
    } else {
      return `within range by ${range - dist}`
    }
       
  }
}

function produceTipCalculator(tipPercent) {
  return function calculateTip(fare){
    return fare*tipPercent
  }
}



function createDriver() {
  function generateDriver(){
    let driverId = 0;
    class Driver {
       constructor(name){
          this.name = name;
          this.id = ++driverId;
     
       }
     }
     return Driver
  }
  
  return generateDriver();
}




