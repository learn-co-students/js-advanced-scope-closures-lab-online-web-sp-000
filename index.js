function produceDrivingRange(blockRange){
  return function(range1, range2) {
    let distance = range2 - range1;
   if(range2 - range1 <= 10){
    return `within range by  ${blockRange - (10 - distance)}`;
   }
    return `${blockRange - (10 - distance)} blocks out of range`;
 };
    // return eightBlockRange(st1, st2){
    //
    // };
    //
}
