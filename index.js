function produceDrivingRange(range) {
  return function(bar, baz) {
    const [barInt, bazInt] = [parseInt(bar), parseInt(baz)]
    const distance = Math.abs(barInt - bazInt)
    if (distance > range) {
      return `${distance - range} blocks out of range`
    } else {
      return `within range by ${range - distance}`
    }
  }
}
function produceTipCalculator(tipPercent) {
  return function(total) {
    return total * tipPercent
  }
}
function createDriver() {
  let driverId = 0
  return class {
    constructor(name) {
      this.name = name
      this.id = driverId++
    }
  }
}
