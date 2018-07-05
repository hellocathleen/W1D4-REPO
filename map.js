var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

function map (arrayToMap, callbackFunction) {
    newArray = [];
    arrayToMap.forEach(function(element) {  
    newArray.push(callbackFunction(element));
   });
  return newArray;
}
