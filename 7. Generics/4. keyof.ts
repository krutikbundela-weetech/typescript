// keyof in TypeScript
// The keyof operator in TypeScript is used to create a union of the keys of a given type. It is often used to enforce type safety when working with object keys and values dynamically.

// Basic Syntax
// typescript
// Copy code
// type Keys = keyof Type;
// Here:

// Type is the object type or interface.
// Keys will be a union of the property names of Type.
// Example 1: Extracting Keys
// typescript
// Copy code
// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// type UserKeys = keyof User; // 'id' | 'name' | 'email'

// const key: UserKeys = "name"; // Valid
// // const invalidKey: UserKeys = "age"; // Error: Type '"age"' is not assignable to type 'UserKeys'.
// Example 2: Dynamic Access with keyof
// You can use keyof to type-safe access object properties dynamically.

// typescript
// Copy code
// function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key];
// }

// const user: User = { id: 1, name: "Alice", email: "alice@example.com" };
// const name = getValue(user, "name"); // "Alice"
// // const age = getValue(user, "age"); // Error: Argument of type '"age"' is not assignable to parameter of type '"id" | "name" | "email"'.
// Example 3: keyof with Index Signatures
// When using keyof with an object type that has an index signature, the result is the union of all possible keys.

// typescript
// Copy code
// type Dictionary = { [key: string]: number };
// type Keys = keyof Dictionary; // string

// const dictKey: Keys = "anyString"; // Valid
// Example 4: Combining keyof with Mapped Types
// You can use keyof in combination with mapped types to create flexible and reusable types.

// typescript
// Copy code
// type ReadOnly<T> = {
//   readonly [K in keyof T]: T[K];
// };

// interface Product {
//   id: number;
//   name: string;
//   price: number;
// }

// const readOnlyProduct: ReadOnly<Product> = {
//   id: 1,
//   name: "Laptop",
//   price: 1000,
// };

// // readOnlyProduct.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.
// Example 5: Filtering Keys
// You can use keyof with conditional types to filter keys based on their value types.

// typescript
// Copy code
// type FilterKeys<T, V> = {
//   [K in keyof T]: T[K] extends V ? K : never;
// }[keyof T];

// interface Example {
//   id: number;
//   name: string;
//   isActive: boolean;
// }

// type StringKeys = FilterKeys<Example, string>; // 'name'
// type NumberKeys = FilterKeys<Example, number>; // 'id'
// Key Use Cases
// Restricting Function Arguments: Ensure only valid keys of an object are passed to a function.
// Dynamic Object Access: Safely access or manipulate object properties at runtime.
// Mapped Types: Create utility types like Partial, ReadOnly, or Pick.
// Conditional Types: Filter or transform types based on their keys and value types.
// Comparison: keyof vs typeof
// keyof: Operates on types to extract keys as a union.
// typeof: Operates on values to get their runtime type.
// Example:

// typescript
// Copy code
// const obj = { id: 1, name: "Alice" };
// type ObjType = typeof obj; // { id: number; name: string }
// type Keys = keyof ObjType; // 'id' | 'name'
// keyof is a powerful tool in TypeScript for creating flexible, type-safe code when working with object types. Let me know if you'd like additional examples or explanations! 😊