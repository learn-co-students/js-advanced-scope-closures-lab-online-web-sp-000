

// function produceDrivingRange(blockRange) {
//   return function(startRange, endRange) {
//   let start = paresInt(startRange)
//   let end = paresInt(endRange)
//   let distance = end - start
//   let result = blockRange - distance
//     if (result > 0) {
//         return `within the range by ${result}`
//       }
//       else {
//         return `${Math.abs(result)} blocks out of range`
//       }
//     }
// }
//
//
// function produceTipCalculator(persentage) {
//   // calculate 20% of the trip net cost
//   return function(discount) => {
//     return persentage * discount
//   }
//   // return tripNetCost * 0.2
// }
//
// function createDriver {
//   let driverId = 0
//   return class Driver {
//     constructor(name) {
//       this.name = name
//       this.id = ++driverId
//     }
//   }
// }


function produceDrivingRange(range) {
  return function(startRange, endRange) {
    let start = parseInt(startRange)
    let end = parseInt(endRange);
    let testRange = end - start
    let result = range - testRange
     if (result > 0) {
       return `within range by ${result}`
     } else {
       return `${Math.abs(result)} blocks out of range`
     }

  }
}

function produceTipCalculator(percent) {
  return function(fare) {
    return fare * percent
  }
}

function createDriver() {
  let driverId = 0
  return class Driver {
    constructor(name) {

      this.name = name
      this.id = ++driverId
    }
  }

}
