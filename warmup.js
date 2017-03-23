var num1 = process.argv[2];
var num2 = process.argv[3];

console.log("Numbers are equal");
console.log(num1 == num2);
console.log("Both Divisible by 7");
console.log(num1 % 7 == 0 && num2 % 7 == 0);