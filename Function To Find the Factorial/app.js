let num = 4;
// recursion function
function factorial(num) {
  if (num < 0) {
    return;
  }
  if (num == 0 || num == 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

let result = factorial(num);
console.log(result);

// loop function
let num2 = 5;
function factorial1(num2) {
    let result = 1;
    for(let i = 1 ; i <=num2 ; i++){
        result = result * i;
    }
    return result;
}
let result1 = factorial1(num2);
console.log(result);
