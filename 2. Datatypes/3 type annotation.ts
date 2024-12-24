// ? Introduction To Types in TypeScript - P-4
// * In TypeScript, type annotation is a way of explicitly specifying the type of a variable, function parameter, or function return value.

// let num1:number
// num1 = "krutik";
// num1 = 10

// ! Advantages
//? It helps the TypeScript compiler to
//? enforce type checking and provide type safety during development.
//? what operations could we performed on that variable or value

//? Type annotations are expressed by using a colon (:) followed by desired type after the variable or function parameter declaration. there can be a space after the colon.


//! Important: Type Casing
// In TypeScript, you work with types like string or number all the times.

// Important: It is string and number (etc.), NOT String, Number etc.

// The core primitive types in TypeScript are all lowercase!

// *------------------
// * Number Type
// *------------------
//? the number type represents numeric values,including integers and floating-point numbers.

//TODO Arithmetic Operations:
//? Number types in TypeScript support arithmetic operations such as
//? addition (+), subtraction (-), multiplication(*), and division (/).
//? The result of these operations on numbers also of type number.

let myFavNum: number = 5;
let myAge: number = 29;
let pi: number = 3.147;
let myNegVal: number = -5;

//error
// let invalidResult: number = myAge + "Krutik";
// let invalidResult: number =  "Krutik";

// let computedValue: number = Math.sqrt(16);

// ? NaN

// let nanValue: number = NaN

// Assigning NaN (Not-a-Number) to a variable in TypeScript is valid because NaN is a valid value of the number type. Here's how it works:

// Code Example:
// let nanValue: number = NaN;
// console.log(nanValue); // Outputs: NaN
// Explanation:
// NaN is a Number: In JavaScript and TypeScript, NaN is a special numeric value representing an invalid number (e.g., the result of 0 / 0).
// number Type: Since NaN belongs to the number type, it can be assigned to a variable declared as number.
// Common Scenarios Where NaN Appears:
// Invalid Arithmetic Operations:

// typescript
// Copy code
// let result: number = 0 / 0; // NaN
// console.log(result); // Outputs: NaN
// Parsing Invalid Strings to Numbers:

// let parsedValue: number = Number("invalid");
// console.log(parsedValue); // Outputs: NaN
// Checking for NaN:
// To check if a value is NaN, use the isNaN function:

// if (isNaN(nanValue)) {
//     console.log("nanValue is NaN");
// }
// Important Notes:
// NaN is Not Equal to Itself: A peculiar property of NaN is that it is not equal to itself.

// console.log(NaN === NaN); // Outputs: false
// Use isNaN to check for NaN instead.

// TypeScript Type Safety: The type number accepts NaN without issues, but ensure you handle it appropriately in logic to avoid unintended bugs.

// *------------------
// * String Type
// *------------------

//* Any value under single of double quotes are treated as string, Also any exp. result string as output

let myFullName = "Krutik Bundela";
let myFirstName = "Krutik";
let MyLastName = "Bundela";

myFullName = myFirstName + MyLastName;
console.log("file: 3 type annotation.ts:92 ~ myFullName:", myFullName);
console.log("file: 3 type annotation.ts:92 ~ myFullName:", myFullName);

// ! Here are some practice questions related to string types in TypeScript:

// todo String Initialization:
//? Declare a variable message of type string and assign it the value "Hello,TypeScript !.

let msg: string = "Hello, Krutik!";

// todo Concatenation:
// ? Create two variables firstName and lastName of type string and assign them your first name and last name, respectively. Concatenate the two variables and store the result in a variable called fullName.

myFullName = myFirstName + MyLastName;

//todo String Length:
// ? Declare a variable sentence of type string and assign it a sentence of your choice. Find the length of the string and store it in a variable called sentenceLength.

let sentence: string = "this is string";
let sentenceLength: number = sentence.length;
console.log("file: 3 type annotation.ts:199 ~ sentenceLength:", sentenceLength);

// todo Uppercase and Lowercase:
// ? Declare a variable text of type string and assign it a sentence of your  choice. Convert the entire sentence to uppercase and store the result in a variable called uppercaseText. Then convert the entire sentence to lowercase and store the result in a variable called lowercaseText.

let text: string = "this is string";
let uppercaseText: string = text.toUpperCase();
let lowercaseText: string = text.toLowerCase();
console.log("file: 3 type annotation.ts:207 ~ uppercaseText:", uppercaseText);
console.log("file: 3 type annotation.ts:209 ~ lowercaseText:", lowercaseText);

// todo 👉  Substring:
// Declare a variable longText of type string and assign it a long sentence. Extract the first 10 characters from longText and store them in a variable called shortText.

const longText: string = "This is the long string of the longText variable";

