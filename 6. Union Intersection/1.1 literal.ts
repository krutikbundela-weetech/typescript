// Literal Types in TypeScript
// A literal type in TypeScript represents a specific, fixed value. Literal types allow you to define types that are limited to specific string, number, or boolean values, and they are often used for defining exact options or choices.

// Types of Literals
// String Literal Type
// Number Literal Type
// Boolean Literal Type
// 1. String Literal Type
// A string literal type specifies that a value must be one of a predefined set of string values.

// Example:
// typescript
// Copy code
// type Direction = "up" | "down" | "left" | "right";

// function move(direction: Direction) {
//     console.log(`Moving ${direction}`);
// }

// move("up");    // ✅ Valid
// move("down");  // ✅ Valid
// // move("forward"); // ❌ Error: Argument of type '"forward"' is not assignable to type 'Direction'.
// 2. Number Literal Type
// A number literal type specifies that a value must be one of a predefined set of numbers.

// Example:
// typescript
// Copy code
// type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

// function rollDice(value: DiceRoll) {
//     console.log(`You rolled a ${value}`);
// }

// rollDice(3);   // ✅ Valid
// // rollDice(7); // ❌ Error: Argument of type '7' is not assignable to type 'DiceRoll'.
// 3. Boolean Literal Type
// A boolean literal type restricts a value to either true or false.

// Example:
// typescript
// Copy code
// type SwitchState = true | false;

// function setSwitch(state: SwitchState) {
//     console.log(`Switch is now ${state ? "ON" : "OFF"}`);
// }

// setSwitch(true);   // ✅ Valid
// setSwitch(false);  // ✅ Valid
// Using Literal Types with Functions
// Literal types can be combined with other types for more complex behaviors.

// Example:
// typescript
// Copy code
// type Status = "success" | "error";

// function handleResponse(status: Status): string {
//     if (status === "success") {
//         return "Operation was successful!";
//     } else {
//         return "An error occurred.";
//     }
// }

// console.log(handleResponse("success")); // ✅ Valid
// // console.log(handleResponse("failure")); // ❌ Error: Argument of type '"failure"' is not assignable to type 'Status'.
// Literal Types with Objects
// Literal types can also be used with objects to define stricter types.

// Example:
// typescript
// Copy code
// type Shape = {
//     kind: "circle" | "square";
//     size: number;
// };

// const shape: Shape = {
//     kind: "circle", // ✅ Must match the literal type
//     size: 10,
// };

// // shape.kind = "triangle"; // ❌ Error: Type '"triangle"' is not assignable to type '"circle" | "square"'.
// Combining Literal Types with Union and Intersection
// Example:
// typescript
// Copy code
// type StatusCode = 200 | 400 | 404 | 500;
// type Message = "success" | "error" | "not found";

// type ApiResponse = {
//     code: StatusCode;
//     message: Message;
// };

// const response: ApiResponse = {
//     code: 200,
//     message: "success",
// };
// Key Use Cases for Literal Types
// Defining Specific Choices:
// Restricting inputs or outputs to predefined values.
// Creating Constants:
// Making constant values type-safe.
// Improving Readability:
// Clear and concise type definitions.
// Literal Types vs Enums
// Feature	Literal Types	Enums
// Syntax Simplicity	Simple and concise	More verbose
// Flexibility	Works with unions	Provides a strict mapping
// Runtime Availability	No runtime representation	Exists as a runtime object in JavaScript
// Advanced: Literal Type Inference
// TypeScript can infer literal types for constants if you use as const.

// Example:
// typescript
// Copy code
// const direction = "up"; // Inferred as string
// const fixedDirection = "up" as const; // Inferred as "up"

// type Direction = typeof fixedDirection; // "up"
// Let me know if you'd like further clarification or examples! 😊