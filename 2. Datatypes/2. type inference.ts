// *------------------------
// * Type Inference Feature
// *------------------------

//* Type inference in TypeScript refers to the ability of the TypeScript compiler to automatically determine and assign types to variables, expressions, and function return values based on their usage and context in the code.

// todo What are some best practices for using type inference in TypeScript?
//? Use type inference for simple cases where the assigned value clearly indicates the intended type.
// ? When in doubt, provide explicit type annotations to make your intentions clear.
// ? Avoid relying too heavily on type inference when the assigned value is complex or ambiguous.
// ? Regularly review and refactor your code to ensure the inferred types align with your intentions.


// todo What are some best practices for using type inference in TypeScript?
//? Use type inference for simple cases where the assigned value clearly indicates the intended type.
// ? When in doubt, provide explicit type annotations to make your intentions clear.
// ? Avoid relying too heavily on type inference when the assigned value is complex or ambiguous.
// ? Regularly review and refactor your code to ensure the inferred types align with your intentions.

//!Here are the two questions for practices
//* 1: Declare a variable message and initialize it with the value "Hello, TypeScript!". Infer the type of message using type inference.

// let message = "Hello, TypeScript!";
// console.log(message);
// The compiler infers the type string.

//* 2: Write a function calculateArea that takes the length and width parameters of type number and returns their product.Infer the return type of the function using type inference.

// function calculateArea(len: number, wid: number) {
//     return len * wid;
// }

// const result = calculateArea(10, 5);
// console.log(result);

// The compiler infers the type number.

// *----------------------------------
// * Type Inference Feature(ChatGPT)
// *----------------------------------

// What is Type Inference in TypeScript?
// Type inference is a feature in TypeScript where the compiler automatically determines the type of a variable, function, or expression without explicitly specifying it. This allows developers to omit type annotations when the type can be inferred from the context, making the code more concise and readable.

// Examples of Type Inference
// Variable Initialization:

// typescript
// Copy code
// let message = "Hello, TypeScript!"; // Inferred as string
// let count = 42;                    // Inferred as number
// let isActive = true;               // Inferred as boolean
// The TypeScript compiler infers the types (string, number, and boolean) based on the values assigned.

// Function Return Type:

// typescript
// Copy code
// function add(a: number, b: number) {
//     return a + b; // Return type inferred as number
// }

// const result = add(5, 10); // result inferred as number
// The compiler infers the return type of add as number from the a + b expression.

// Array Inference:

// typescript
// Copy code
// let numbers = [1, 2, 3, 4, 5]; // Inferred as number[]
// let mixed = [1, "two", true];  // Inferred as (string | number | boolean)[]
// Contextual Typing: Type inference also works in certain contexts, such as event handlers:

// typescript
// Copy code
// window.addEventListener("click", (event) => {
//     console.log(event.clientX); // event inferred as MouseEvent
// });
// Benefits of Type Inference
// Less Boilerplate Code: You don't need to explicitly annotate types in many cases.

// typescript
// Copy code
// let name: string = "Alice"; // Explicit
// let name = "Alice";         // Type inferred as string
// Improved Readability: Reduces clutter in the code, focusing only on the logic.

// Type Safety: Even without explicit type annotations, TypeScript ensures type safety using inference.

// When to Use Type Inference
// Use inference when the type is obvious or unambiguous.
// Explicitly annotate types when the type is complex or for public APIs, like functions, classes, or interfaces, to make the intent clear.
// Overriding Type Inference
// If the inferred type is not what you want, you can explicitly declare the type:

// typescript
// Copy code
// let value: any = "42"; // Explicitly overriding inferred string to any
// value = 42;            // Now valid because of `any`
// Limitations of Type Inference
// Complex Expressions: In some cases, TypeScript cannot infer types accurately for complex expressions or chained operations.

// typescript
// Copy code
// const data = JSON.parse('{"name": "Alice"}'); // Inferred as any
// Ambiguity: When the compiler cannot decide on a single type, you may need to annotate:

// typescript
// Copy code
// let value; // Inferred as any
// value = 42;
// It's better to provide an explicit type:

// typescript
// Copy code
// let value: number;
// value = 42;
// Let me know if you'd like to explore specific examples or details further!



