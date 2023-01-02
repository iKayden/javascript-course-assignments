"use strict";
//Object Oriented Programming OOP with JS
// Constructor function
const Person = function(firstName, birthYear) { //Can't use arrow func
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};
// 1 New obj is created
// const kayden = new Person("Kayden", 1992);
// 2 function is called, this = {}
// 3 {} linked to prototype
// console.log(kayden);
// 4 function automatically returns {obj}

// Creating Prototypes
Person.prototype.calcAge = function(year = 2023) {
  console.log(year - this.birthYear);
};

// kayden.calcAge(2022);

// Coding Challenge #1

// Use a constructor func to implement a car

const Car = function(make, speed) {
  this.make = make;
  this.speed = speed;
  console.log(`This is a ${this.make}, it moves at ${this.speed} km/h`);
};
// Move functions into prototype methods
Car.prototype.accelerate = function() {
  this.speed += 10;
  console.log(`${this.make} speed is up to ${this.speed} km/h`);
};
Car.prototype.brake = function() {
  this.speed -= 5;
  console.log(`${this.make} speed is down to ${this.speed} km/h`);
};

// const bmw = new Car("BMW", 120);
// const mercedes = new Car("Mercedes", 95);
// bmw.accelerate();
// mercedes.accelerate();
// mercedes.brake();

// Class Declaration Info
//  1. Classes are NOT hoisted (use after declaration)
//  2. Classes are 1st class citizens (can pass and return from functions)
//  3. Classes are executed in the strict mode
class PersonCL {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Method (prototype) declaration in the class
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }
  // Pattern to set a property that already exists
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name; // _ to avoid naming conflict
    else console.log('Enter your full name');
  }

  get fullName() {
    return this._fullName;
  }
}
// Method (prototype) declaration outside of the class
// PersonCL.prototype.greet = function() {
//   console.log(`Hey, ${this.firstName}!`);
// };

const kayden = new PersonCL("Kayden Kharchenko", 1992);
console.log(kayden);
// kayden.calcAge();
// kayden.greet();

// console.log(kayden.age); // using getter from the class

// -------------Getters And Setters----------------
const account = {
  owner: "Kayden",
  movements: [200, 1000, 530, 142, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  }
};
// this is how setter works
account.latest = 50;
account.latest = 55;
// this is a getter (last value in the arr)
console.log(account.latest);
