// // //Non-arrow function expression:
// // // const square = function (x) {
// // //   return x * x;
// // // }

// // // Equivalent arrow function:
// // const square = (x) => {
// //   return x * x;
// // }

// // //parens are option when you have 1 parameter
// // const isEven = num => {
// //   return num % 2 === 0;
// // }

// // //Must include parens for multiple parameters
// // const multiply = (x, y) => {
// //   return x * y;
// // }

// // // Must include parens for zero parameters
// // const greet = () => {
// //   console.log("HI!")
// // }
// const a = (x, y) => x + y;
// console.log(a(3, 4));
// const s = (x) => x ** 2;
// console.log(s(3));
// const isEven = (n) => n % 2 === 0;
// console.log(isEven(5));
// let m = (x, y) => x * y;
// console.log(m(3, 4));

const n = [1, 2, 3];
const na = n.map((n) => n * 2);
console.log(na);
const ie = (n) => n % 2 === 0;
console.log(ie(2));
console.log(ie(3));
const m = (x, y) => x * y;
console.log(m(3, 4));
const s = (n) => n * n;
console.log(s(3));
const g = () => console.log("h");
g();
