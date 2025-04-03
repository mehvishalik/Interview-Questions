let srting = "daud ";
function palindrome(str) {
  str = str.trim();
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return console.log(`${str} is not a palindrome`);
    }
  }
  return console.log(`${str} is a palindrome`);
}
let result = palindrome(srting);
console.log(result);
