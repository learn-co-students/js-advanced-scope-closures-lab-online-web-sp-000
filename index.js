function produceDrivingRange(range){
    return function(block1, block2) {
        if (range > parseInt(block2) - parseInt(block1)) {
            return `within range by ${parseInt(block2) - parseInt(block1)}`;
        }
        else return `${(parseInt(block2) - parseInt(block1)) - range} blocks out of range`;
    }
}

function produceTipCalculator(tip) {
    return function(fare) {
        return tip * fare;
    }
}

function createDriver () {
    driverId = 0;
    return class {
        constructor(name) {
        this.name = name
        this.id = ++driverId;
        }
    }
}