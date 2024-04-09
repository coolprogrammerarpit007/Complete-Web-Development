`use strict`;

// const fullName1 = prompt(`Enter your full name: `);
// const fullName2 = prompt(`Enter your full name: `);

// const loveChance = Math.round(Math.random() * 100) + 1;

// console.log(
//   `Love chance between ${fullName1} and ${fullName2} are: ${loveChance}%`
// );

// function bmiCalculator(weight, height) {
//   const bmi = weight / (height * height);
//   let interpretation = ``;
//   if (bmi < 18.5) {
//     interpretation = `Your BMI is ${bmi}, so you are underweight.`;
//   } else if (bmi >= 18.5 && bmi <= 24.9) {
//     interpretation = `Your BMI is ${bmi}, so you have a normal weight .`;
//   } else {
//     interpretation = `Your BMI is ${bmi}, so you are overweight.`;
//   }

//   return interpretation;
// }

// console.log(bmiCalculator(80, 2));

// leap year

// function isLeap(year) {
//   /**************Don't change the code above****************/

//   //Write your code here.
//   if (year % 4 === 0 && year % 100 !== 0) {
//     return "Leap year";
//   } else if (year % 400 === 0) {
//     return "Leap year";
//   } else {
//     return "Not leap year";
//   }
// }

// console.log(isLeap(2020));

/**************Don't change the code below****************/

// const guests = [
//   `Avinash`,
//   `Rajesh`,
//   `Virat`,
//   `Novak`,
//   `Ankur`,
//   `Manthan`,
//   `Priyanshu`,
// ];
// const guest = prompt(`Enter guest name: `);
// let unwanted = true;
// for (let i = 0; i < guests.length; i++) {
//   if (guests[i].toLowerCase() === guest.toLowerCase()) {
//     console.log(`Welcome`);
//     unwanted = false;
//     break;
//   } else {
//     continue;
//   }
// }

// if (unwanted) {
//   console.log(`You are not invited, call the security.`);
// }

// fizzbuzz problem

// let count = 1;
// const numbers = [];
// const fizzbuzz = function () {
//   if (count % 3 === 0 && count % 5 !== 0) {
//     numbers.push("Fizz");
//   } else if (count % 5 === 0 && count % 3 !== 0) {
//     numbers.push(`Buzz`);
//   } else if (count % 3 === 0 && count % 5 === 0) {
//     numbers.push(`FizzBuzz`);
//   } else {
//     numbers.push(count);
//   }
//   count++;
//   return numbers;
// };

// console.log(fizzbuzz());
// console.log(fizzbuzz());
// console.log(fizzbuzz());
// console.log(fizzbuzz());
// console.log(fizzbuzz());
// console.log(fizzbuzz());
// console.log(fizzbuzz());
// console.log(fizzbuzz());
// console.log(fizzbuzz());
// console.log(fizzbuzz());
// console.log(fizzbuzz());
// console.log(fizzbuzz());
// console.log(fizzbuzz());
// console.log(fizzbuzz());
// console.log(fizzbuzz());
// console.log(fizzbuzz());
// console.log(fizzbuzz());
// console.log(fizzbuzz());
// console.log(fizzbuzz());
// console.log(fizzbuzz());

// function whosPaying(names) {
//   /******Don't change the code above*******/

//   //Write your code here.
//   let index = Math.floor(Math.random() * names.length);
//   console.log(index);
//   console.log(names);
//   return `${names[index]} is going to buy lunch today!`;

//   /******Don't change the code below*******/
// }

// let names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

// console.log(whosPaying(names));

// 99 bottles of the bear

// let bears = 99;

// const bear = () => {
//   while (bears >= 0) {
//     if (bears === 1) {
//       console.log(`${bears} bottle of the Bear.`);
//       bears--;
//     } else {
//       console.log(`${bears} bottles of the Bear.`);
//     }

//     bears--;
//   }
// };

// bear();

// fibonacci series challenge
// fibonacci Number Generator

// function fibonacciGenerator(num) {
//   let fibonacciArr = [];
//   let sum = 0;

//   for (let i = 0; i < num; i++) {
//     if (fibonacciArr.length === 0) {
//       fibonacciArr.push(0);
//     } else if (fibonacciArr.length < 2) {
//       sum = 1 + fibonacciArr[i - 1];
//       fibonacciArr.push(sum);
//     } else {
//       sum = fibonacciArr[i - 2] + fibonacciArr[i - 1];
//       fibonacciArr.push(sum);
//     }
//   }

//   return fibonacciArr;
// }

// console.log(fibonacciGenerator(15));
