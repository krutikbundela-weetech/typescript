//* **********************************
//* How to crate a class and also instance of class in TS
//* *************************************

//* A class in terms of OOP is a blueprint for creating objects
//* A class is like a blueprint for creating similar things.

//? In TypeScript, there is a convention to use PascalCase (also known as UpperCamelCase) for class names. This means that class names should start with a capital letter and each subsequent word in the class name should also begin with a capital letter.



// class Classroom{
//     name:string;
//     age: number;
//     hobbies:string[];

//     constructor(name:string,age:number,hobbies:string[]){
//         this.name = name;
//         this.age = age;
//         this.hobbies = hobbies;
//     }
// }

// const stud1 = new Classroom("raj", 189, ["reading"]);
// console.log(stud1.name);
// console.log(stud1.hobbies);



//************************************************ */




// Classes in TypeScript
// In TypeScript, a class is a blueprint for creating objects. Classes encapsulate data (properties) and behaviors (methods) and provide a structure for object-oriented programming. TypeScript enhances JavaScript classes by adding strong typing, access modifiers, and other features.

// Basic Syntax
// typescript
// Copy code
// class ClassName {
//   propertyName: type; // Property declaration
//   constructor(parameters: type) {
//     // Initialization logic
//   }
//   methodName(): returnType {
//     // Method logic
//   }
// }
// Example 1: Simple Class
// typescript
// Copy code
// class Person {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   greet(): void {
//     console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
//   }
// }

// const person1 = new Person("Alice", 30);
// person1.greet();  // Output: Hi, my name is Alice and I am 30 years old.
// Example 2: Access Modifiers
// TypeScript provides three access modifiers for class members:

// public: Default; accessible anywhere.
// private: Accessible only within the class.
// protected: Accessible within the class and its subclasses.
// typescript
// Copy code
// class Employee {
//   public name: string;        // Can be accessed from anywhere
//   private salary: number;     // Can only be accessed within the class
//   protected position: string; // Can be accessed in the class and its subclasses

//   constructor(name: string, salary: number, position: string) {
//     this.name = name;
//     this.salary = salary;
//     this.position = position;
//   }

//   public displayInfo(): void {
//     console.log(`${this.name} works as a ${this.position}`);
//   }
// }

// class Manager extends Employee {
//   public getPosition(): string {
//     return this.position; // Allowed because 'position' is protected
//   }
// }

// const emp = new Employee("Bob", 50000, "Developer");
// emp.displayInfo(); // Output: Bob works as a Developer
// // console.log(emp.salary); // Error: 'salary' is private
// Example 3: Readonly Properties
// You can use the readonly modifier to create properties that can only be initialized during declaration or in the constructor.

// typescript
// Copy code
// class Book {
//   readonly title: string;

//   constructor(title: string) {
//     this.title = title;
//   }
// }

// const book = new Book("TypeScript Guide");
// console.log(book.title); // Output: TypeScript Guide
// // book.title = "New Title"; // Error: Cannot assign to 'title' because it is a read-only property.
// Example 4: Inheritance
// Classes can inherit properties and methods from another class using the extends keyword.

// typescript
// Copy code
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
//     super(name); // Call the parent class constructor
//   }

//   speak(): void {
//     console.log(`${this.name} barks.`);
//   }
// }

// const dog = new Dog("Buddy");
// dog.speak(); // Output: Buddy barks.
// Example 5: Static Members
// Static properties and methods belong to the class itself, not to instances of the class.

// typescript
// Copy code
// class MathUtils {
//   static PI: number = 3.14159;

//   static calculateArea(radius: number): number {
//     return MathUtils.PI * radius * radius;
//   }
// }

// console.log(MathUtils.PI); // Output: 3.14159
// console.log(MathUtils.calculateArea(5)); // Output: 78.53975
// Example 6: Getters and Setters
// Getters and setters allow you to control how properties are accessed or modified.

// typescript
// Copy code
// class Rectangle {
//   private _width: number;
//   private _height: number;

//   constructor(width: number, height: number) {
//     this._width = width;
//     this._height = height;
//   }

//   get area(): number {
//     return this._width * this._height;
//   }

//   set width(value: number) {
//     if (value <= 0) throw new Error("Width must be positive.");
//     this._width = value;
//   }
// }

// const rect = new Rectangle(10, 20);
// console.log(rect.area); // Output: 200
// rect.width = 15;
// console.log(rect.area); // Output: 300
// Example 7: Abstract Classes
// Abstract classes cannot be instantiated and are used as base classes for other classes. They can define abstract methods that must be implemented by subclasses.

// typescript
// Copy code
// abstract class Shape {
//   abstract getArea(): number;

//   display(): void {
//     console.log("Displaying shape...");
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

// const circle = new Circle(5);
// circle.display(); // Output: Displaying shape...
// console.log(circle.getArea()); // Output: 78.53981633974483
// Example 8: Implements Interface
// A class can implement an interface to ensure it adheres to a specific structure.

// typescript
// Copy code
// interface Vehicle {
//   make: string;
//   model: string;
//   drive(): void;
// }

// class Car implements Vehicle {
//   make: string;
//   model: string;

//   constructor(make: string, model: string) {
//     this.make = make;
//     this.model = model;
//   }

//   drive(): void {
//     console.log(`Driving a ${this.make} ${this.model}`);
//   }
// }

// const car = new Car("Toyota", "Corolla");
// car.drive(); // Output: Driving a Toyota Corolla
// Key Features of Classes in TypeScript
// Constructors: Special methods used for initializing class properties.
// Access Modifiers: Control the visibility of properties and methods (public, private, protected).
// Inheritance: Use the extends keyword to inherit from another class.
// Static Members: Define members that belong to the class itself, not its instances.
// Readonly Properties: Create immutable properties.
// Abstract Classes: Provide a blueprint for derived classes.
// Getters and Setters: Control access to properties.
// Summary
// Classes in TypeScript are a powerful way to organize code and ensure type safety in object-oriented programming. With additional features like static members, access modifiers, and abstract classes, TypeScript enhances JavaScript classes to create more robust and maintainable applications.

// Let me know if you'd like further clarification or more examples! 😊
