// Function that returns function
const greet = (greeting) => (n) => console.log(`${greeting} ${n}`);
// greet("Holla ")("amigo!");

// The bind Method with functions
const addTax = (rate, value) => value + value * rate;
// console.log('tax', addTax(0.20, 300));
const addVat = addTax.bind(null, 0.23);
// console.log('VAT', addVat(400));;

// Change function to return function
const addTaxRate = (rate) => (value) => value + value * rate;
const vat30 = addTaxRate(0.30);
// console.log(vat30(1000));
