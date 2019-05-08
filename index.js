function produceDrivingRange(blockRange) {
    return function(string1, string2) {
        let block1 = parseInt(string1);
        let block2 = parseInt(string2);
        let distance = Math.abs(block2 - block1);
        if(distance > blockRange) {
            return `${distance-blockRange} blocks out of range`; 
        } else {
            return `within range by ${distance}`;
        }
    }
}

function produceTipCalculator(percent) {
    return function (fare) {
        return percent * fare;
    }
}

function createDriver() {
    let driverId = 0;

    return class {
        constructor(name) {
            this.name = name;
            this.id = ++driverId;
        }
    }
}