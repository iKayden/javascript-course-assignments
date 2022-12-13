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

const calcTip = (bill) => {
  let tip = 0;
  if (bill >= 50 && bill <= 300) {
    tip = bill * 0.15;
    console.log(tip);
  } else {
    tip = bill * 0.20;
    console.log(tip);
  }
  return tip;
};

const bills = [125, 555, 44];

const tips = [
  calcTip(bills[0]),
  calcTip(bills[1]),
  calcTip(bills[2]),
];
console.log("tips arr", tips);

const total = [
  calcTip(bills[0]) + bills[0],
  calcTip(bills[1]) + bills[1],
  calcTip(bills[2]) + bills[2]
];

console.log("Total arr: ", total);
