function produceTipCalculator(tip){
  
  return function(fare){
    
    return tip * fare;
  };
  
  
}


function createDriver(){
  let driverID = 0 ;
  
  return class {
    constructor(name){
      this.id = ++driverID;
      this.name = name;
    }
    
  };
  
}


function produceDrivingRange(range){
  
  return function(start, end){
    
    let distance = Math.abs(parseInt(end) - parseInt(start));
    
    if (range - distance < 0){return `${distance - range} blocks out of range`}
    else {return `within range by ${range - distance}`;
  }
  
  
  };
  
  
  
}









