// Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples
// of 3 and 5
//  ex : 1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz

function fizzBuzz() {
  for (let i = 0; i < 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
};
// fizzBuzz();

// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object
// {a: 1 , b : 2, c: 3}    returns.  {1:"a", 2:"b", 3:"c"}
const swapper = (object) => {
  let outputObj = {};
  for (const key in object) {
    console.log();
    outputObj[object[key]] = key;
  }
  return outputObj;
};

// swapper({ a: 1, b: 2, c: 3 });

//////

// Given a number, print out a multiplication table up to and including that number

const multiplication = (n) => {
  const output = [];
  for (let i = 1; i <= n; i++) {
    const insideArr = [];
    for (let y = 0; y < n; y++) {
      insideArr.push(i * y);
    }
    output.push(insideArr);
  }
  // console.log('output array', output);
};

// multiplication(4);
// /////////


// [
//   [0, 1, 2, 3],
//   [1, 1, 2, 3],
//   [2, 2, 4, 6],
//   [3, 3, 6, 9]
// ]



// ///////

const drivers = {
  AgF4g: { name: 'Daniel Ricciardo', team: 'Renault F1 Team', cars: ['Toyota Corolla 2018', 'BMW M3', "F1"] },
  FfE4c: { name: 'Lando Norris', team: 'McLaren', cars: ['DB8', 'CLK489', 'F1'] },
  Df4cf: { name: 'Sebastian Vettel', team: 'Ferrari', cars: ['BMW M3', 'F1'] },
  I4fTw: { name: 'Nicholas Latifi', team: 'Renault F1 Team', cars: ['F1'] },
  pT4vD: { name: 'Kimi Raikkonen', team: 'Alfa Romeo', cars: ['BMW M3', 'F1'] },
  RaMfV: { name: 'Romain Grosjean', team: 'Ferrari', cars: ['Opel Cadet'] },
};

// Q1. Write a function to return an array of all the drivers names
const driverNames = (obj) => {
  const output = [];
  for (const driver in obj) {
    output.push(obj[driver].name);
  }
  return output;
};
// driverNames(drivers);

// Q2. Write a function that returns an object with the key being Team Name and the value being the drivers for that team
// const teamDrivers(obj) {
// 	const output = {}
// 	for(const i in obj ) {
//   	if(!output[obj[i].team]) {
//     	output[obj[i].team] = [obj[i].name]
//     } else {
//     	output[obj[i].team].push(obj[i].name)
//     }

//   }
// }


// Q3. Write a function that takes this object and returns all the cars that were mentioned ( no car should be listed more than once)


// Q4. Write a function That outputs an object, of every car, and drivers that drove that car


// ///

// Validate the subsequence is in the correct order

// 1)
// array = [3, 1, 7, 5, 10, 2];
// sequence = [1, 5, 2];
// The output should be true.

// 2)
// array = [3, 1, 7, 5, 10, 2];
// sequence = [5, 1, 2];
// The output should be false.


// const seqCheck = (arr1, seqArr) => {
// 	const indexes = seqArr.map((seqNum) => arr1.indexOf(seqNum))
//   const sorted = indexes.sort();
//   let lowest = indexes[0]
//   for(let val of indexes) {
//   	if (val < lowest) {
//     	return false
//     }
//     lowest = val
//   }
//   return true
// }
// [1, 3, 5]
// [3, 1, 5]
// ////

// Make this work:

// duplicate([1,2,3]); // [1,2,3,1,2,3]




// //////

// What will be returned by each of these?
// console.log("hello" || "world")
// console.log("foo" && "bar")



// /////

// /* Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types. */

// shortestWords("Hi this is my name") //2


// ////////



// /* DESCRIPTION:
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".


// Note: for this kata y isn't considered a vowel. */



// //////

// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.


// queueTime([5,3,4], 1)
// // should return 12
// // because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the
// // queue finish before the 1st person has finished.

// 0 0
// 10 2
// 10 5
// 10 8

// queueTime([2,3,10], 2)
// // should return 12

// 0  0
// 2  3
// 12 3



// ////////


// /* numbers: [ 2.0, 2.0, 3.0, 4.0 ]
// rules: [ (a,b) => a + b, (a,b) => a - b ]
// result: 5.0

// You get a list of four numbers.
// There are two rules. First rule says: Sum the two numbers a and b. Second rule says: Subtract b from a.

// The steps in progressing:
// 1. Rule 1: First number + second number -> 2.0 + 2.0 = 4.0
// 2. Rule 2: result from step before - third number -> 4.0 - 3.0 = 1.0
// 3. Rule 1: result from step before + forth number -> 1.0 + 4.0 = 5.0

// */

// const nums = [2.0, 2.0, 3.0, 4.0];
// const rule1 = [(a, b) => a + b, (a, b) => a - b];
// const rule2 = [(a, b) => a + b, (a, b) => a - b, (a, b) => a * b];

// console.log(reduceRules(nums, rule1)); // 5
// console.log(reduceRules(nums, rule2)); // 4



// ////////


// /* DESCRIPTION:
// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "([])"              =>  true
// ")(())"          =>  false
// "([))"          =>  false
// "{"               =>  false
// "()[[{}()]()]"    =>  true
// */



// //////

// productArray([10,3,5,6,2]) return ==> [180,600,360,300,900]



// Explanation:
// The first element 180 is the product of all array's elements except the first element 10

// The second element 600 is the product of all array's elements except the second element 3

// The Third element 360 is the product of all array's elements except the third element 5

// The Fourth element 300 is the product of all array's elements except the fourth element 6

// Finally ,The Fifth element 900 is the product of all array's elements except the fifth element 2


// /////


// A coloured triangle is created from a row of colours, each of which is red, green or blue. Successive rows, each containing one fewer colour than the last,
// are generated by considering the two touching colours in the previous row.
// If these colours are identical, the same colour is used in the new row. If they are different, the missing colour is used in the new row.
// This is continued until the final row, with only a single colour, is generated.

// The different possibilities are:

// Colour here:        G G        B G        R G        B R
// Becomes colour:      G          R          B          G


// triangle('RBRGBRBGGRRRBGBBBGG'), 'G'
// triangle('RGBG'), 'B'
// RGBG
// BRR
// GR
// B








