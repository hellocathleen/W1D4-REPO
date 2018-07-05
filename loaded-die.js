function makeLoadedDie() {
    var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
    var index = -1
  
    return function() {
        index += 1
        var notRandomNum = list[index];
        return notRandomNum;
      }
    }

  
  var rollLoadedDie = makeLoadedDie();
  
  console.log(rollLoadedDie());  // 5
  console.log(rollLoadedDie());  // 4
  console.log(rollLoadedDie()); 
  