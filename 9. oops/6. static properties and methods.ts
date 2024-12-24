//* STATIC PROPERTIES & METHODS

//* In TypeScript, static methods and properties belong to the class itself rather than to instances of the class. By making methods and properties static, we can access them directly from the class without needing to create an instance of the class. This is useful for utility functions or properties that don't rely on instance-specific data.

//? Example: Math Operations Utility - creating a utility class to perform various mathematical operations.


class MathOperations{
    public static PI:number = Math.PI;
    public static add(num1:number,num2:number){
        return num1+ num2;
    }
    public static subs(num1:number,num2:number){
        return num1 - num2;
    }
}

console.log(MathOperations.PI);
console.log(MathOperations.add(12,22));
console.log(MathOperations.subs(122,22));



// Static Properties and Methods in TypeScript
// In TypeScript, the static keyword allows you to define properties and methods that belong to a class rather than an instance of the class. This means you can access static members directly on the class itself without needing to create an instance.

// Key Characteristics of Static Members
// Static properties and methods are shared across all instances of the class.
// They can be accessed using the class name (e.g., ClassName.property).
// Static members cannot access non-static properties or methods directly, as they do not belong to a specific instance.
// Static Property Example
// typescript
// Copy code
// class Counter {
//   public static count: number = 0; // Static property

//   public static increment(): void {
//     Counter.count++;
//   }

//   public static decrement(): void {
//     Counter.count--;
//   }
// }

// console.log(Counter.count); // Output: 0
// Counter.increment();
// console.log(Counter.count); // Output: 1
// Counter.decrement();
// console.log(Counter.count); // Output: 0
// In this example:

// count is a static property shared by all instances of the Counter class.
// The increment and decrement methods operate on the static property.
// Static Method Example
// typescript
// Copy code
// class MathUtils {
//   public static add(a: number, b: number): number {
//     return a + b;
//   }

//   public static subtract(a: number, b: number): number {
//     return a - b;
//   }
// }

// console.log(MathUtils.add(5, 3)); // Output: 8
// console.log(MathUtils.subtract(5, 3)); // Output: 2
// In this example:

// The add and subtract methods can be called directly on the MathUtils class without creating an instance.
// Example with Static and Non-Static Members
// typescript
// Copy code
// class Logger {
//   public static logCount: number = 0; // Static property

//   public logMessage(message: string): void {
//     Logger.logCount++; // Accessing static property
//     console.log(`Log #${Logger.logCount}: ${message}`);
//   }
// }

// const logger1 = new Logger();
// logger1.logMessage("First message");
// logger1.logMessage("Second message");

// const logger2 = new Logger();
// logger2.logMessage("Third message");

// console.log(Logger.logCount); // Output: 3
// Here:

// The logCount is shared across all instances of the Logger class.
// Both logger1 and logger2 increment the same logCount.
// Static vs Non-Static
// Aspect	Static	Non-Static
// Belongs To	The class itself	Individual instances of the class
// Access	Accessed via the class name (e.g., ClassName.member)	Accessed via an instance of the class
// Instance Access	Cannot access instance properties or methods	Can access both instance and static members
// Shared State	Shared across all instances of the class	Unique to each instance of the class
// Real-World Use Case: Singleton Pattern
// The static keyword is often used to implement the Singleton Pattern, ensuring only one instance of a class exists.

// typescript
// Copy code
// class Singleton {
//   private static instance: Singleton | null = null;

//   private constructor() {
//     // Private constructor prevents direct instantiation
//   }

//   public static getInstance(): Singleton {
//     if (this.instance === null) {
//       this.instance = new Singleton();
//     }
//     return this.instance;
//   }

//   public sayHello(): void {
//     console.log("Hello from Singleton!");
//   }
// }

// const singleton1 = Singleton.getInstance();
// const singleton2 = Singleton.getInstance();

// console.log(singleton1 === singleton2); // Output: true
// singleton1.sayHello(); // Output: Hello from Singleton!
// Key Notes
// Use static for members that are shared across all instances or belong to the class itself.
// Static members cannot access this, as they are not tied to a specific instance.
// Static properties and methods can be useful for utility functions, constants, and shared state.