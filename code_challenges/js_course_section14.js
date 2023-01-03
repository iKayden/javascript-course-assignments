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

//
//  1. Classes are NOT hoisted (use after declaration)
//  2. Classes are 1st class citizens (can pass and return from functions)
//  3. Classes are executed in the strict mode
class PersonCL {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Instance Method (prototype) declaration in the class
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
  // Adding static methods (not available on the instances of the class, only on the class itself)
  static hey() {
    console.log(`Hey there, ${this}!`);
  }
}
// Instance Method (prototype) declaration outside of the class
// PersonCL.prototype.greet = function() {
//   console.log(`Hey, ${this.firstName}!`);
// };

const kayden = new PersonCL("Kayden Kharchenko", 1992);
// console.log(kayden);
// kayden.calcAge();
// kayden.greet();
// kayden.hey() // WON'T WORK because used on the instance of the class
// PersonCL.hey(); // Will work
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
// console.log(account.latest);

// ------------ Object.create ----------
const PersonProto = {
  calcAge() { //constructor function
    console.log(2023 - this.birthYear);
  },

  init(name, birthYear) {
    this.name = name,
      this.birthYear = birthYear,
      console.log(this.name, this.birthYear);
  }
};

// const person = Object.create(PersonProto); //links the empty obj to the Class proto inheritance
// person.name = "Bot";
// person.birthYear = 1895;
// console.log(person);
// person.calcAge();

// console.log(person.__proto__);

// const kris = Object.create(PersonProto);
// kris.init("Kris", 1995);
// kris.calcAge();

// Coding Challenge #2

// 1. Redo Challenge 1 using ES6 class
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
    console.log(`This is a ${this.make}, it moves at ${this.speed} km/h`);
  }
  accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} speed is up to ${this.speed} km/h`);
  };
  brake = function() {
    this.speed -= 5;
    console.log(`${this.make} speed is down to ${this.speed} km/h`);
  };
  // 2. Add a getter called "speedUS"
  get speedUS() {
    const miles = this.speed / 1.6;
    console.log(`${this.speed} km/h is ${miles} mi/h`);
    return miles;
  }

  currSpeed = function() {
    console.log(`You are going at ${this.speed} km/h`);
    return;
  };

  set currSpeed(s) { }

  // 3. Add a setter called "speedUS"
  set speedUS(mi) {
    return this.speed = mi * 1.6;
  }
}


// 4. Create a new car and experiment with methods
const myCar = new CarCl("Ford", 120);
myCar.accelerate();
myCar.brake();
myCar.speedUS;
myCar.currSpeed();
myCar.speedUS = 100;
myCar.speedUS;
myCar.currSpeed();
