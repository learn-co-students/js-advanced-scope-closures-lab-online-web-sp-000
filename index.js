function produceDrivingRange(blockrange) {
  return function(firstBlock, secondBlock) {
    const diff = secondBlock.slice(0, 2) - firstBlock.slice(0, 2)
    if (diff > blockrange) {
      return `${(diff - blockrange)} blocks out of range`;
    } else if (diff < blockrange) {
      return `within range by ${(blockrange - diff)}`;
    } else {
      return 'within range';
    }
  };
}

function produceTipCalculator(percentage){
  return function(billAmount) {
    return (billAmount * percentage)
  };
}

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  };
}
