// Section 9 Code Challenge #1
//Fake Data
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1 Create one player array for each team (variables 'players1' and 'players2')
// const [players1, players2] = game.players;
// 2 The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// const [gk, ...fieldPlayers] = players1;

// 3 Create an array 'allPlayers' containing all players of both teams (22 players)
// const allPlayers = [...players1, ...players2];

// 4 During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array('players1Final') containing all the original team1 players plus; 'Thiago', 'Coutinho' and 'Perisic';

// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

// 5 Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// const { team1, x: draw, team2 } = game.odds;

// 6 Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
const printGoals = (...players) => {
  players.forEach(player => console.log(player));
  return console.log(`Amount of goals is: ${players.length}`);
};
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);
// 7 The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator
// team1 < team2 && console.log('Team 1 wins');
// team1 > team2 && console.log('Team 2 wins');

/////////////////            Coding Challenge # 2
// 1 Loop over the game.scored array and print each player name to the console, along with the goal number
for (const [goalCount, whoScored] of game.scored.entries()) {
  console.log(`Goal ${goalCount + 1}: ${whoScored}`);
}

// 2 Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
const odds = Object.values(game.odds);
let avgOdd = 0;
for (const odd of odds) {
  avgOdd += odd;
}
avgOdd /= odds.length;
console.log(avgOdd);

// 3 Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} : ${odd}`);
}
// 4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this
// {
//   Gnarby: 1,
//   Hummels: 1,
//   Lewandowski: 2
//   }
const scorers = {};
