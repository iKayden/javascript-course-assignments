'use strict'; // strict mode

// Coding Challenge #1

const calcAverage = (score1, score2, score3) => {
  return Math.floor((score1 + score2 + score3) / 3);
};

const checkWinner = (avgDolphins, avgKoalas) => {

  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win over team Koalas (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win over team Dolphins (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("Nobody wins!");
  }
  return;
};

const avgDolphins = calcAverage(530, 43, 71);
const avgKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(avgDolphins, avgKoalas));
