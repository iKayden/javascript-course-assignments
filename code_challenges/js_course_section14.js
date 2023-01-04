"use strict";
//Object Oriented Programming OOP with JS
// Constructor function
// const Person = function(firstName, birthYear) { //Can't use arrow func
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// 1 New obj is created
// const kayden = new Person("Kayden", 1992);
// 2 function is called, this = {}
// 3 {} linked to prototype
// console.log(kayden);
// 4 function automatically returns {obj}

// Creating Prototypes
// Person.prototype.calcAge = function(year = 2023) {
//   console.log(year - this.birthYear);
// };

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
// const PersonProto = {
//   calcAge() { //constructor function
//     console.log(2023 - this.birthYear);
//   },

//   init(name, birthYear) {
//     this.name = name,
//       this.birthYear = birthYear,
//       console.log(this.name, this.birthYear);
//   }
// };

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
// const myCar = new CarCl("Ford", 120);
// myCar.accelerate();
// myCar.brake();
// myCar.speedUS;
// myCar.currSpeed();
// myCar.speedUS = 100;
// myCar.speedUS;
// myCar.currSpeed();

// Inheritance between Classes: Construction functions

// const Person = function(firstName, birthYear) { //Can't use arrow func
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function(year = 2023) {
//   console.log(year - this.birthYear);
// };

// const Student = function(firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// To link Person and Student prototypes. Student inherits from Person
// do it before adding any extra prototypes
// Student.prototype = Object.create(Person.prototype); // {} will return an empty obj

// Student.prototype.introduce = function() { // {introduce} will fill it later
//   console.log(`My name is ${this.firstName}, I'm studying ${this.course}`);
// };
// Student.prototype.constructor = Student;
// const kay = new Student("Kay Kay", 1992, "Java Script");
// kay.introduce();
// kay.calcAge();
// console.log(kay.__proto__);

// Coding Challenge #3

// 1. Use a constructor function to implement an Electric Car (EV) as a CHILD class of Car.
// Make Car's inputs (make, currentSpeed + batteryCharge %)
const EV = function(make, speed, charge = 0) {
  Car.call(this, make, speed);
  this.charge = charge;

};
EV.prototype = Object.create(Car.prototype);
// 2. Implement a "chargeBattery" method which takes an argument "ChargeTo" and sets the battery charge to "ChargeTo"
EV.prototype.chargeBattery = function(chargeTo) {
  this.charge = chargeTo;
  console.log(`Your ${this.make} has been charged to ${this.charge}%`);
};
// 3. Implement an "accelerate" method that will increase the car's speed by 20 and decrease the charge by 1%. Then log a message (see).
EV.prototype.accelerate = function() {
  this.speed += 20;
  this.charge--;
  console.log(`${this.make} is going at ${this.speed} km/h, with a battery charge at ${this.charge}%`);
};

// 4. Create an electric car object and experiment with calling methods
// const kayCar = new EV("Tesla", 120, 23);
// kayCar.accelerate();
// kayCar.chargeBattery(99);
// kayCar.accelerate();
// kayCar.brake();
// kayCar.accelerate();

// ---------- Inheritance between classes and constructor ES6
class StudentCL extends PersonCL {
  constructor(fullName, birthYear, course) {
    // "super" call must happen first
    super(fullName, birthYear); //constructor function of the parent class
    this.course = course;
  }

  introduce() { // {introduce} will fill it later
    console.log(`My name is ${this.fullName} and I am ${2023 - this.birthYear} studying ${this.course}`);
  };
  calcAge() {
    console.log(`I'm ${2023 - this.birthYear} years old!`);
  }
}

const bro = new StudentCL("Broseph Stallion", 2000, "Alpha Bro");
bro.introduce();
bro.calcAge();
//--------- Using prototypes and Object.create to link inheritance
const PersonProto = {
  calcAge() { //constructor function
    console.log(2023 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
    console.log(this.firstName, this.birthYear);
  }
};

const steve = Object.create(PersonProto);
const StudentProto = Object.create(PersonProto); //Student inherits from Person
StudentProto.init = function(firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
const jay = Object.create(StudentProto);
jay.init("Jay", 2010, "Rocket Science");

StudentProto.introduce = function() { // {introduce} will fill it later
  console.log(`My name is ${this.firstName}, I'm studying ${this.course}`);
};
jay.introduce();
jay.calcAge(); // From Person Proto

// Bankist App Class -- Encapsulation Practice
// Public / Private  Fields and Methods
class Account {
  // Public Fields (on the instances)
  // locale = navigator.language;

  // Private Fields (#)
  #movements = [];
  #pin;


  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // protected property (verbally)
    this.#pin = pin;
    // this._movements = []; //makes an empty array for all new instances
    // this.locale = navigator.language;
    console.log(`New Account: ${this.owner}, currency: ${this.currency}`);
  }

  // Public Interface / Public Methods (everywhere)
  getMoves() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val); // better way
  }

  withdrawal(val) {
    this.deposit(-val);
  }


  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log('Loan is approved');
    }
  }
  // Private Methods
  // #approveLoan(val) { // No Browser support
  approveLoan(val) {
    return true;
  }

  //static method (are not available on instances only on the class itself)
  static helper() {
    console.log('Beware my friend');
  }
}

const acc1 = new Account("Kyrylo", "GRN", 1111);
// acc1.movements.push(155);  // Not A good way
// acc1.movements.push(-75); // Not A good way
acc1.deposit(155);     // Better way to manipulate properties
acc1.withdrawal(75); // Better way to manipulate properties
acc1.requestLoan(1000);
acc1.getMoves();
Account.helper(); // static method

// -----------Chaining Methods -------------
