function largestNumber(num1, num2, num3) {
  return num1 > num2
    ? num1 > num3
      ? console.log(`${num1} is largest`)
      : console.log(`${num3} is largest`)
    : num2 > num3
    ? console.log(`${num2} is largest`)
    : console.log(`${num3} is largest`);
}
let result = largestNumber(100, 500000, 200);
