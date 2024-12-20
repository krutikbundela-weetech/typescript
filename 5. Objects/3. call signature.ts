//* The function call signature refers to the declaration or definition of a function, which includes the function's name, parameters, and return type. It defines the structure and typeinformation of a function without including the function's implementation or body.

//? lets add one function inside the object. It's more like creating a method in object

//? Very Important = call signatures are typically used inside object type notations to describe the shape of functions within object types.

type Student = {
  name: string;
  age: number;
  gender?: string;
//! this is  call signature
  greet:(country:string) => string
};

const student1: Student = {
  name: "krutik",
  age: 90,
  greet:(country):string => `I ${student1.name} am from ${country}`
};

const intro = (student1:Student):string => {
  const { name, age } = student1;
  return `${name} , ${age}`;
};


// * ChatGPT
// What is a Call Signature in TypeScript?
// A call signature in TypeScript is a way to define the type of a function, including its parameter types and return type, without explicitly declaring the function implementation. It is often used in interfaces or type aliases to describe the structure of callable entities.

// Syntax of a Call Signature
// A call signature is defined using the following syntax:

// typescript
// Copy code
// (parameterName: parameterType, ...): returnType;
// parameterName: The name of the parameter (optional, but recommended for clarity).
// parameterType: The type of the parameter.
// returnType: The type of the value the function will return.
// Examples of Call Signatures
// 1. Using a Call Signature in a Type Alias:
// typescript
// Copy code
// type Add = (a: number, b: number) => number;

// const add: Add = (x, y) => x + y;
// console.log(add(5, 10)); // Output: 15
// 2. Using a Call Signature in an Interface:
// typescript
// Copy code
// interface Formatter {
//     (value: string): string;
// }

// const format: Formatter = (input) => input.trim().toUpperCase();
// console.log(format("  hello world  ")); // Output: "HELLO WORLD"
// Optional and Default Parameters in Call Signatures
// Optional Parameters:
// You can define optional parameters using ?:

// typescript
// Copy code
// type Logger = (message: string, level?: string) => void;

// const log: Logger = (msg, lvl = "INFO") => {
//     console.log(`[${lvl}] ${msg}`);
// };

// log("System initialized");          // Output: [INFO] System initialized
// log("User not found", "WARNING");  // Output: [WARNING] User not found
// Rest Parameters in Call Signatures
// Rest parameters can also be used in call signatures:

// typescript
// Copy code
// type Summator = (...numbers: number[]) => number;

// const sum: Summator = (...nums) => nums.reduce((acc, num) => acc + num, 0);

// console.log(sum(1, 2, 3, 4)); // Output: 10
// Call Signatures in Overloads
// When a function can accept multiple sets of parameters, call signatures help describe these overloads:

// typescript
// Copy code
// interface OverloadedFunction {
//     (a: number, b: number): number;
//     (a: string, b: string): string;
// }

// const combine: OverloadedFunction = (x: any, y: any) => x + y;

// console.log(combine(5, 10));       // Output: 15
// console.log(combine("foo", "bar")); // Output: "foobar"
// Call Signatures vs Function Declarations
// Feature	Call Signature	Function Declaration
// Purpose	Describes the shape of a callable entity	Implements a callable entity
// Implementation	No	Yes
// Usage	Type alias, interfaces	Standalone functions
// Example	(a: number, b: number) => number	function add(a: number, b: number) {}
// Why Use Call Signatures?
// Flexibility: Allows defining callable structures without implementing them immediately.
// Reusability: Easily used in type aliases and interfaces for consistent type checking.
// Better Abstraction: Useful for higher-order functions, callbacks, and polymorphic functions.
// Let me know if you'd like further clarification or additional examples!