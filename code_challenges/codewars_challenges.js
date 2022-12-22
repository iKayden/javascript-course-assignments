"use strict";
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
//   * /;;
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

/* Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321 */

// function descendingOrder(n) {
//   if (n <= 0) return 0;
//   const numArr = String(n).split("").sort().reverse().join("");
//   return Number(numArr);
// }

// descendingOrder(42145);
// descendingOrder(145263);

/* In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.


Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first. */
// My Function
// function highAndLow(numbers) {
//   const sortArr = numbers.split(" ").sort((a, b) => a - b).reverse();
//   const output = `${sortArr[0]} ${sortArr[sortArr.length - 1]}`;
//   return output;
// }
// Ideal one
// function highAndLow(numbers) {
//   numbers = numbers.split(' ');
//   return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
// }

// // Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4");// "42 -9"


/* Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455. */

// function sumTwoSmallestNumbers(numbers) {
//   return numbers.sort((a, b) => a - b).slice(0, 2).reduce((prev, curr) => prev + curr, 0);
// }

// sumTwoSmallestNumbers([5, 8, 12, 19, 22]); // 13
// sumTwoSmallestNumbers([15, 28, 4, 2, 43]); // 6

/* Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.


Note: a and b are not ordered! */
// function getSum(a, b) {
//   let min = Math.min(a, b);
//   let max = Math.max(a, b);
//   //gauss like formula for sum
//   return (max - min + 1) * (min + max) / 2;

// }

// getSum(1, 1);//-- > 1(1 )
// getSum(-1, 0);//-- > -1(-1 + 0 = -1)
// getSum(-1, 2);//-- > 2(-1 + 0 + 1 + 2 = 2);

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
/*Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.*/

// My solution
// function openOrSenior(data) {
//   console.log(data);
//   const outputArr = [];
//   for (const datum of data) {
//     datum[0] >= 55 && datum[1] > 7 ?
//       outputArr.push("Senior") :
//       outputArr.push("Open");
//   }
//   return outputArr;
// }
// Better Solution
// function openOrSenior(data) {
//   return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? "Senior" : "Open");
// }

// // input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// // output = ["Open",    "Open", "Senior", "Open",   "Open", "Senior"]

// const test1 = openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]); // ['Open', 'Senior', 'Open', 'Senior']
// const test2 = openOrSenior([[3, 12], [55, 1], [91, -2], [53, 23]]); // ['Open', 'Open', 'Open', 'Open'];
// console.log(test1);
// console.log(test2);


/* You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative. */

// function findNextSquare(sq) {
//   let sqRoot = Math.sqrt(sq);
//   if (Math.ceil(sqRoot) === Math.floor(sqRoot)) {
//     return Math.pow((sqRoot + 1), 2);
//   }
//   return -1;
// }

// findNextSquare(121); // --> 144
// const test1 = findNextSquare(625); // --> 676
// console.log(test1);
// findNextSquare(114); //--> -1 since 114 is not a perfect square

/* Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1. */

// const binaryArrayToNumber = arr => Number.parseInt(arr.join(""), 2);

// binaryArrayToNumber([0, 0, 0, 1]); // ==> 1;
// binaryArrayToNumber([0, 0, 1, 0]); // ==> 2;
// binaryArrayToNumber([0, 1, 0, 1]); // ==> 5;
// binaryArrayToNumber([1, 0, 0, 1]); // ==> 9;
// binaryArrayToNumber([0, 0, 1, 0]); // ==> 2;
// binaryArrayToNumber([0, 1, 1, 0]); // ==> 6;
// binaryArrayToNumber([1, 1, 1, 1]); // ==> 15;
// binaryArrayToNumber([1, 0, 1, 1]); // ==> 11;

/* DESCRIPTION:
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */
// const findShort = (s) => {
//   return Number(
//     s.split(" ")
//       .map(x => x.length)
//       .sort((a, b) => a - b)
//       .slice(0, 1)
//   );
// };
// const test = findShort("bitcoin take over the world maybe who knows perhaps"); // 3
// const test2 = findShort("Lisk LiteCoin Ethereum Steem LiteCoin DarkCoin Steem"); // 3
// console.log(test);
// console.log(test2);

/* Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false. */

// const boolToWord = bool => bool ? "Yes" : "No";
// console.log(boolToWord(true)); // 'Yes';

/* Complementary DNA
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)
*/
// My function
// function DNAStrand(dna) {
//   const output = [];
//   const arr = dna.split("").map(x => {
//     if (x === "A") {
//       output.push("T");
//     } else if (x === "T") {
//       output.push("A");
//     } else if (x === "C") {
//       output.push("G");
//     } else if (x === "G") {
//       output.push("C");
//     } else {
//       output.push(x);
//     }
//   });
//   return output.join("");
// }

// perfect way
// function DNAStrand(dna) {
//   return dna.replace(/./g, function(c) {
//     return DNAStrand.pairs[c];
//   });
// }

// DNAStrand.pairs = {
//   A: 'T',
//   T: 'A',
//   C: 'G',
//   G: 'C',
// };

// console.log(DNAStrand("AAAA"));// "TTTT","String AAAA is"
// console.log(DNAStrand("ATTGC"));// "TAACG","String ATTGC is"
// console.log(DNAStrand("GTAT"));// "CATA","String GTAT is"


/* Is this a triangle?
Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted). */

// function isTriangle(a, b, c) {
//   return a + b > c && a + c > b && b + c > a;
// }
// console.log(isTriangle(1, 2, 2)); //true;
//console.log(isTriangle(7, 2, 2)); //false

// accumulating letters
function accum(str) {
  return str.split("").map((el, i) => el.toUpperCase() + Array(i + 1).join(el.toLowerCase())).join("-");
}

// function accum(s) {
// 	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// }
// console.log(accum("abcd")); // -> "A-Bb-Ccc-Dddd"
// console.log(accum("RqaEzty")); // -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// console.log(accum("cwAt")); // -> "C-Ww-Aaa-Tttt"
// console.log(Array(34).join("a"));

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
function fakeBin(x) {
  return x.split("").map(i => i < 5 ? 0 : 1).join("");
}

// console.log(fakeBin('45385593107843568'));// 01011110001100111
// console.log(fakeBin('509321967506747'));// 101000111101101
// console.log(fakeBin('366058562030849490134388085'));// 011011110000101010000011011

// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
  return String(n).split("").reverse().map(x => Number(x));
};
digitize(35231); // => [1,3,2,5,3]
digitize(0); // => [0]
