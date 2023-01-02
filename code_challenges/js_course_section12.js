// Numbers, Dates, Int and Timers

const future = new Date(2037, 10, 19, 15, 23);

const calcDaysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const tenDaysDiff = calcDaysPassed(new Date(2037, 10, 19), new Date(2037, 10, 09));
console.log(tenDaysDiff);
