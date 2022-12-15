'use strict'; // strict mode

// Coding Challenge #1

// const calcAverage = (score1, score2, score3) =>
//   Math.floor((score1 + score2 + score3) / 3);

// const checkWinner = (avgDolphins, avgKoalas) => {

//   if (avgDolphins >= avgKoalas * 2) {
//     console.log(`Dolphins win over team Koalas (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= avgDolphins * 2) {
//     console.log(`Koalas win over team Dolphins (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log("Nobody wins!");
//   }
//   return;
// };

// const avgDolphins = calcAverage(530, 43, 71);
// const avgKoalas = calcAverage(65, 54, 49);
// console.log(checkWinner(avgDolphins, avgKoalas));

//Coding challenge #2

// const calcTip = (bill) => {
//   let tip = 0;
//   if (bill >= 50 && bill <= 300) {
//     tip = bill * 0.15;
//     console.log(tip);
//   } else {
//     tip = bill * 0.20;
//     console.log(tip);
//   }
//   return tip;
// };

// const calcTipTernary = bill =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

// const bills = [125, 555, 44];

// const tips = [
//   calcTipTernary(bills[0]),
//   calcTipTernary(bills[1]),
//   calcTipTernary(bills[2]),
// ];
// console.log("tips arr", tips);

// const total = [
//   tips[0] + bills[0],
//   tips[1] + bills[1],
//   tips[2] + bills[2]
// ];

// console.log("Total arr: ", total);

// Coding challenge #3

// const mark = {
//   fullName: ["Mark", "Miller"],
//   mass: 78,
//   height: 1.69,
//   calcBMI: function() {
//     this.BMI = Math.round(this.mass / (this.height ** 2));
//     return this.BMI;
//   }
// };
// const john = {
//   fullName: ["John", "Smith"],
//   mass: 92,
//   height: 1.95,
//   calcBMI: function() {
//     this.BMI = Math.round(this.mass / (this.height ** 2));
//     return this.BMI;
//   }
// };

// mark.calcBMI();
// john.calcBMI();

// console.log(
//   `${mark.fullName[0]}'s BMI (${mark.BMI}) is ${mark.BMI > john.BMI ? "higher than" : "lower than "}John's (${john.BMI})`
// )

// Coding challenge #4

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const tips = [];
// const totals = [];

// const calcTip = bill =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

// for (let i = 0; i < bills.length; i++) {
//   let tip = calcTip(bills[i]);
//   let total = tip + bills[i];
//   tips.push(tip);
//   totals.push(total);
// }

// console.log(tips);
// console.log(totals);

// const calcAverage = arr => {
//   let allTotal = 0;
//   let i = 0;
//   while (i < arr.length) {
//     allTotal += arr[i];
//     i++;
//   }
//   console.log(`total avr is: $${allTotal / arr.length}`);
//   return allTotal / arr.length;
// };

// calcAverage(tips);
// calcAverage(bills);
// calcAverage(totals);

/* Extra code challenge
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
*/
//My function
// function lovefunc(flower1, flower2) {
//   // moment of truth
//   if (flower1 % 2 === 0 && flower2 % 2 === 0) {
//     return false;
//   } else if (flower1 % 2 === 0 && flower2 % 2 === 1) {
//     return true;
//   } else if (flower2 % 2 === 0 && flower1 % 2 === 1) {
//     return true;
//   } else {
//     return false;
//   }
// }

// Perfect Function
// function lovefunc(flower1, flower2) {
//   return flower1 % 2 !== flower2 % 2;
// }

// const randNum1 = Math.floor(Math.random() * 100);
// // console.log("num 1 ", randNum1);
// const randNum2 = Math.floor(Math.random() * 100);
// // console.log("num 2 ", randNum2);

// const result = lovefunc(1, 4); //true
// const result2 = lovefunc(2, 2);// false
// const result3 = lovefunc(0, 1);// true
// const result4 = lovefunc(0, 0);// false
// const result5 = lovefunc(423, 612); //true
// const result6 = lovefunc(671, 114); //true

// console.log(result6);


