// recursion for fibonacci
// let n = 10;
// function fibonacci(n) {
//   if (n < 0) {
//     return;
//   }
//   if (n === 0) {
//     return 0;
//   }
//   if (n === 1) {
//     return 1;
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }
// let result = fibonacci(n);
// console.log(result);

//loops
function fibonacciSeries(n, a = 0, b = 1) {
  if (n <= 0) return;
  console.log(a);
  fibonacciSeries(n - 1, b, a + b);
}
let n = 10;
fibonacciSeries(n);
