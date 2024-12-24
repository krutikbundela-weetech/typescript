// Function overloading in TypeScript allows you to define multiple function signatures for a single function, enabling the function to behave differently based on the types or number of arguments passed to it. Overloading doesn't create multiple separate functions; instead, you define one function with multiple type signatures, and TypeScript determines which version of the function to call based on the input types.

// Basic Syntax of Function Overloading
// typescript
// Copy code
// function functionName(param: Type1): ReturnType;
// function functionName(param: Type2): ReturnType;
// function functionName(param: Type3): ReturnType;

// // The actual implementation
// function functionName(param: any): ReturnType {
//     // Function logic here
// }
// Overload Signatures: These are the function signatures that describe the different possible ways the function can be called.
// Implementation Signature: This is the actual function that implements the logic. It should handle all cases described by the overload signatures.
// Example 1: Basic Function Overloading
// Let's say we want a function greet that can greet both a person by name or a group of people:

// typescript
// Copy code
// // Overload Signatures
// function greet(name: string): string;
// function greet(names: string[]): string;

// // Implementation
// function greet(names: any): string {
//     if (typeof names === 'string') {
//         return `Hello, ${names}!`;
//     } else if (Array.isArray(names)) {
//         return `Hello, ${names.join(', ')}!`;
//     }
//     return "Hello!";
// }

// console.log(greet("Alice"));  // Output: "Hello, Alice!"
// console.log(greet(["Alice", "Bob"]));  // Output: "Hello, Alice, Bob!"
// Here:

// The first overload signature handles when name is a single string.
// The second overload signature handles when names is an array of strings.
// The implementation of the function handles both cases.
// Example 2: Overloading with Return Type Based on Arguments
// A more complex example would be a function that returns a string when given a number and a boolean when given a string.

// typescript
// Copy code
// // Overload Signatures
// function process(input: number): string;
// function process(input: string): boolean;

// // Implementation
// function process(input: any): any {
//     if (typeof input === 'number') {
//         return `The number is: ${input}`;
//     } else if (typeof input === 'string') {
//         return input.length > 0;
//     }
// }

// console.log(process(42));    // Output: "The number is: 42"
// console.log(process("Hello"));  // Output: true
// console.log(process(""));  // Output: false
// Here:

// The first overload signature returns a string when a number is passed.
// The second overload signature returns a boolean when a string is passed.
// Example 3: Overloading with Optional Parameters
// You can use overloading with optional parameters to allow the function to behave differently based on the number of arguments passed.

// typescript
// Copy code
// // Overload Signatures
// function add(a: number, b: number): number;
// function add(a: number, b?: number): string;

// // Implementation
// function add(a: number, b?: number): any {
//     if (b !== undefined) {
//         return a + b;
//     } else {
//         return `Only one number provided: ${a}`;
//     }
// }

// console.log(add(5, 10));  // Output: 15
// console.log(add(5));      // Output: "Only one number provided: 5"
// Here:

// The first overload signature allows adding two numbers.
// The second overload signature handles the case where only one number is provided and returns a string instead of a number.
// Key Points about Function Overloading
// Overload Signatures: You define multiple type signatures for the same function, but the implementation can only have one version.
// Function Implementation: The implementation function must handle all cases that are described by the overload signatures.
// Type Narrowing: TypeScript uses the type of the arguments to determine which overload to call.
// Return Type: You can have different return types based on input types.
// Optional Parameters: Overloading also works with optional parameters to create more flexible functions.
// Example 4: Overloading with More Complex Signatures
// typescript
// Copy code
// // Overload Signatures
// function handleData(input: string): string;
// function handleData(input: number): number;
// function handleData(input: boolean): boolean;

// // Implementation
// function handleData(input: any): any {
//     if (typeof input === 'string') {
//         return `String received: ${input}`;
//     } else if (typeof input === 'number') {
//         return input * 2;
//     } else if (typeof input === 'boolean') {
//         return !input;
//     }
// }

// console.log(handleData("Hello"));  // Output: "String received: Hello"
// console.log(handleData(42));       // Output: 84
// console.log(handleData(true));     // Output: false
// Important Considerations
// Overload Resolution: TypeScript will resolve the appropriate overload based on the argument types.
// Single Implementation: There must only be one implementation for all overloads, even though you can have multiple overload signatures.
// No Implicit Return Type: The implementation function should be defined to return an appropriate type that matches all overload signatures.
// Function overloading is powerful when you want a function to handle different types of inputs in a type-safe way. Let me know if you'd like more examples or clarification! 😊