const shortText: string = longText.substring(0, 10);

console.log("shortText:", shortText);

//  todo 👉  String Comparison:
// Declare two variables str1 and str2 of type string and assign them different sentences. Compare the two strings and store the result (true or false) in a variable called areEqual.

const str1: string = "hello";
const str2: string = "hi";

const areEqual: boolean = str1 == str2;

console.log("areEqual: ", areEqual);

//  todo 👉  String Template:
// Declare variables product and price of type string and number, respectively. Create a string using template literals to display the product and its price in the format "The product {product} is priced at {price} dollars."

const product: string = "Biscut";
const price: number = 34;

console.log(`The product ${product} is priced at ${price} dollars.`);

// *------------------
// * Boolean Type
// *------------------

//? In TypeScript, the boolean type represents a value that can be either true or false. It is one of the basic primitive types in the language.

let isMyName: boolean = true;
let isDone: boolean = false;

//!Question: Check Even Number
//* Write a TypeScript function called isEven that takes a number as a parameter and returns true if the number is even and false otherwise.

function isEven(anyNumber: number): boolean {
  if (anyNumber % 2) {
    return true;
  } else {
    return false;
  }
}

const result = isEven(10);

//todo write a TypeScript function called isDivisibleBy4And8 that takes a number as a parameter and returns true if the number is divisible by both 4 and 8.

function func(a: number): boolean {
  return (a % 4 && a % 8) === 0;
}
console.log(func(16));

// *------------------
// * BigInt Type
// *------------------

//? It is a built-in type that allows you to work with numbers that are larger than the range supported by the regular number type.

//?BigInt literals are written by appending the n suffix to an integer literal.
//? In JS we can't read the whole numbers beyond 2 raise to power 53

// let maxSafeNumber = Number.MAX_SAFE_INTEGER;
// let maxSafeNumber = (Number as any).MAX_SAFE_INTEGER;

// let maxNumber: bigint = 9000009090909009099090n;
// let newNumber: bigint = BigInt("9000009090909009099090");

//! Assignment
// var sum2 = bigNumber + anotherBigNumber;
// console.log("sum2 "+ sum2);

//* let difference = bigNumber - anotherBigNumber;

//* let product = bigNumber * anotherBigNumber;

//* let division = bigNumber / anotherBigNumber;

// *------------------
// * Any Type
// *------------------
//? The any type is the most flexible type in TypeScript. It essentially turns off all type checking for the variables or expressions it is applied to.

//? you will see any type when u first write the code

// let myFavNum1: any = 5;

// myFavNum1 = "krutik";

//! useCases
//* Working with Dynamic Data: When dealing with data from dynamic sources like user inputs, network responses, or deserialized JSON objects, the any type can be useful.

//* Migration from JavaScript: When migrating an existing JavaScript codebase to TypeScript, using the any type can be a convenient way to quickly annotate variables and functions without immediately specifying their precise type

// *------------------
// * unknown Type
// *------------------

//? The unknown type is a safer alternative to "any" because it still enforces type checking and type safety.
//? Variables of type unknown can hold values of any type, but you must perform type checks or type assertions before using them in specific ways.

let num2: unknown;
num2 = 5;
num2 = "thapa";
num2 = true;

if (typeof num2 === "number") {
  console.log(num2 + 5);
} else if (typeof num2 === "boolean") {
  console.log(num2);
}

async function fetchData(): Promise<unknown> {
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();
    return data;
}

async function processData() {
    const res = await fetchData();

    if (typeof res === "object") {
        //perform operations
    }
}







// *------------------
// * void Type
// *------------------

// ChatGPT said:
// ChatGPT
// In TypeScript, the void type represents the absence of a return value from a function. A function that does not return any value explicitly has a return type of void.

// Key Points About void
// Indicates No Return Value: Functions that don't return a meaningful value (e.g., logging functions) have the void return type.
// Cannot Assign Values: You cannot assign a void type to any variable except undefined (if allowed).
// Return Value is Optional: Functions with void can still implicitly return undefined.
// Examples
// 1. Void in Functions
// Functions that perform an action without returning a value (like logging to the console) are typed with void.

// typescript
// Copy code
// function logMessage(message: string): void {
//     console.log(message);
// }

// logMessage("Hello, world!"); // Output: Hello, world!
// 2. Void in Variables
// You generally don't use void for variables, but it is technically allowed to assign undefined to them.

// typescript
// Copy code
// let result: void;

// // result = 10; // ❌ Error: Type '10' is not assignable to type 'void'
// result = undefined; // ✅ Works
// Void vs. Undefined
// While void and undefined might seem similar, they are distinct:

