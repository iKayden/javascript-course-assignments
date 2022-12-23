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
document.querySelector(".poll").addEventListener("click", registerNewAnswer);
/* 3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1". */
const displayResults = (type) => {
  if (typeof type === "object") {
    console.log(poll.answers);
  } else if (typeof type === "string") {
    console.log(`Poll results are ${poll.answers}`);
  }
};

// 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll object! So what should the this keyword look like in this situation?
// Test data for bonus:
// § Data 1: [5, 2, 3]
// § Data 2: [1, 5, 3, 9, 6, 1]
