"use strict";
//Object Oriented Programming OOP with JS
// Constructor function
const Person = function(firstName, birthYear) { //Can't use arrow func
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};
// 1 New obj is created
const kayden = new Person("Kayden", 1992);
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

  this.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} speed is up to ${this.speed} km/h`);
  };
  this.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} speed is down to ${this.speed} km/h`);
  };
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);
bmw.accelerate();
mercedes.accelerate();
mercedes.brake();
