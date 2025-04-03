let array = [1, 2, 3, 4, 5, 6, 65];
function maxNum(array) {
  return array.reduce((acc, el) => {
    if (el > acc) {
      return el;
    }
    return acc;
  }, 0);
}
let result = maxNum(array);
console.log(result);
// by using Math.max() function
function numMax(array) {
  return Math.max(...array);
}
let result2 = numMax(array);
console.log(result2);
