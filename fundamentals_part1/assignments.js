
// const country = "Ukraine";
// const continent = "Europe";
// let population = 48;
// const isIsland = false;
// const language = "Ukrainian";
// const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

// population > 33 ?
//   console.log(`${country}'s population is above average`) :
//   console.log(`${country} population is below average`);

// console.log(description);

// const BMI = mass / height ** 2;

const markW = 78;
const markH = 1.69;
const markBMI = Math.round(markW / markH ** 2);

const johnW = 92;
const johnH = 1.95;
const johnBMI = Math.round(johnW / johnH ** 2);

const isMarkBetter = markBMI > johnBMI;
const bmiDifference = isMarkBetter ? markBMI - johnBMI : johnBMI - markBMI;

isMarkBetter ?
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI}) by ${bmiDifference}`)
  : console.log(`John's BMI (${johnBMI}) is better than Mark's (${markBMI}) by ${bmiDifference}`);;
