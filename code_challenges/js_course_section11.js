/* Coding Challenge #1
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old. */


// Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
const checkDogs = function(arrJ, arrK) {
  // 1. Julia found out that the owners of the first and the last two dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
  const fixJulArr = arrJ.slice(1, -1);
  // console.log('Julia', fixJulArr);
  // 2. Create an array with both Julia's (corrected) and Kate's data;
  const allDogs = [...fixJulArr, ...arrK];
  // console.log('All dogs', allDogs);
  // 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶 ");
  allDogs.forEach((dog, i) => {
    const isAdult = dog >= 3 ? "an adult 🐕" : "still a puppy 🐶";
    // console.log(`Dog number ${i + 1} is ${isAdult} and is ${dog} ${dog == 1 ? "year" : "years"} old.`);
  });
  // console.log('------END OF THE LOOP RUN---------');
};
// 4. Run the function for both test datasets Test;
// const data1 = checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// const data2 = checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);


// Coding Challenge #2

// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
const calcAverageHumanAge1 = (dogAges) => {
  // 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4
  const humanYearsDog = dogAges.map(age => age > 2 ? 16 + age * 4 : age * 2)
    // 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
    .filter(humanYears => humanYears >= 18);
  console.log(humanYearsDog);
  // 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
  const averageYears = Math.round(
    humanYearsDog.reduce((prev, curr, i, arr) => prev + curr / arr.length, 0)
  );
  console.log(`Average human age of all adult dogs is ${averageYears} years old`);

  return averageYears;
};
// 4. Run the function for both test datasets
// calcAverageHumanAge1([5, 2, 4, 1, 15, 8, 3]);

// [36, 4, 32, 2, 76, 48, 28]
// filtered [ 36, 32, 76, 48, 28 ]
// calcAverageHumanAge1([16, 6, 10, 5, 6, 1, 4]);

// [80, 40, 56, 36, 40, 2, 32]
// filtered [ 80, 40, 56, 36, 40, 32 ]

// Coding Challenge #3

// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
// as an arrow function, and using chaining!
const calcAverageHumanAge2 = (dogAges) =>
  Math.round(
    dogAges
      .map(age => age > 2 ? 16 + age * 4 : age * 2)
      .filter(humanYears => humanYears >= 18)
      .reduce((prev, curr, i, arr) => prev + curr / arr.length, 0)
  );

// const test1 = calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);
// const test2 = calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]);

// console.log(test1);
// console.log(test2);

//Array.from
// generate array with 100 random die rolls
const dieRolls100 = Array.from({ length: 100 }, () => Math.round(Math.random() * 100));
console.log('rolls', dieRolls100);

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
