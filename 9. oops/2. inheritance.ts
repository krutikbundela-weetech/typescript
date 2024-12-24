//* Inheritance allows a class to reuse the functionality of an existing class without rewriting it.
//? Inheritance is a mechanism in which one class acquires the property of  another class. For example, a child inherits the traits of his/her parents.

// class Persons {
//   name: string;
//   age: number;
//   hobbies: string[];

//   constructor(name: string, age: number, hobbies: string[]) {
//     this.name = name;
//     this.age = age;
//     this.hobbies = hobbies;
//   }
//   introduce(): string {
//     return `Hi, I'm ${this.name} and I'm ${
//       this.age
//     } years old. I love ${this.hobbies.join(", ")} .`;
//   }
// }


// class Students extends Persons {
//   grade: number;
//   constructor(name: string, age: number, hobbies: string[], grade: number) {
//     super(name, age, hobbies);
//     this.grade = grade;
//   }

//   introduce(): string {
//     return `${super.introduce()} I am in ${this.grade}`;
//   }
// }



// const perso1 = new Persons("raj", 189, ["reading"]);
// const perso2 = new Persons("gbuiyhi", 89, ["cooking"]);
// console.log(perso1.name);
// console.log(perso1.hobbies);

// const stud1 = new Students("gbuiyhi", 89, ["cooking"],1);





//****************************************** */

// Inheritance in TypeScript
// Inheritance is a mechanism in object-oriented programming that allows a class (child class) to derive properties and methods from another class (parent class). TypeScript uses the extends keyword to implement inheritance, enabling code reuse and the creation of hierarchical class structures.

// Syntax
// class ParentClass {
//   // Properties and methods of the parent class
// }

// class ChildClass extends ParentClass {
//   // Properties and methods of the child class
// }
// Example 1: Basic Inheritance
// class Animal {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   speak(): void {
//     console.log(`${this.name} makes a sound.`);
//   }
// }

// class Dog extends Animal {
//   constructor(name: string) {
//     super(name); // Calls the parent class constructor
//   }

//   speak(): void {
//     console.log(`${this.name} barks.`);
//   }
// }

// const dog = new Dog("Buddy");
// dog.speak(); // Output: Buddy barks.
// Key Concepts in Inheritance
// super Keyword

// Used to call the parent class constructor or access its properties/methods.
// Must be called in the constructor of the child class before using this.
// typescript
// Copy code
// class Vehicle {
//   constructor(public make: string, public model: string) {}
// }

// class Car extends Vehicle {
//   constructor(make: string, model: string, public doors: number) {
//     super(make, model); // Calls the parent constructor
//   }

//   displayInfo(): void {
//     console.log(`${this.make} ${this.model} with ${this.doors} doors.`);
//   }
// }

// const car = new Car("Toyota", "Corolla", 4);
// car.displayInfo(); // Output: Toyota Corolla with 4 doors.
// Method Overriding

// A child class can override methods of the parent class to provide specific behavior.
// typescript
// Copy code
// class Bird {
//   fly(): void {
//     console.log("The bird is flying.");
//   }
// }

// class Penguin extends Bird {
//   fly(): void {
//     console.log("Penguins can't fly, but they swim!");
//   }
// }

// const penguin = new Penguin();
// penguin.fly(); // Output: Penguins can't fly, but they swim!
// Access Modifiers and Inheritance

// public: Accessible anywhere, including in the child class.
// protected: Accessible within the class and its subclasses.
// private: Not accessible in the child class.
// typescript
// Copy code
// class Person {
//   public name: string;
//   protected age: number;
//   private ssn: string;

//   constructor(name: string, age: number, ssn: string) {
//     this.name = name;
//     this.age = age;
//     this.ssn = ssn;
//   }
// }

// class Employee extends Person {
//   constructor(name: string, age: number, ssn: string, public position: string) {
//     super(name, age, ssn);
//   }

//   getDetails(): string {
//     return `${this.name} is ${this.age} years old and works as a ${this.position}.`;
//     // `this.ssn` would throw an error because it is private
//   }
// }

// const emp = new Employee("Alice", 30, "123-45-6789", "Manager");
// console.log(emp.getDetails()); // Output: Alice is 30 years old and works as a Manager.
// Example 2: Multilevel Inheritance
// typescript
// Copy code
// class LivingBeing {
//   breathe(): void {
//     console.log("Breathing...");
//   }
// }

// class Mammal extends LivingBeing {
//   feedMilk(): void {
//     console.log("Feeding milk...");
//   }
// }

// class Human extends Mammal {
//   think(): void {
//     console.log("Thinking...");
//   }
// }

// const person = new Human();
// person.breathe();  // Output: Breathing...
// person.feedMilk(); // Output: Feeding milk...
// person.think();    // Output: Thinking...
// Example 3: Abstract Classes with Inheritance
// Abstract classes serve as a blueprint for other classes and cannot be instantiated. They can define abstract methods that must be implemented by subclasses.

// typescript
// Copy code
// abstract class Shape {
//   abstract getArea(): number;

//   display(): void {
//     console.log("Displaying the shape...");
//   }
// }

// class Circle extends Shape {
//   constructor(public radius: number) {
//     super();
//   }

//   getArea(): number {
//     return Math.PI * this.radius * this.radius;
//   }
// }

// class Rectangle extends Shape {
//   constructor(public width: number, public height: number) {
//     super();
//   }

//   getArea(): number {
//     return this.width * this.height;
//   }
// }

// const circle = new Circle(5);
// console.log(circle.getArea()); // Output: 78.53981633974483

// const rectangle = new Rectangle(4, 7);
// console.log(rectangle.getArea()); // Output: 28
// Example 4: Polymorphism
// With inheritance, you can use polymorphism to write more flexible and reusable code.

// typescript
// Copy code
// abstract class Employee {
//   constructor(public name: string) {}
//   abstract calculateSalary(): number;
// }

// class FullTimeEmployee extends Employee {
//   constructor(name: string, public salary: number) {
//     super(name);
//   }

//   calculateSalary(): number {
//     return this.salary;
//   }
// }

// class PartTimeEmployee extends Employee {
//   constructor(name: string, public hourlyRate: number, public hoursWorked: number) {
//     super(name);
//   }

//   calculateSalary(): number {
//     return this.hourlyRate * this.hoursWorked;
//   }
// }

// const employees: Employee[] = [
//   new FullTimeEmployee("Alice", 5000),
//   new PartTimeEmployee("Bob", 20, 120),
// ];

// employees.forEach((employee) => {
//   console.log(`${employee.name}: $${employee.calculateSalary()}`);
// });
// // Output:
// // Alice: $5000
// // Bob: $2400
// Benefits of Inheritance
// Code Reuse: Avoid code duplication by reusing logic from parent classes.
// Hierarchy: Establish relationships between classes to organize code.
// Polymorphism: Use the same interface or parent type for multiple child types.
// Scalability: Add new functionality without modifying existing code.
// Summary
// Inheritance is a fundamental feature in TypeScript that simplifies code organization and reuse by allowing classes to extend and build upon other classes. With additional features like access modifiers, abstract classes, and polymorphism, TypeScript enables developers to implement robust object-oriented designs.

// Let me know if you need further clarification or more examples! 😊


