function produceDrivingRange(num) {
  return function (first, second) {
    let start = parseInt(first)
    let end = parseInt(second)
    let distance = Math.abs(start - end)
    let difference = num - distance

    if (difference > 0) {
      return `within range by ${difference}`
    }
    else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(num) {
  return function (amount) {
    return amount * num
  }
}

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  }
}

const Driver = createDriver()
