// Discriminated Unions (also called Tagged Unions or Algebraic Data Types) in TypeScript are a design pattern used to handle multiple related types in a way that ensures type safety and exhaustive checks. They rely on a common property (the "discriminator") that exists in all types within a union.

// Key Features of Discriminated Unions
// Common Discriminator Property: All the types in the union share a property with distinct literal values.
// Type Narrowing: TypeScript uses the discriminator property to infer the specific type in a union.
// Exhaustiveness: Using a switch statement or similar constructs ensures all cases are handled, with never catching unhandled cases.
// Example
// Let's create a union type to represent different shapes:

// typescript
// Copy code
// type Shape =
//   | { kind: "circle"; radius: number }
//   | { kind: "rectangle"; width: number; height: number }
//   | { kind: "square"; side: number };
// Here:

// The kind property is the discriminator.
// Each shape (circle, rectangle, square) has unique properties.
// Using Discriminated Unions
// 1. Type Narrowing with switch
// typescript
// Copy code
// function getArea(shape: Shape): number {
//     switch (shape.kind) {
//         case "circle":
//             return Math.PI * shape.radius ** 2;
//         case "rectangle":
//             return shape.width * shape.height;
//         case "square":
//             return shape.side ** 2;
//         default:
//             const _exhaustiveCheck: never = shape; // Ensures all cases are handled.
//             throw new Error(`Unhandled shape: ${_exhaustiveCheck}`);
//     }
// }

// const myCircle: Shape = { kind: "circle", radius: 5 };
// console.log(getArea(myCircle)); // Output: 78.53981633974483
// The switch statement ensures all Shape types are handled.
// If a new shape is added to the Shape union, the default case will throw a compile-time error.
// 2. Type Narrowing with if Statements
// typescript
// Copy code
// function describeShape(shape: Shape): string {
//     if (shape.kind === "circle") {
//         return `A circle with radius ${shape.radius}`;
//     } else if (shape.kind === "rectangle") {
//         return `A rectangle of width ${shape.width} and height ${shape.height}`;
//     } else {
//         return `A square with side ${shape.side}`;
//     }
// }

// const myRectangle: Shape = { kind: "rectangle", width: 10, height: 20 };
// console.log(describeShape(myRectangle)); // Output: A rectangle of width 10 and height 20
// Adding a New Type
// If we add a new shape, such as triangle, the code will fail at compile time if all cases are not handled.

// typescript
// Copy code
// type Shape =
//   | { kind: "circle"; radius: number }
//   | { kind: "rectangle"; width: number; height: number }
//   | { kind: "square"; side: number }
//   | { kind: "triangle"; base: number; height: number };

// // Error: Switch or if-else statements must handle "triangle" for type safety.
// Use Cases
// Shapes and Geometry: Represent different types of shapes (like in the example above).
// API Responses: Model different types of API responses with a common status property.
// Event Handling: Different events in a UI can be modeled using discriminated unions.
// typescript
// Copy code
// type Event =
//   | { type: "click"; x: number; y: number }
//   | { type: "keydown"; key: string }
//   | { type: "scroll"; delta: number };

// function handleEvent(event: Event): void {
//     switch (event.type) {
//         case "click":
//             console.log(`Click at (${event.x}, ${event.y})`);
//             break;
//         case "keydown":
//             console.log(`Key pressed: ${event.key}`);
//             break;
//         case "scroll":
//             console.log(`Scrolled by ${event.delta}`);
//             break;
//     }
// }
// Advantages
// Type Safety: TypeScript ensures only valid properties are accessed for the narrowed type.
// Exhaustiveness: Ensures all possible cases in a union are handled.
// Improved Code Readability: The structure makes it clear which properties belong to which type.
// Let me know if you'd like further clarification or additional examples! 😊