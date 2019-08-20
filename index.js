function produceDrivingRange(range) {
    return function(block1, block2) {
        const distance = Math.abs(parseInt(block2) - parseInt(block1));
        const margin = Math.abs(distance - range)

        if (range >= distance) {
            return `within range by ${margin}`;
        }else{
            return `${margin} blocks out of range`
        }
    }
}

function produceTipCalculator(tipPercentage) {
    return function(fare) {
        return fare * tipPercentage;
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
