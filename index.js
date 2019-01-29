function produceDrivingRange(c){ 
   return function(d1,d2) {
    let myRe = /[0-9]/g;
    let a1 = d1.match(myRe).join('');
    let a2 = d2.match(myRe).join('');
    let b = Math.abs(a1-a2); 
    if (b > c) { 
      return `${b-c} blocks out of range`; 
    } else {
      return `within range by ${c-b}`;
    }
  };
}

function produceTipCalculator(og_bill){
  return function(tip){ 
    return og_bill * (tip); 
  }; 
}

function createDriver(){
  let driverID = 0; 
  
  return class {
    constructor(name) {
      this.name = name; 
      this.id = ++driverID;
    }
  } ;  
}