/*
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
*/

//My function
// function makeNegative(num) {
//   if (num <= 0) {
//     return num;
//   };
//   if (num > 0) {
//     const negNum = '-' + num;
//     return Number(negNum);
//   }
// }

//Perfect Function
// function makeNegative(num) {
//   return -Math.abs(num);
// }

// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12

/* Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. */

// const summation = function(num) {
//   let outputNum = 0;
//   for (let i = 1; i <= num; i++) {
//     outputNum += i;
//   }
//   return outputNum;
// };


/* It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters. */

// My Func
// function removeChar(str) {
//   if (str.length <= 2) {
//     console.log(str);
//     return "";
//   }
//   const arr = str.split("");
//   arr.shift();
//   arr.pop();
//   const newStr = arr.join("");
//   return newStr;
// };

//perfect func
// function removeChar(str) {
//   return str.slice(1, -1);
// }
// const test = removeChar('eloquent'); // 'loquen'
// console.log(test);
// removeChar('lo'); // 'lo'


/*You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not. */

// function check(a, x) {
//   return a.includes(x);
// }
// const test1 = check([66, 101], 66); // true
// const test2 = check([101, 45, 75, 105, 99, 107], 107); //true

// console.log(test1);
// console.log(test2);

// string reverse
// function solution(str) {
//   return str.split("").reverse().join("");
// }

/* Write function bmi that calculates body mass index(bmi = weight / height2).;

if bmi <= 18.5 return "Underweight";

if bmi <= 25.0 return "Normal";

if bmi <= 30.0 return "Overweight";

if bmi > 30 return "Obese"; */

// function bmi(weight, height) {
//   const BMI = (weight / height ** 2).toFixed(1);
//   console.log(BMI);
//   if (BMI <= 18.5) {
//     return "Underweight";
//   } else if (BMI <= 25.0) {
//     return "Normal";
//   } else if (BMI <= 30.0) {
//     return "Overweight";
//   } else {
//     return "Obese";
//   }
// }

// bmi(80, 1.80);// "Normal"

// function simpleMultiplication(number) {
//   return number % 2 === 0 ? number * 8 : number * 9;
// }

/* Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.*/

// function paperwork(n, m) {
//   if (n < 0 || m < 0) return 0;
//   return n * m;
// }
//
// const test = paperwork(5, -5); // 0
// console.log(test);

/* There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array! */


// function betterThanAverage(classPoints, yourPoints) {
//   let classAverage = 0 + yourPoints;
//   classAverage = classPoints.reduce((i, current) => i + current, classAverage);
//   return yourPoints > classAverage / (classPoints.length + 1) ? true : false;
// }
// const test = betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9); //false
// console.log(test);

// Calculating temperature amplitude
// function tempAmplitude(temps1, temps2) {
//   const temps = [...temps1, ...temps2];
//   let min = temps[0];
//   let max = temps[0];
//   temps.forEach(temp => {
//     if (typeof temp !== "number") return;
//     if (temp > max) max = temp;
//     if (temp < min) min = temp;
//   });
//   return max - min;
// };

// const temperatures1 = [30, -2, -60, -1, 'error', 90, 130, 170, 150, 140, 90, 5];
// const temperatures2 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const test = tempAmplitude(temperatures1, temperatures2);
// console.log(test);

// const forecastMaxTemps1 = [17, 21, 23];
// const forecastMaxTemps2 = [12, 5, -5, 0, 4];

// function printForecast(temps) {
//   let printStr = "";
//   for (let i = 0; i < temps.length; i++) {
//     printStr += `... ${temps[i]}C* in ${i + 1} ${i + 1 === 1 ? "day" : "days"} `;
//   }
//   console.log(printStr);
//   return printStr;
// }

// printForecast(forecastMaxTemps1);
// printForecast(forecastMaxTemps2);


/* Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

setAlarm(true, true) -> false
setAlarm(false, true) -> false
setAlarm(false, false) -> false
setAlarm(true, false) -> true */

// function setAlarm(employed, vacation) {
//   return employed && !vacation ? true : false;
// }
