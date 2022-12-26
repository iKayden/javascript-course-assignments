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
  const exceptions = ["a", "an", "the", "but", "or", "on", "in", "with"];

  const titleCase = str
    .toLowerCase()
    .split(" ")
    .map(word => exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1))
    .join(" ");
  return titleCase;
};

const test1 = convertTitleCase("i will go to a pub, in the downtown at night with my friends in a taxi");
const test2 = convertTitleCase("lord of the rings: the two towers");
console.log('test1', test1);
console.log('test2', test2);
