// type casting
// ChatGPT said:
// ChatGPT
// Type Casting in TypeScript is a way to explicitly tell the compiler to treat a value as a specific type. It is useful when you are confident about the type of a variable, and TypeScript's type inference cannot determine it automatically.

// Syntax
// TypeScript provides two ways to cast types:

// Angle-Bracket Syntax:

// typescript
// Copy code
// let value: any = "Hello, TypeScript!";
// let length: number = (<string>value).length;
// console.log(length); // Output: 18
// as Syntax:

// typescript
// Copy code
// let value: any = "Hello, TypeScript!";
// let length: number = (value as string).length;
// console.log(length); // Output: 18
// The as syntax is preferred in modern TypeScript code, as it avoids conflicts with JSX in React projects.
// Use Cases
// 1. Casting any to a Specific Type
// typescript
// Copy code
// let value: any = "This is a string";
// let length: number = (value as string).length;
// console.log(length); // Output: 16
// 2. Casting Between Compatible Types
// typescript
// Copy code
// type Person = { name: string; age: number };
// type Employee = { name: string; age: number; salary: number };

// let employee: Employee = { name: "Alice", age: 30, salary: 5000 };
// let person: Person = employee; // Implicit cast
// 3. Casting with DOM Elements
// typescript
// Copy code
// const input = document.querySelector("input") as HTMLInputElement;
// input.value = "Hello, World!";
// 4. Casting When Using unknown
// typescript
// Copy code
// let value: unknown = "I am unknown";

// // Casting to string
// let length: number = (value as string).length;
// console.log(length); // Output: 11
// Type Assertions vs. Type Checking
// Type Assertion:
// TypeScript assumes the value is of the asserted type, regardless of runtime type.

// typescript
// Copy code
// let value: any = "test";
// let length: number = (value as string).length;
// Type Checking:
// You ensure the value is of a certain type using type guards.

// typescript
// Copy code
// let value: any = "test";

// if (typeof value === "string") {
//     let length: number = value.length;
//     console.log(length);
// }
// Type assertions are less safe because they don’t check the type at runtime.
// Forced Type Casting
// Sometimes you need to bypass TypeScript's type-checking system completely using a double assertion. Use this with caution, as it can lead to runtime errors.

// typescript
// Copy code
// let value: any = "hello" as unknown as number; // Unsafe casting
// console.log(value); // No compile-time error, but the type is incorrect
// When to Use Type Casting
// Dealing with any or unknown: When you receive a value from an external source and need to work with it as a specific type.
// Working with the DOM: To access specific properties on HTML elements.
// Narrowing Down Compatible Types: When you want to work with overlapping or related types.
// Best Practices
// Avoid overusing type casting; rely on TypeScript's type inference wherever possible.
// Use type guards to ensure runtime safety instead of blindly asserting types.
// Prefer the as syntax over the angle-bracket syntax for better compatibility with modern tools.