// ### Coding Challenge 1
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

// ### Coding Challenge 2
// const BMI = mass / height ** 2;

// const markW = 78;
// const markH = 1.69;
// const markBMI = Math.round(markW / markH ** 2);

// const johnW = 92;
// const johnH = 1.95;
// const johnBMI = Math.round(johnW / johnH ** 2);

// const isMarkBetter = markBMI > johnBMI;
// const bmiDifference = isMarkBetter ? markBMI - johnBMI : johnBMI - markBMI;

// isMarkBetter ?
//   console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI}) by ${bmiDifference}`)
//   : console.log(`John's BMI (${johnBMI}) is better than Mark's (${markBMI}) by ${bmiDifference}`);;

// ### Coding Challenge 3

const averageScoreDolphins = Math.floor((96 + 18 + 89) / 3);
const averageScoreKoalas = Math.floor((88 + 93 + 110) / 3);
const minScore = 100;


if (averageScoreDolphins === averageScoreKoalas) {
  console.log(`It's a tie between these two! Dolphins (${averageScoreDolphins}) and Koalas (${averageScoreKoalas})`);

  if (averageScoreDolphins <= minScore) {
    console.log("Score is lower than required, so both teams are disqualified ");
  } else {
    console.log("Both teams scored higher than minimum score and will achieve rewards");
  }

} else if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= minScore) {
  console.log(`Dolphins(${averageScoreDolphins}) win the game over the Koalas (${averageScoreKoalas})! `);
} else if (averageScoreKoalas > averageScoreDolphins && averageScoreKoalas >= minScore) {
  console.log(`Koalas (${averageScoreKoalas}) win against Dolphins (${averageScoreDolphins})`);
} else {
  console.log("No one wins because they didn't reach the minimum score");
}
