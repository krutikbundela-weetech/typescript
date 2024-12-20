//TODO 1: Write a program to add 2 numbers
//TODO 2: How to catch error & solve it
//TODO 3: Config file



// * func define
function sum(a:number,b:number):number {
    return a + b;
}

//* func call
// console.log(sum(5,"krutik"));
console.log(sum(5,10));


// @ts-ignore
// ChatGPT said:
// ChatGPT
// The @ts-ignore directive is a TypeScript comment that suppresses TypeScript errors on the next line of code. It effectively tells the TypeScript compiler to ignore any type-checking or errors for the specified line.

// Syntax:
// Add @ts-ignore as a comment above the line causing the error:

// typescript
// Copy code
// // @ts-ignore
// let num: string = "55";
// Usage Example:
// typescript
// Copy code
// console.log("hello");

// // @ts-ignore
// let num: string = "55"; // TypeScript will ignore any error on this line
// When to Use @ts-ignore
// Quick Debugging: Use it to temporarily suppress errors while debugging or prototyping.
// Working with Libraries: When using external libraries or code that TypeScript cannot properly infer types for.
// Legacy Code: To avoid modifying existing code while transitioning to TypeScript.
// Important Notes:
// Don't Overuse: Avoid using @ts-ignore unless absolutely necessary. Ignoring errors can lead to unintended bugs and harder-to-maintain code.
// Use @ts-expect-error When Appropriate: If you expect an error but want to document it, use @ts-expect-error. TypeScript will raise an error if no error occurs on the next line.
// Example:

// typescript
// Copy code
// // @ts-expect-error
// let num: string = 55; // Error is expected here
// This helps document intentional errors in the code and ensures they remain relevant.