// Feature	void	undefined
// Purpose	Used for functions with no return value.	Represents the absence of a defined value.
// Assignable	Can only be assigned undefined.	Can hold the value undefined.
// Default Behavior	A void function can return undefined implicitly.	Variables explicitly hold the value undefined.
// Practical Use Cases
// 1. Callback Functions with No Return Value
// You can use void for callbacks that don't return a value.

// typescript
// Copy code
// function executeCallback(callback: () => void): void {
//     callback();
// }

// executeCallback(() => {
//     console.log("This is a callback!");
// }); // Output: This is a callback!
// 2. Event Handlers
// Event handlers typically don't return a value, so their type can be void.

// typescript
// Copy code
// type ClickHandler = (event: MouseEvent) => void;

// const handleClick: ClickHandler = (event) => {
//     console.log(`Button clicked: ${event.type}`);
// };
// Can a Void Function Return?
// A void function can implicitly return undefined, but it cannot return any other value explicitly.

// Example:
// typescript
// Copy code
// function doNothing(): void {
//     return; // ✅ This is allowed (implicitly returns `undefined`).
// }

// // function invalidReturn(): void {
// //     return 10; // ❌ Error: Type '10' is not assignable to type 'void'.
// // }
// Void vs. Never
// void and never are often compared since both deal with functions, but their purposes differ significantly:

// Feature	void	never
// Meaning	Function doesn't return a value.	Function never returns (e.g., throws or loops forever).
// Assignable Values	Can return undefined.	Cannot return anything.
// Use Case	For functions that perform an action but don't return a value.	For functions that throw errors or never terminate.
// Best Practices
// Use Explicit Return Types:
// Declare void explicitly for functions with no return value.
// Avoid Using void for Variables:
// Use undefined or other appropriate types for variables.
// Let me know if you have more questions about void or its use cases! 😊






// *------------------
// * never Type
// *------------------


// ChatGPT said:
// ChatGPT
// In TypeScript, the never type represents a value that never occurs. It's commonly used in functions that throw errors, infinite loops, or situations where something logically shouldn't exist. The never type ensures that no value can be assigned to it.

// Key Points About never
// No Possible Value: A variable of type never can never hold any value.
// Used for Unreachable Code: It is often used for functions that don't return (e.g., throw exceptions or run indefinitely).
// Subtype of All Types: The never type is a subtype of all types but has no subtype itself except never.
// Examples
// 1. Function That Throws an Error
// A function that always throws an error never successfully completes. Therefore, its return type is never.

// typescript
// Copy code
// function throwError(message: string): never {
//     throw new Error(message);
// }
// 2. Infinite Loop
// A function with an infinite loop never returns.

// typescript
// Copy code
// function infiniteLoop(): never {
//     while (true) {
//         console.log("Running forever...");
//     }
// }
// 3. Exhaustive Checks
// The never type is useful when performing exhaustive checks, especially in discriminated unions.

// typescript
// Copy code
// type Shape = 
//   | { kind: "circle"; radius: number }
//   | { kind: "square"; side: number };

// function getArea(shape: Shape): number {
//     switch (shape.kind) {
//         case "circle":
//             return Math.PI * shape.radius ** 2;
//         case "square":
//             return shape.side ** 2;
//         default:
//             const _exhaustiveCheck: never = shape;
//             throw new Error(`Unhandled shape kind: ${_exhaustiveCheck}`);
//     }
// }
// In this example:

// If a new kind of shape (e.g., "triangle") is added to the Shape type but isn't handled in the switch, TypeScript will give a compile-time error for the never variable _exhaustiveCheck.
// When to Use never
// Error-Throwing Functions:
// To indicate that a function doesn't return normally.
// Exhaustive Type Checking:
// To ensure all possible cases in a union type are handled.
// Assertions for Unreachable Code:
// To mark code paths that logically should never execute.
// Common Mistakes with never
// Assigning Values to never
// You cannot assign any value to a never type.

// typescript
// Copy code
// let x: never;

// // x = 10; // ❌ Error: Type '10' is not assignable to type 'never'
// Incorrect Return Type
// If a function is expected to return never, any return statement other than throw or an infinite loop will result in an error.

// typescript
// Copy code
// function shouldNeverReturn(): never {
//     return; // ❌ Error: Function returning 'never' cannot have a return statement.
// }
// Practical Applications
// 1. Validating Exhaustive Unions
// typescript
// Copy code
// type TrafficLight = "red" | "yellow" | "green";

// function reactToLight(light: TrafficLight): string {
//     switch (light) {
//         case "red":
//             return "Stop";
//         case "yellow":
//             return "Slow down";
//         case "green":
//             return "Go";
//         default:
//             const _exhaustive: never = light; // Ensures all cases are handled.
//             return _exhaustive; // This will throw an error if there's an unhandled case.
//     }
// }
// 2. Assertions for Unreachable Code
// typescript
// Copy code
// function assertUnreachable(x: never): never {
//     throw new Error(`Unexpected value: ${x}`);
// }

