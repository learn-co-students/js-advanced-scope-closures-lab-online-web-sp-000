function produceDrivingRange(range) {
    return function (street1, street2) {
        let int1 = parseInt(street1);
        let int2 = parseInt(street2);
        let diff = int2 - int1;
        if (range >= diff) {
            return `within range by ${range - diff}`;
        } else {
            return `${diff - range} blocks out of range`;
        }
    }
}

function produceTipCalculator(percent){
    return function (fare) {
        return fare * percent;
    }
}

function createDriver(){
    let driverId = 0;
    return class {
        constructor(name){
            this.name = name;
            this.id = ++driverId;
        }
    }
}