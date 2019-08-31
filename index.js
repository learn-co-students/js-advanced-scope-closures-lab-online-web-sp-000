
function produceDrivingRange(blockRange) {
    return function(block1, block2) {
        let numBlocks = Math.abs(parseInt(block1) - parseInt(block2));
        let inRangeBy = blockRange - numBlocks;
        let outRangeBy = numBlocks - blockRange;

        return (inRangeBy >= 0 ? "within range by " + inRangeBy : outRangeBy + " blocks out of range");
    };
}
 
function produceTipCalculator(percentTip) {
    return function(fareAmount) {
        return fareAmount * percentTip;
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

 