// function getValue(input: string | number): string {
//     if (typeof input === "string") {
//         return input.toUpperCase();
//     } else if (typeof input === "number") {
//         return input.toFixed(2);
//     } else {
//         return assertUnreachable(input); // Ensures input is either string or number.
//     }
// }
// Comparison: void vs never
// Feature	void	never
// Meaning	Function doesn't return a value.	Function doesn't return at all (e.g., throws).
// Assignable Values	Can return undefined.	Cannot return anything.
// Use Case	Normal functions without a return value.	Functions that throw errors or have unreachable code.
// Let me know if you'd like further examples or clarification! 😊





// *------------------
// * void vs never Type
// *------------------

// ChatGPT said:
// ChatGPT
// Here’s a detailed comparison between void and never in TypeScript:

// Feature	void	never
// Meaning	Represents the absence of a return value.	Represents a value that never exists or a function that never returns.
// Purpose	For functions that return no meaningful value.	For functions that always throw errors or run indefinitely.
// Assignable Values	Can only be assigned undefined.	Cannot have any value assigned.
// Subtype of	A supertype of undefined and other types.	Subtype of all types, but has no subtype except itself.
// Return Behavior	Can implicitly return undefined.	Cannot return anything (function either throws or loops indefinitely).
// Use Cases	Logging, event handlers, and callbacks that don’t return a value.	Functions that throw errors, infinite loops, or exhaustive type checks.
// Code Examples
// 1. Void Function
// A void function performs an action but does not return a meaningful value.

// typescript
// Copy code
// function logMessage(message: string): void {
//     console.log(message);
// }

// logMessage("Hello, world!"); // Output: Hello, world!
// The logMessage function does not return any value, so its type is void.
// 2. Never Function
// A never function never completes. It either throws an error or runs forever.

// typescript
// Copy code
// function throwError(message: string): never {
//     throw new Error(message);
// }

// function infiniteLoop(): never {
//     while (true) {
//         console.log("Running forever...");
//     }
// }
// throwError and infiniteLoop do not return because they either throw or run indefinitely.
// Void vs. Never: Use in Exhaustive Checks
// Using never for Exhaustive Type Checks
// The never type ensures all possible cases in a union are handled.

// typescript
// Copy code
// type Animal = 
//   | { type: "dog"; breed: string }
//   | { type: "cat"; color: string };

// function handleAnimal(animal: Animal): string {
//     switch (animal.type) {
//         case "dog":
//             return `Dog breed: ${animal.breed}`;
//         case "cat":
//             return `Cat color: ${animal.color}`;
//         default:
//             const _exhaustiveCheck: never = animal; // Ensures all cases are handled.
//             throw new Error(`Unhandled case: ${_exhaustiveCheck}`);
//     }
// }
// The never variable _exhaustiveCheck ensures that if a new type (e.g., "bird") is added to Animal, the code will fail at compile time if it's not handled.
// Using void for Callbacks
// Void is ideal for callbacks that don’t need to return a value.

// typescript
// Copy code
// function executeCallback(callback: () => void): void {
//     callback();
// }

// executeCallback(() => {
//     console.log("Callback executed!");
// }); // Output: Callback executed!
// Key Differences
// Aspect	void	never
// Returning Values	A void function can implicitly return undefined.	A never function cannot return anything.
// Purpose	Used when a function doesn’t return a meaningful value.	Used when a function never returns or reaches the end.
// Type Assignments	A void type can be assigned undefined.	never cannot be assigned any value.
// Compile-Time Checks	Does not enforce exhaustive checks.	Helps enforce exhaustive type checks.
// When to Use
// Scenario	Use void	Use never
// A function doesn’t return a value explicitly.	✅ For event handlers, loggers, or simple utilities.	❌ Not needed.
// A function throws an error or loops indefinitely.	❌ Invalid.	✅ For error handling or infinite loops.
// Perform exhaustive type checks.	❌ Use never.	✅ Ensures all cases are handled.
// Example in Practice
// Here’s a combined example to highlight both void and never:

// typescript
// Copy code
// function processInput(input: string | number): void | never {
//     if (typeof input === "string") {
//         console.log(`String input: ${input}`);
//     } else if (typeof input === "number") {
//         console.log(`Number input: ${input}`);
//     } else {
//         throwError(input); // Ensures no unexpected input.
//     }
// }

// function throwError(value: never): never {
//     throw new Error(`Unexpected value: ${value}`);
// }
// void is used for normal cases (string or number) where we log output.
// never is used to handle unexpected input types.
// Let me know if you'd like further clarification or examples! 😊
