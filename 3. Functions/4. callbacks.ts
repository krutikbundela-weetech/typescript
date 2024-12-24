// Function Types and Callbacks in TypeScript
// In TypeScript, you can use function types to define the shape of functions, including callbacks. This helps ensure type safety when passing functions as arguments or returning them from other functions.


function addAndHandle(num1: number, num: number, cb: (num: number) => void) {
  const result = num + num1;
  cb(result);
//   upper void che etle khbr padii jaai k aapde return value saathe koi  kaam krvaa nu nathi
  const value89 = cb(result);
}

addAndHandle(10, 20, (result) => {
  // anonymus function
  console.log(result);
//   return result;
  //void che to b return krvaa dei che coz it says "we'll ignore any result you might return so in addAndHandle where we get the callback function will not do anything with the return type" so that's why we'll be able to return something here without punishment
});



// Function Type
// A function type specifies:

// Parameters: The number and type of arguments the function accepts.
// Return Type: The type of the value the function returns.
// Example: Function Type
// typescript
// Copy code
// let multiply: (a: number, b: number) => number;

// multiply = (x, y) => x * y; // ✅ Works
// // multiply = (x: number, y: number, z: number) => x * y * z; // ❌ Error: Argument count mismatch
// // multiply = (x: string, y: string) => x + y; // ❌ Error: Type mismatch
// Using Callbacks
// A callback is a function passed as an argument to another function. Using function types, you can specify the shape of the callback to ensure it is used correctly.

// Example: Basic Callback
// typescript
// Copy code
// function processStrings(callback: (str: string) => string, input: string): string {
//     return callback(input);
// }

// const capitalize = (text: string): string => text.toUpperCase();

// console.log(processStrings(capitalize, "hello")); // Output: HELLO
// Callback Type: (str: string) => string specifies that the callback must:

// Accept a single argument of type string.
// Return a string.
// Result: The capitalize function matches this type and works as expected.

// Callback with Multiple Parameters
// You can define callbacks with multiple parameters.

// Example:
// typescript
// Copy code
// function calculate(a: number, b: number, callback: (x: number, y: number) => number): number {
//     return callback(a, b);
// }

// const add = (x: number, y: number): number => x + y;
// const multiply = (x: number, y: number): number => x * y;

// console.log(calculate(5, 3, add));       // Output: 8
// console.log(calculate(5, 3, multiply)); // Output: 15
// Optional Parameters in Callbacks
// You can use optional parameters in callbacks by appending a ?.

// Example:
// typescript
// Copy code
// function handleNumbers(callback: (num1: number, num2?: number) => number, a: number, b?: number): number {
//     return callback(a, b);
// }

// const add = (x: number, y: number = 0): number => x + y;

// console.log(handleNumbers(add, 10));       // Output: 10
// console.log(handleNumbers(add, 10, 5));    // Output: 15
// Defining Callback Types with Type Aliases
// You can reuse a function type for callbacks by defining a type alias.

// Example:
// typescript
// Copy code
// type Operation = (a: number, b: number) => number;

// function performOperation(op: Operation, x: number, y: number): number {
//     return op(x, y);
// }

// const subtract: Operation = (a, b) => a - b;

// console.log(performOperation(subtract, 10, 5)); // Output: 5
// Defining Callback Types with Interfaces
// An interface can also define the shape of a callback.

// Example:
// typescript
// Copy code
// interface StringManipulator {
//     (input: string): string;
// }

// function applyCallback(callback: StringManipulator, text: string): string {
//     return callback(text);
// }

// const reverse = (str: string): string => str.split("").reverse().join("");

// console.log(applyCallback(reverse, "hello")); // Output: olleh
// Higher-Order Functions
// Functions that accept callbacks or return other functions are called higher-order functions.

// Example:
// typescript
// Copy code
// function createMultiplier(factor: number): (value: number) => number {
//     return (value: number) => value * factor;
// }

// const double = createMultiplier(2);
// const triple = createMultiplier(3);

// console.log(double(5)); // Output: 10
// console.log(triple(5)); // Output: 15
// Error-Prone Scenarios with Callbacks
// Mismatched Types:
// typescript
// Copy code
// function process(callback: (a: number, b: number) => number) {
//     return callback(10, 20);
// }

// // process((x, y, z) => x + y + z); // ❌ Error: Too many arguments
// // process((x, y) => x + " " + y); // ❌ Error: Type mismatch
// Best Practices
// Use Explicit Function Types:

// Define the shape of callbacks clearly.
// Avoid using Function or overly generic types.
// Type Aliases and Interfaces:

// Use reusable types for callbacks.
// Prefer readability and reusability in code.
// Optional and Default Parameters:

// Define optional parameters when they are not always required.
// Use default values when suitable.
