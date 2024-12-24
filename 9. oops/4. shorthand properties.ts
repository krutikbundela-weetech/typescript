// Shorthand Properties in TypeScript
// Shorthand properties allow you to define and initialize class members in a concise way, especially when working with class constructors. Instead of manually declaring class properties and assigning values in the constructor, TypeScript provides a way to combine both declaration and initialization directly in the constructor's parameter list.

// Example Without Shorthand Properties
// Here’s how you would typically write a class without shorthand properties:

// typescript
// Copy code
// class Person {
//   public name: string;
//   public age: number;

//   constructor(name: string, age: number) {
//     this.name = name; // Explicit assignment
//     this.age = age;   // Explicit assignment
//   }
// }

// const person = new Person("Alice", 30);
// console.log(person.name); // Output: Alice
// console.log(person.age);  // Output: 30
// Example With Shorthand Properties
// Using shorthand properties, you can declare and initialize properties in one step by prefixing the constructor parameters with an access modifier (public, private, or protected).

// typescript
// Copy code
// class Person {
//   constructor(public name: string, public age: number) {} // Shorthand declaration
// }

// const person = new Person("Alice", 30);
// console.log(person.name); // Output: Alice
// console.log(person.age);  // Output: 30
// The public name and public age in the constructor automatically:
// Declare the properties name and age in the class.
// Initialize them with the values passed to the constructor.
// Benefits of Shorthand Properties
// Concise Code: Reduces boilerplate code by combining declaration and initialization.
// Improved Readability: Makes the code cleaner and easier to understand.
// Less Error-Prone: Reduces the chance of forgetting to assign constructor parameters to class properties.
// Usage with Other Access Modifiers
// You can also use private or protected with shorthand properties to control the visibility of the class members.

// Example with private:

// typescript
// Copy code
// class Employee {
//   constructor(private id: number, public name: string) {}

//   public getId(): number {
//     return this.id; // Accessing private property within the class
//   }
// }

// const employee = new Employee(101, "Bob");
// console.log(employee.name); // Output: Bob
// // console.log(employee.id); // Error: Property 'id' is private
// console.log(employee.getId()); // Output: 101
// Example with protected:

// typescript
// Copy code
// class Animal {
//   constructor(protected type: string) {}
// }

// class Dog extends Animal {
//   constructor() {
//     super("Dog");
//   }

//   public getType(): string {
//     return this.type; // Accessible within subclass
//   }
// }

// const dog = new Dog();
// console.log(dog.getType()); // Output: Dog
// // console.log(dog.type); // Error: Property 'type' is protected
// Read-Only Properties with Shorthand
// You can combine shorthand properties with the readonly modifier to make properties immutable after initialization.

// Example:

// typescript
// Copy code
// class Book {
//   constructor(public readonly title: string, public readonly author: string) {}
// }

// const book = new Book("1984", "George Orwell");
// console.log(book.title); // Output: 1984
// console.log(book.author); // Output: George Orwell
// // book.title = "Animal Farm"; // Error: Cannot assign to 'title' because it is a read-only property
// When to Use Shorthand Properties
// When the class properties are simple and do not require additional logic during initialization.
// When you want to reduce boilerplate code and make constructors more compact.
// Let me know if you'd 