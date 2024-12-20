//? Union types allow you to specify that a variable can hold values of multiple types. You use the | (pipe) symbol to define a union type.

// *In TypeScript, when using a union type, it is essential to ensure that at least one of the types in the union includes all the required properties.Failure to do so will result in a type error during compilation.

const inputValue = (value: string | number | boolean): void => {};

inputValue(55);
inputValue("hello world");
inputValue(true);

//* Practice, we'll create a function that can accept different types of arguments and perform different actions based on the type of the input. Suppose we want to create a function that doubles the value if the input is a number, or converts the input to uppercase if it's a string. To achieve this,we can use a union type to allow the function to accept both numbers and strings.

const userInput = (value: string | number): string | number => {
  if (typeof value === "number") {
    return value * 2;
  } else if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    throw new Error("Invalid");
  }
};


console.log(userInput(10));
console.log(userInput("Krutik"));


//todo HOMEWORK TIME
//?we want to create a function that formats the value passed to it in a specific way based on its type:
//? If the input is a number, it should add a dollar sign and format it with two decimal places.
//? If the input is a boolean, it should return "Yes" for true and "No" for false.
//? If the input is a string, it should capitalize the first letter.

function formatValue(value: number | boolean | string): string {
    if (typeof value === "number") {
        // Format as a currency with two decimal places
        return `$${value.toFixed(2)}`;
    } else if (typeof value === "boolean") {
        // Return "Yes" for true and "No" for false
        return value ? "Yes" : "No";
    } else if (typeof value === "string") {
        // Capitalize the first letter of the string
        return value.charAt(0).toUpperCase() + value.slice(1);
    } else {
        throw new Error("Unsupported type");
    }
}

// Test cases
console.log(formatValue(123.456));  // Output: "$123.46"
console.log(formatValue(true));     // Output: "Yes"
console.log(formatValue(false));    // Output: "No"
console.log(formatValue("hello"));  // Output: "Hello"




// What is a Union in TypeScript?
// A union in TypeScript allows a variable to hold one of several specified types. It is defined using the pipe (|) symbol to combine types, making it possible to restrict a value to a set of predefined types while maintaining flexibility.

// Syntax
// typescript
// Copy code
// type UnionType = Type1 | Type2 | Type3;
// Examples of Union Types
// 1. Basic Example:
// typescript
// Copy code
// let value: string | number;
// value = "Hello"; // Valid
// value = 42;      // Valid
// // value = true; // Error: Type 'boolean' is not assignable to type 'string | number'
// 2. Using Union in Function Parameters:
// typescript
// Copy code
// function display(value: string | number) {
//     if (typeof value === "string") {
//         console.log(`String value: ${value}`);
//     } else {
//         console.log(`Number value: ${value}`);
//     }
// }

// display("Hello"); // Output: String value: Hello
// display(42);      // Output: Number value: 42
// Combining Union with Type Aliases
// Using a type alias makes union types reusable:

// typescript
// Copy code
// type ID = string | number;

// function getId(id: ID) {
//     console.log(`ID: ${id}`);
// }

// getId("abc123"); // Output: ID: abc123
// getId(101);      // Output: ID: 101
// Union and Arrays
// Unions can apply to arrays, allowing elements of different types:

// typescript
// Copy code
// let mixedArray: (string | number)[] = ["Alice", 30, "Bob", 25];
// Union with Literal Types
// Union types can include literal types, restricting the values to a specific set:

// typescript
// Copy code
// type Status = "active" | "inactive" | "pending";

// function updateStatus(status: Status) {
//     console.log(`Status updated to: ${status}`);
// }

// updateStatus("active"); // Valid
// // updateStatus("completed"); // Error: Type '"completed"' is not assignable to type 'Status'
// Narrowing with Type Guards
// TypeScript uses type guards to narrow down union types to specific types during runtime checks.

// Example:
// typescript
// Copy code
// function printLength(value: string | string[]) {
//     if (typeof value === "string") {
//         console.log(`String length: ${value.length}`);
//     } else {
//         console.log(`Array length: ${value.length}`);
//     }
// }

// printLength("Hello");         // Output: String length: 5
// printLength(["A", "B", "C"]); // Output: Array length: 3
// Advantages of Unions
// Flexibility: Allows variables to accept multiple types.
// Type Safety: Ensures only allowed types are used.
// Improved Readability: Makes intent clear in code.
// Use Cases
// APIs with Multiple Return Types:

// typescript
// Copy code
// type Response = string | { error: string };

// function getResponse(success: boolean): Response {
//     return success ? "Data received" : { error: "Request failed" };
// }
// Event Handling:

// typescript
// Copy code
// type Event = MouseEvent | KeyboardEvent;

// function handleEvent(event: Event) {
//     if (event instanceof MouseEvent) {
//         console.log("Mouse event:", event.clientX, event.clientY);
//     } else {
//         console.log("Keyboard event:", event.key);
//     }
// }
// Best Practices
// Use type aliases to keep union types manageable and reusable.
// Use type guards to handle logic for different types.
// Avoid overusing unions; overly complex types can reduce readability.