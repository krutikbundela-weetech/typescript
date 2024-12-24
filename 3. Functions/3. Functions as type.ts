// In TypeScript, the Function type is a built-in type that represents any JavaScript function. However, using the Function type is not recommended in most cases because it doesn't provide information about the arguments and return type of the function. Instead, TypeScript allows you to define the shape of functions using more specific types.

// Here’s a breakdown of using Function and how it compares to more specific function types:

// Using the Function Type
// The Function type is a generic type that matches any function. It doesn't specify the parameters or return type.

// Example:
// typescript
// Copy code
// let myFunction: Function;

// myFunction = () => console.log("Hello, world!");
// myFunction = (a: number, b: number) => a + b;
// myFunction = function (name: string) {
//     return `Hello, ${name}`;
// };
// You can assign any function to myFunction.
// TypeScript doesn’t enforce argument types or return types.

// *Example 

function add(num1: number, num: number): number {
    return num + num1;
}
function printResult(num: number): void {
  console.log("Result: " + num);
}

printResult(add(5, 12));

//* "Function" type aapva thi koi b function aa variable ma store krri sakaase.
// let combineValues:Function;

//* ahiya function ni proper retrun type and parameter type define kri che etle hve evi type naa j function aa variable maa store thai sakseeee
let combineValues: (a:number,b:number) => number;

combineValues = add;
// combineValues = printResult; //function type different che 
// combineValues = 5;


console.log("file: 3. Functions as type.ts:34 ~ combineValues:", combineValues);




// Drawbacks:
// typescript
// Copy code
// let func: Function;
// func = (x: number, y: number) => x + y;

// func(1, 2); // This works, but TypeScript won't enforce the argument or return types.

// func("hello", true); // No error at compile time!
// Better Alternative: Using Explicit Function Signatures
// Instead of Function, you can explicitly define the function's parameters and return type.

// Example:
// typescript
// Copy code
// let add: (a: number, b: number) => number;

// add = (a, b) => a + b; // ✅ Valid
// // add = (a, b, c) => a + b + c; // ❌ Error: Argument mismatch
// // add = (a: string, b: string) => a + b; // ❌ Error: Type mismatch
// Key Benefits:
// Type safety: Arguments and return types are checked.
// Clearer documentation of the expected function structure.
// Difference Between Function and Explicit Function Types
// Feature	Function Type	Explicit Function Signature
// Type Checking	Does not enforce argument or return types.	Enforces strict argument and return types.
// Flexibility	Allows any kind of function to be assigned.	Only allows functions that match the signature.
// Safety	Less safe due to lack of argument validation.	Safer with precise type validation.
// Example: Avoiding Function
// Using Function:
// typescript
// Copy code
// let myFunc: Function;

// myFunc = (a: number, b: number) => a + b;
// myFunc(1, 2); // Works

// myFunc("hello", "world"); // Also works, which is not intended!
// Using an Explicit Type:
// typescript
// Copy code
// let myFunc: (a: number, b: number) => number;

// myFunc = (a, b) => a + b; // ✅ Valid
// // myFunc = (a: string, b: string) => a + b; // ❌ Error
// When to Use Function
// Generic Callables: If you don't care about the argument types or return type.
// Highly Dynamic Code: When you're working with unknown or dynamic functions (e.g., callbacks of arbitrary shape).
// Example:
// typescript
// Copy code
// function execute(callback: Function) {
//     callback();
// }

// execute(() => console.log("Hello")); // ✅ Works
// execute((x: number) => console.log(x)); // ✅ Works, but argument type isn't checked
// Best Practice
// Avoid using Function unless necessary. Instead, use specific function types for better type safety and readability.