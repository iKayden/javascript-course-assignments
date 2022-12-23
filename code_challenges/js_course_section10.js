"use strict";
// Function that returns function
const greet = (greeting) => (n) => console.log(`${greeting} ${n}`);
// greet("Holla ")("amigo!");

// The bind Method with functions
const addTax = (rate, value) => value + value * rate;
// console.log('tax', addTax(0.20, 300));
const addVat = addTax.bind(null, 0.23);
// console.log('VAT', addVat(400));;

// Change function to return function
const addTaxRate = (rate) => (value) => value + value * rate;
const vat30 = addTaxRate(0.30);
// console.log(vat30(1000));

'use strict';
// Coding Challenge #1
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
};
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
// method does 2 things

/* 1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number) */


/* 1.2. Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by
1. Make sure to check if the input is a number and if the number makes
sense */
const registerNewAnswer = function(n) {
  let answer = Number(prompt(
    `What is your favourite programming language?
    0: JavaScript
    1: Python
    2: Rust
    3: C++
    (Write option number) `
  ));
  if (typeof answer === "number") {
    switch (answer) {
      case 0:
        poll.answers[0]++;
        break;
      case 1:
        poll.answers[1]++;
        break;
      case 2:
        poll.answers[2]++;
        break;
      case 3:
        poll.answers[3]++;
        break;
      default:
        alert("Choose from the three languages");
        break;
    }
    // 4. Run the 'displayResults' method at the end of each
    // 'registerNewAnswer' method call.
    return displayResults("");
  };
};
// 2. Call this method whenever the user clicks the "Answer poll" button.
// document.querySelector(".poll").addEventListener("click", registerNewAnswer);
/* 3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1". */

// Immediately Invoked Function Expressions (IIFE)
// #1
// (function() {
//   console.log("this IIFE will never log again");
// })();
// // #2
// (() => console.log("this IIFE will never log again as well!"))();

// Coding Challenge #2 Closures

