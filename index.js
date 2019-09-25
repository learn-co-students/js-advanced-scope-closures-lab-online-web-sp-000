// takes an argument of blockRange
function produceDrivingRange(blockRange) {

    // returns a function
    return function(startingBlock, endingBlock) {

        // which is used to calculate
        let start = parseInt(startingBlock);
        let end = parseInt(endingBlock);
        let distanceToTravel = Math.abs(end - start);
        let difference = blockRange - distanceToTravel;

        // if something is within range
        if (difference > 0) {
            return `within range by ${difference}`
        } else {
            // returns when something is out of range
            return `${Math.abs(difference)} blocks out of range`
        }
    }
}


// takes an argument of percentage
function produceTipCalculator(percentage) {

    // returns a function
    return function (rideFare) {

        // that returns the configured percentage tip
        return rideFare * percentage;
    }
}


function createDriver() {

    let driverId = 0

    // returns a class that allows
    return class {

        // to create a driver with a name attribute.
        constructor( name ) {
            // increments the driverId each time a driver is created
            this.id = ++driverId
            this.name = name
        }

    }
}
