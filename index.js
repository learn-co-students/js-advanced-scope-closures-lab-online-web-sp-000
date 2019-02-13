function produceDrivingRange(range) {
  return function(startStr, endStr) {
    let distance = Number(endStr.split("th")[0]) - Number(startStr.split("th")[0])
    let overage = Math.abs(distance) - range
    if (overage > 0) {
      return `${overage} blocks out of range`
    } else {
      return `within range by ${Math.abs(overage)}`
    }
  }
}

function produceTipCalculator(tip) {
  return function(amt) {
    return amt * tip
  }
}

const createDriver = function() {
  let driverId = 0
  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  }
}