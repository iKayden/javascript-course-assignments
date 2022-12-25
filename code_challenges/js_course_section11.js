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
