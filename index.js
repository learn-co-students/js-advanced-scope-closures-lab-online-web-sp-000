function produceDrivingRange(range){
    return function (block1, block2){
        const distance = Math.abs(block1.slice(0 ,-2) - block2.slice(0, -2))
        const inRange = range >= distance
        if(inRange){
            return `within range by ${range - distance}`
        }else{
            return `${distance - range} blocks out of range`
        }

    }
}

function produceTipCalculator(tipFraction){
    return function(fare){
        return fare * tipFraction
    }
}

function createDriver(){
    let driverId = 0

    return class {
        constructor(name){
            this.name = name
            this.id = ++driverId
        }
    }
}