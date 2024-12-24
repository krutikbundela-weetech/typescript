// Nullish Coalescing (??) in TypeScript
// The nullish coalescing operator (??) is a logical operator in JavaScript and TypeScript that returns the right-hand operand when the left-hand operand is null or undefined. It allows you to provide a default value only when the value is null or undefined, which is more precise than using the logical OR operator (||).

// Syntax
// typescript
// Copy code
// let result = value ?? defaultValue;
// If value is not null or undefined, the result is value.
// If value is null or undefined, the result is defaultValue.
// Why Use Nullish Coalescing?
// The nullish coalescing operator is often used to provide fallback values, but it only considers null and undefined as invalid, unlike the logical OR (||) operator, which considers falsy values like 0, false, "" (empty string), and NaN as invalid.

// Example 1: Basic Example of Nullish Coalescing
// typescript
// Copy code
// let userName: string | null = null;
// let displayName = userName ?? "Guest";
// console.log(displayName);  // Output: "Guest"
// In this example:

// userName is null.
// The ?? operator returns "Guest" because userName is null.
// Example 2: Using Nullish Coalescing with Undefined
// typescript
// Copy code
// let userAge: number | undefined = undefined;
// let age = userAge ?? 18;
// console.log(age);  // Output: 18
// In this case:

// userAge is undefined.
// The ?? operator returns 18, the fallback value.
// Example 3: Nullish Coalescing vs. OR Operator
// The key difference is how the operator treats falsy values. Let’s compare the nullish coalescing operator with the logical OR operator.

// typescript
// Copy code
// let value1 = 0;
// let value2 = "";
// let value3 = null;

// console.log(value1 ?? 10);  // Output: 0 (0 is a valid value)
// console.log(value2 ?? "default");  // Output: "" (empty string is a valid value)
// console.log(value3 ?? "fallback");  // Output: "fallback" (null is considered invalid)
// When using ??:

// The nullish coalescing operator only checks for null or undefined, so 0, "" (empty string), and false are not replaced with the default value.
// When using ||:

// typescript
// Copy code
// console.log(value1 || 10);  // Output: 10 (0 is falsy)
// console.log(value2 || "default");  // Output: "default" (empty string is falsy)
// console.log(value3 || "fallback");  // Output: "fallback" (null is falsy)
// The logical OR operator treats all falsy values (0, false, NaN, "", null, undefined) as invalid and will replace them with the default.
// Example 4: Handling Objects with Nullish Coalescing
// typescript
// Copy code
// interface User {
//   name: string | null;
//   age: number | undefined;
// }

// let user: User = { name: null, age: undefined };

// let userName = user.name ?? "Unknown";
// let userAge = user.age ?? 30;

// console.log(userName);  // Output: "Unknown"
// console.log(userAge);   // Output: 30
// The name property is null, so it returns "Unknown".
// The age property is undefined, so it returns 30.
// When to Use Nullish Coalescing
// Use ?? when you want to handle null or undefined specifically and leave other falsy values like 0, false, or "" intact.
// Use || if you want to handle all falsy values (including 0, false, and "").
// Important Notes
// Operator Precedence: The nullish coalescing operator has a lower precedence than most other operators (like +, -, *, &&, etc.), so it’s often necessary to use parentheses to ensure proper order of evaluation.

// typescript
// Copy code
// let result = (a ?? b) + c;
// Not Supported in Older Versions of JavaScript: The nullish coalescing operator is available in ECMAScript 2020 (ES11) and later versions. If you need to support older environments, ensure that you're using appropriate transpilation (e.g., with TypeScript or Babel).

// Summary
// The nullish coalescing operator (??) provides a default value when the left operand is null or undefined, but it doesn't treat other falsy values (0, false, "") as invalid.
// It's useful when you want a more specific fallback behavior compared to the logical OR operator (||), which treats all falsy values as invalid.