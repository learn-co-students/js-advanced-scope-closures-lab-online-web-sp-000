function produceDrivingRange(blockRange){
    return function (startPoint, endPoint){
        x = parseInt(endPoint) - parseInt(startPoint);
        if (x > blockRange){
            y = x - blockRange;
            return `${y} blocks out of range`;
        }else{
            y = blockRange - x;
            return `within range by ${y}`;
        };
    };
}

function produceTipCalculator(tipPercentage){
    return function(total){
        return total * tipPercentage;
    };
}

function createDriver(){
    let driverId = 0;
   return class {
       constructor(name){
           this.name = name
           this.id = ++driverId
       };
   };
}