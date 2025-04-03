let array = [1, 2, 3, 4, 5];
function addElementsOfArra(array) {
  return array.reduce((sum, element) => sum + element, 0);
}
let result = addElementsOfArra(array);
console.log(result);
