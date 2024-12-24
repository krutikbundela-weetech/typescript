// Access Modifiers in TypeScript
// Access modifiers determine the visibility of properties and methods within a class. TypeScript provides three main access modifiers:

// public
// protected
// private
// These modifiers control how class members are accessed in the context of the class itself, derived classes (inheritance), and outside the class.

// 1. Public
// Default modifier: If no access modifier is specified, the member is public by default.
// Visibility: Accessible from anywhere (inside the class, derived classes, and outside the class).
// Example:

// typescript
// Copy code
// class Person {
//   public name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   public greet(): void {
//     console.log(`Hello, my name is ${this.name}.`);
//   }
// }

// const person = new Person("Alice");
// person.greet(); // Output: Hello, my name is Alice.
// console.log(person.name); // Output: Alice
// 2. Protected
// Visibility: Accessible within the class and its subclasses (derived classes).
// Cannot be accessed directly from outside the class or its subclasses.
// Example:

// typescript
// Copy code
// class Animal {
//   protected type: string;

//   constructor(type: string) {
//     this.type = type;
//   }

//   protected displayType(): void {
//     console.log(`I am a ${this.type}.`);
//   }
// }

// class Dog extends Animal {
//   constructor() {
//     super("Dog");
//   }

//   public bark(): void {
//     console.log("Woof!");
//     this.displayType(); // Accessible within a subclass
//   }
// }

// const dog = new Dog();
// dog.bark(); // Output: Woof! I am a Dog.
// // dog.displayType(); // Error: Property 'displayType' is protected
// 3. Private
// Visibility: Accessible only within the class in which it is defined.
// Not accessible in derived classes or outside the class.
// Example:

// typescript
// Copy code
// class BankAccount {
//   private balance: number;

//   constructor(initialBalance: number) {
//     this.balance = initialBalance;
//   }

//   public deposit(amount: number): void {
//     this.balance += amount;
//     console.log(`Deposited ${amount}. New balance: ${this.balance}`);
//   }

//   private calculateInterest(): number {
//     return this.balance * 0.05; // Example: 5% interest
//   }
// }

// const account = new BankAccount(100);
// account.deposit(50); // Output: Deposited 50. New balance: 150
// // account.calculateInterest(); // Error: Property 'calculateInterest' is private
// 4. Readonly Modifier
// While not technically an access modifier, the readonly keyword is often used to make properties immutable after initialization.

// Example:

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
// // book.title = "New Title"; // Error: Cannot assign to 'title' because it is a read-only property
// Combining Access Modifiers with Constructor Parameters
// TypeScript allows shorthand for declaring and initializing class properties directly in the constructor by prefixing the parameters with public, protected, or private.

// Example:

// typescript
// Copy code
// class Employee {
//   constructor(public name: string, private salary: number) {}

//   public getSalary(): number {
//     return this.salary;
//   }
// }

// const employee = new Employee("Bob", 50000);
// console.log(employee.name); // Output: Bob
// console.log(employee.getSalary()); // Output: 50000
// // console.log(employee.salary); // Error: Property 'salary' is private
// Comparison Table
// Modifier	Class	Subclass	Outside the Class
// public	✅	✅	✅
// protected	✅	✅	❌
// private	✅	❌	❌
// Why Use Access Modifiers?
// Encapsulation: Control how and where properties and methods can be accessed.
// Data Hiding: Prevent unintended access to sensitive data.
// Improved Maintenance: Clearly defined interfaces reduce the risk of breaking changes.
