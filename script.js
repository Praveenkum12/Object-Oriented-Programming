'use strict';

// const Person = function (firstName, birthyear) {
//   this.firstName = firstName;
//   this.birthyear = birthyear;
// };

// const jonas = new Person('Jonas', 1991);
// const termi = new Person('Praveen', 2000);

// Person.prototype.calcAge = function () {
//   console.log(2022 - this.birthyear);
// };

// Person.prototype.species = 'HOMO SAPIENS';
// console.log(jonas, termi);
// jonas.calcAge();

// const car = {
//   make:this.
// }

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   console.log(`Accelerate is ${(this.speed += 10)} km/h`);
// };

// Car.prototype.brake = function () {
//   console.log(`Brake is ${(this.speed -= 5)} km/h`);
// };

// const BMW = new Car('BMW', 120);
// const Mercedes = new Car('Mercedez', 95);

// BMW.accelerate();
// BMW.accelerate();
// BMW.accelerate();
// BMW.brake();

// Mercedes.accelerate();
// Mercedes.brake();

// const Person = function (firstName, birthyear) {
//   console.log(this);
// };

// Person.prototype.calcAge = function () {
//   console.log(2022 - this.birthyear);
// // };

// const jonas = [1, 2, 3];
// console.log(jonas.__proto__);

// console.log(jonas);

// jonas.calcAge();

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed}`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed}`);
//   }

//   get speedUs() {
//     return this.speed / 1.6;
//   }

//   set speedUs(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const bmw = new Car('BMW', 205);
// const mercedez = new Car('Mercedez', 195);

// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.accelerate();

// console.log(bmw);
// console.log(bmw.speedUs);
// console.log(bmw);
// bmw.speedUs = 210;
// console.log(bmw);

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.intro = function () {
//   console.log(
//     `Hi, this is ${this.firstName} and I am a ${this.course} student.`
//   );
// };

// Person.prototype.calcAge = function () {
//   console.log(2022 - this.birthYear);
// };

// Student.prototype.constructor = Student;
// const mike = new Student('Michael Myer', 1879, 'Computer Science');

// console.log(mike);
// console.dir(Student.prototype.constructor);

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`Accelerate is ${this.speed} km/h`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`Brake is ${this.speed} km/h`);
    return this;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
  }

  accelerate() {
    this.speed += 20;
    this.charge--;
    console.log(
      `Accelerate is ${this.speed} km/h, with charge of ${this.#charge}`
    );
    return this;
  }
}

const rivian = new EVCl('TRivian', 120, 23);

// console.log(tesla.#charge);

// class Person {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   calcage() {
//     console.log(`Hi ${this.firstName}, Your age is ${2022 - this.birthYear}`);
//   }
// }

// class Student extends Person {
//   constructor(firstName, birthYear, course) {
//     super(firstName, birthYear);
//     this.course = course;
//   }
//   calcage() {
//     console.log(
//       `My age is ${2022 - this.birthYear} but as a student I feel like ${
//         2022 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const termi = new Student('Praveen', 2000);
// termi.calcage();
