function produceDrivingRange(num) {
    return (start, end) => {
        const distance = Math.abs(start.slice(0, 2) - end.slice(0, 2))
        return distance > num ? `${distance - num} blocks out of range` : `within range by ${num - distance}`
    }
}
  
function produceTipCalculator(num) {
    return fare => fare * num
}
  
function createDriver() {
    let driverId = 0

    return class Driver {
        constructor (name) {
            this.name = name
            this.id = ++driverId
        }
    }
}