'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Fake Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// // Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
let arr = ["a", "b", "c", "d", "e"];
// SLICE - makes a copy without mutating an array
// console.log(arr.slice(1, -2));
// console.log(arr.slice());

// SPLICE - mutates the array
// console.log(arr.splice(2));
// console.log(arr.splice(1, 2));
// console.log(arr.splice(-1));
// console.log(arr);

// REVERSE mutates the original array
// console.log('arr.reverse()', arr.reverse());

//Array methods Practice
// task 1
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(move => move > 0)
  .reduce((sum, curr) => sum + curr, 0);
// console.log(bankDepositSum);

// task 2 How many deposits with 1,000$+

// const largeDeposits1 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(move => move >= 1000)
//   .length;

// with reduce function
// x++ - will increment but return prev value of x
// ++x - will increment and return new value of x
const largeDeposits2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, curr) => curr >= 1000 ? ++count : count, 0);
// console.log('Amount of large deposits:', largeDeposits2);

//  task 3 Create an object with sum of deposits and withdrawals (with reduce method)

const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce((sums, curr) => {
    // curr > 0 ? sums.deposits += curr : sums.withdrawals += curr;
    sums[curr > 0 ? "deposits" : "withdrawals"] += curr;
    return sums;
  }, { deposits: 0, withdrawals: 0 }); // building a new object

// console.log('deposits', deposits);
// console.log('withdrawals', withdrawals);

// task 4 create simple string to a title case
const convertTitleCase = (str) => {
  const exceptions = ["a", "an", "and", "the", "but", "or", "on", "in", "with"];

  const titleCase = str
    .toLowerCase()
    .split(" ")
    .map(word => exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1))
    .join(" ");
  return titleCase;
};

const test1 = convertTitleCase("i will go to a pub, in the downtown at night with my friends in a taxi");
const test2 = convertTitleCase("lord of the rings: the two towers");
// console.log('test1', test1);
// console.log('test2', test2);

// Coding challenge #4

// fake data
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
// Hints:
// § Use many different tools to solve these challenges, you can use the summary
// lecture to choose between them 😉
// § Being within a range 10% above and below the recommended portion means:
// current > (recommended * 0.90) && current < (recommended *
// 1.10). Basically, the current portion should be between 90% and 110% of the
// recommended portion.

/* 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
the recommended food portion and add it to the object as a new property. Do
not create a new array, simply loop over the array. Forumla:
recommendedFood = weight ** 0.75 * 28. (The result is in grams of
food, and the weight needs to be in kg) */

dogs.forEach(el => el.recFood = Math.round(el.weight ** 0.75 * 28));
// console.log('dogs', dogs);

/* 2. Find Sarah's dog and log to the console whether it's eating too much or too
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
the owners array, and so this one is a bit tricky (on purpose) 🤓 */

const sarahDog = dogs.find(dog => dog.owners.includes("Sarah"));
// console.log('sarahDog', sarahDog);

const dietCheck = (dog) => {
  let decision = "";
  if (dog.curFood >= (dog.recFood * 0.90) &&
    dog.curFood <= (dog.recFood * 1.10)) {
    decision += "exactly enough.";
  } else if (dog.curFood > (dog.recFood * 1.10)) {
    decision += "too much!";
  } else if (dog.curFood < (dog.recFood * 0.90)) {
    decision += "too little!";
  }

  return console.log(`${dog.owners.length === 1 ? dog.owners[0] : dog.owners[0] + " and " + dog.owners[1]}'s dogs eat ${decision}`);

};

// dietCheck(sarahDog);

// dogs.forEach(dog => dietCheck(dog));

/* 3. Create an array containing all owners of dogs who eat too much
('ownersEatTooMuch') and an array with all owners of dogs who eat too little
('ownersEatTooLittle'). */

const ownersEatTooMuch = dogs.filter(dog => dog.curFood > (dog.recFood * 1.10)).flatMap(dog => dog.owners);
// console.log('ownersEatTooMuch', ownersEatTooMuch);
const ownersEatTooLittle = dogs.filter(dog => dog.curFood < (dog.recFood * 0.90)).flatMap(dog => dog.owners);
// console.log('ownersEatTooLittle', ownersEatTooLittle);

/* 4. Log a string to the console for each array created in 3., like this: "Matilda and
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
too little!" */

// console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
// console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);

// 5. Log to the console whether there is any dog eating exactly the amount of food
// that is recommended (just true or false)

// console.log(dogs.some(dog => dog.curFood === dog.recFood)); // false

// 6. Log to the console whether there is any dog eating an okay amount of food
// (just true or false)
// console.log(dogs.some(dog =>
// dog.curFood >= (dog.recFood * 0.90) &&
// dog.curFood <= (dog.recFood * 1.10))); //true

// 7. Create an array containing the dogs that are eating an okay amount of food (try
// to reuse the condition used in 6.)

const okayDogs = dogs.filter(dog =>
  dog.curFood >= (dog.recFood * 0.90) &&
  dog.curFood <= (dog.recFood * 1.10));
// console.log('okayDogs', okayDogs);

/*8. Create a shallow copy of the 'dogs' array and sort it by recommended food
portion in an ascending order (keep in mind that the portions are inside the
array's objects 😉)*/

const sortedDogs = dogs
  .slice()
  .sort((a, b) => a.recFood - b.recFood);

console.log('sortedDogs', sortedDogs);
