let string = " I am a string ";
function numOfVowels(str) {
  let count = 0;
  str.trim();
  for (let element of str) {
    element = element.toLowerCase();
    if (
      element === "a" ||
      element === "e" ||
      element === "i" ||
      element === "o" ||
      element === "u"
    ) {
      count++;
    }
  }

  return `there are ${count} vowels in the string`;
}
let result = numOfVowels(string);
console.log(result);
