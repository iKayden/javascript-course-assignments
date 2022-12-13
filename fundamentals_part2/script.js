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

// const calcTip = (bill) => {
//   let tip = 0;
//   if (bill >= 50 && bill <= 300) {
//     tip = bill * 0.15;
//     console.log(tip);
//   } else {
//     tip = bill * 0.20;
//     console.log(tip);
//   }
//   return tip;
// };

// const calcTipTernary = bill =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

// const bills = [125, 555, 44];

// const tips = [
//   calcTipTernary(bills[0]),
//   calcTipTernary(bills[1]),
//   calcTipTernary(bills[2]),
// ];
// console.log("tips arr", tips);

// const total = [
//   tips[0] + bills[0],
//   tips[1] + bills[1],
//   tips[2] + bills[2]
// ];

// console.log("Total arr: ", total);

// Coding challenge #3

const mark = {
  fullName: ["Mark", "Miller"],
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.BMI = Math.round(this.mass / (this.height ** 2));
    return this.BMI;
  }
};
const john = {
  fullName: ["John", "Smith"],
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    this.BMI = Math.round(this.mass / (this.height ** 2));
    return this.BMI;
  }
};

mark.calcBMI();
john.calcBMI();

console.log(
  `${mark.fullName[0]}'s BMI (${mark.BMI}) is ${mark.BMI > john.BMI ? "higher than" : "lower than "}John's (${john.BMI})`
)

